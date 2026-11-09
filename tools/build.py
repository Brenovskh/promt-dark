#!/usr/bin/env python3
"""Download the site's CSS bundles, generate overrides and build
promt-dark.user.js (Tampermonkey/Violentmonkey) + promt-dark.user.css (Stylus).
Usage: python3 tools/build.py [version]   (run from repo root)"""
import re, subprocess, sys, urllib.request, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
TOOLS = ROOT / "tools"
CACHE = TOOLS / ".cache"
SITE = "https://www.online-translator.com"
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0"}
REPO = "https://github.com/Brenovskh/promt-dark"
RAW = "https://raw.githubusercontent.com/Brenovskh/promt-dark/main"

def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30).read().decode("utf-8")

def main():
    version = sys.argv[1] if len(sys.argv) > 1 else "1.0.0"
    CACHE.mkdir(exist_ok=True)
    html = get(SITE + "/")
    bundles = re.findall(r'href="(/css/[a-z]+\.bundle\.css)[^"]*"', html)
    files = []
    for b in bundles:
        p = CACHE / pathlib.Path(b).name
        p.write_text(get(SITE + b), encoding="utf-8")
        files.append(str(p))
    auto = subprocess.run([sys.executable, "-I", str(TOOLS / "gen.py"), *files],
                          check=True, capture_output=True, text=True).stdout
    manual = (TOOLS / "manual.css").read_text(encoding="utf-8")
    css = ("/* generated from the site's own CSS by tools/gen.py */\n" + auto
           + "\n/* ---- manual tweaks (tools/manual.css) ---- */\n" + manual)

    meta = dict(name="PROMT.One (online-translator.com) Dark",
                desc="Dark theme for online-translator.com (PROMT.One), generated from the site's own CSS",
                author="Brenovskh")

    usercss = f"""/* ==UserStyle==
@name         {meta['name']}
@namespace    github.com/Brenovskh/promt-dark
@version      {version}
@description  {meta['desc']}
@author       {meta['author']}
@homepageURL  {REPO}
@supportURL   {REPO}/issues
@updateURL    {RAW}/promt-dark.user.css
@license      MIT
==/UserStyle== */

@-moz-document domain("online-translator.com") {{
{css}
}}
"""
    esc = css.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    userjs = f"""// ==UserScript==
// @name         {meta['name']}
// @namespace    github.com/Brenovskh/promt-dark
// @version      {version}
// @description  {meta['desc']}
// @author       {meta['author']}
// @license      MIT
// @homepageURL  {REPO}
// @supportURL   {REPO}/issues
// @downloadURL  {RAW}/promt-dark.user.js
// @updateURL    {RAW}/promt-dark.user.js
// @match        *://online-translator.com/*
// @match        *://*.online-translator.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {{
  'use strict';
  const css = `{esc}`;
  const s = document.createElement('style');
  s.id = 'promt-dark';
  s.textContent = css;
  (document.head || document.documentElement).appendChild(s);
  // move to the end of <head> once it exists so it wins over the site's sheets
  document.addEventListener('DOMContentLoaded', () => document.head && document.head.appendChild(s));
}})();
"""
    (ROOT / "promt-dark.user.css").write_text(usercss, encoding="utf-8")
    (ROOT / "promt-dark.user.js").write_text(userjs, encoding="utf-8")
    print(f"built v{version} from {len(files)} bundles: {', '.join(pathlib.Path(f).name for f in files)}")

if __name__ == "__main__":
    main()
