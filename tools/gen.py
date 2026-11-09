#!/usr/bin/env python3
"""Generate a static dark userstyle for online-translator.com (PROMT.One)
from the site's own CSS bundles: every rule that sets a colour gets an
override with the colour remapped (light bg -> dark, dark text -> light)."""
import re, sys, colorsys

NAMED = {"white": "#ffffff", "black": "#000000"}

def parse_color(s):
    s = s.strip().lower()
    s = NAMED.get(s, s)
    m = re.fullmatch(r"#([0-9a-f]{3,8})", s)
    if m:
        h = m.group(1)
        if len(h) in (3, 4):
            h = "".join(c * 2 for c in h)
        r, g, b = (int(h[i:i+2], 16) / 255 for i in (0, 2, 4))
        a = int(h[6:8], 16) / 255 if len(h) == 8 else 1.0
        return r, g, b, a
    m = re.fullmatch(r"rgba?\(([^)]*)\)", s)
    if m:
        parts = [p for p in re.split(r"[\s,/]+", m.group(1).strip()) if p]
        if len(parts) < 3:
            return None
        def ch(p):
            return float(p[:-1]) / 100 if p.endswith("%") else float(p) / 255
        r, g, b = (ch(p) for p in parts[:3])
        a = 1.0
        if len(parts) > 3:
            a = float(parts[3][:-1]) / 100 if parts[3].endswith("%") else float(parts[3])
        return r, g, b, a
    return None

def fmt(r, g, b, a):
    r, g, b = (max(0, min(255, round(x * 255))) for x in (r, g, b))
    if a >= 0.999:
        return f"#{r:02x}{g:02x}{b:02x}"
    return f"rgba({r},{g},{b},{a:.3g})"

def lum(r, g, b):
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def remap(col, kind):
    """kind: 'bg' | 'fg' | 'border'"""
    c = parse_color(col)
    if c is None:
        return col
    r, g, b, a = c
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    L = lum(r, g, b)
    if max(r, g, b) - min(r, g, b) < 0.06:
        s = 0.0
    if kind == "bg":
        # Pure white/black translucent overlays: flip them.
        if s < 0.05 and a < 0.999:
            v = 0.0 if L > 0.5 else 1.0
            return fmt(v, v, v, a)
        if L < 0.42:
            # Already dark (dark buttons, overlays). Saturated brand stays.
            return col
        if s > 0.45 and 0.3 < l < 0.62:
            return col  # vivid brand colour (green buttons etc.)
        # light bg -> dark: map lightness 1.0..0.42 to 0.11..0.24
        nl = 0.11 + (1 - l) / 0.58 * 0.13
        ns = min(s, 0.35) if s > 0 else 0
        nr, ng, nb = colorsys.hls_to_rgb(h, nl, ns)
        return fmt(nr, ng, nb, a)
    if kind == "fg":
        if s < 0.05 and a < 0.999:
            v = 1.0 if L < 0.5 else 0.0
            return fmt(v, v, v, a)
        if L > 0.55:
            return col  # already light text (on dark/brand bg)
        if s > 0.45:
            # coloured text: lift lightness so it reads on dark bg
            nl = max(l, 0.62)
            nr, ng, nb = colorsys.hls_to_rgb(h, nl, min(s, 0.85))
            return fmt(nr, ng, nb, a)
        # dark grey text -> light grey, keeping hierarchy
        nl = 0.92 - l * 0.55
        nr, ng, nb = colorsys.hls_to_rgb(h, nl, min(s, 0.2))
        return fmt(nr, ng, nb, a)
    if kind == "border":
        if s > 0.45 and 0.3 < l < 0.62:
            return col
        if s < 0.05 and a < 0.999:
            v = 1.0 if L < 0.5 else 0.0
            return fmt(v, v, v, a)
        if L > 0.5:
            nl = 0.2 + (1 - l) * 0.25
            nr, ng, nb = colorsys.hls_to_rgb(h, nl, min(s, 0.3))
            return fmt(nr, ng, nb, a)
        return col
    return col

COLOR_RE = re.compile(r"#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|\b(?:white|black)\b")

def remap_value(val, kind):
    return COLOR_RE.sub(lambda m: remap(m.group(0), kind), val)

def prop_kind(prop):
    p = prop.lower()
    if p in ("background", "background-color", "background-image"):
        return "bg"
    if p in ("color", "fill", "caret-color", "-webkit-text-fill-color", "stroke"):
        return "fg"
    if p.startswith("border") or p in ("outline", "outline-color", "column-rule", "text-decoration-color"):
        return "border"
    if p in ("box-shadow",):
        return "shadow"
    if p.startswith("--"):
        n = p
        if re.search(r"(?:^--|-)(?:ink|mute|num|text|fg)\b", n) and "bg" not in n:
            return "fg"
        if re.search(r"line|border", n):
            return "border"
        if re.search(r"bg|surface|tint|paper|badge|-50\b|-100\b|card|plate-bg", n):
            return "bg"
        return None
    return None

def strip_comments(css):
    return re.sub(r"/\*.*?\*/", "", css, flags=re.S)

def walk(css, out, wrap=None):
    i, n = 0, len(css)
    while i < n:
        j = css.find("{", i)
        if j < 0:
            break
        sel = css[i:j].strip()
        # find matching brace
        depth, k = 1, j + 1
        while k < n and depth:
            if css[k] == "{":
                depth += 1
            elif css[k] == "}":
                depth -= 1
            k += 1
        body = css[j+1:k-1]
        i = k
        if sel.startswith("@media"):
            if "print" in sel and "screen" not in sel:
                continue
            walk(body, out, sel)
            continue
        if sel.startswith("@supports"):
            walk(body, out, wrap)
            continue
        if sel.startswith("@"):
            continue  # keyframes, font-face, ...
        decls = []
        for d in re.split(r";(?![^(]*\))", body):
            if ":" not in d:
                continue
            prop, val = d.split(":", 1)
            prop, val = prop.strip(), val.strip().replace("!important", "").strip()
            kind = prop_kind(prop)
            if not kind:
                continue
            if not COLOR_RE.search(val):
                if kind == "shadow" or prop.startswith("--") or "url(" in val:
                    continue
                decls.append(f"{prop}: {val} !important")
                continue
            if kind == "shadow":
                # darken light glows, keep shadows black and slightly stronger
                nv = COLOR_RE.sub(lambda m: "rgba(0,0,0,.35)", val)
            else:
                nv = remap_value(val, kind)
            if nv != val:
                decls.append(f"{prop}: {nv} !important")
        if decls:
            out.append((wrap, sel, decls))

def main(files):
    out = []
    for f in files:
        walk(strip_comments(open(f, encoding="utf-8").read()), out)
    lines, cur = [], None
    for wrap, sel, decls in out:
        if wrap != cur:
            if cur:
                lines.append("}")
            if wrap:
                lines.append(wrap + " {")
            cur = wrap
        lines.append(f"{sel} {{ " + "; ".join(decls) + "; }")
    if cur:
        lines.append("}")
    sys.stdout.write("\n".join(lines) + "\n")

if __name__ == "__main__":
    main(sys.argv[1:])
