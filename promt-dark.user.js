// ==UserScript==
// @name         PROMT.One (online-translator.com) Dark
// @namespace    github.com/Brenovskh/promt-dark
// @version      1.0.0
// @description  Dark theme for online-translator.com (PROMT.One), generated from the site's own CSS
// @author       Brenovskh
// @license      MIT
// @homepageURL  https://github.com/Brenovskh/promt-dark
// @supportURL   https://github.com/Brenovskh/promt-dark/issues
// @downloadURL  https://raw.githubusercontent.com/Brenovskh/promt-dark/main/promt-dark.user.js
// @updateURL    https://raw.githubusercontent.com/Brenovskh/promt-dark/main/promt-dark.user.js
// @match        *://online-translator.com/*
// @match        *://*.online-translator.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const css = `/* generated from the site's own CSS by tools/gen.py */
body { color: #d6d6d6 !important; background-color: #1c1c1c !important; }
[tabindex="-1"]:focus { outline: 0 !important; }
abbr[title],abbr[data-original-title] { border-bottom: 0 !important; }
a { color: #4c9bf0 !important; background-color: transparent !important; }
a:hover { color: #4c9bf0 !important; }
a:not([href]):not([tabindex]) { color: inherit !important; }
a:not([href]):not([tabindex]):hover,a:not([href]):not([tabindex]):focus { color: inherit !important; }
a:not([href]):not([tabindex]):focus { outline: 0 !important; }
img { border-style: none !important; }
table { border-collapse: collapse !important; }
caption { color: #a4abb1 !important; }
button { border-radius: 0 !important; }
button:focus { outline: 1px dotted !important; outline: 5px auto -webkit-focus-ring-color !important; }
button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner { border-style: none !important; }
fieldset { border: 0 !important; }
legend { color: inherit !important; }
hr { border: 0 !important; border-top: 1px solid rgba(255,255,255,0.1) !important; }
mark,.mark { background-color: #2b2714 !important; }
.blockquote-footer { color: #a4abb1 !important; }
.img-thumbnail { background-color: #1c1c1c !important; border: 1px solid #3a3a3a !important; border-radius: .25rem !important; }
.figure-caption { color: #a4abb1 !important; }
code { color: #ea5298 !important; }
a>code { color: inherit !important; }
kbd { border-radius: .2rem !important; }
pre { color: #d6d6d6 !important; }
pre code { color: inherit !important; }
.table { color: #d6d6d6 !important; }
.table th,.table td { border-top: 1px solid #3a3a3a !important; }
.table thead th { border-bottom: 2px solid #3a3a3a !important; }
.table tbody+tbody { border-top: 2px solid #3a3a3a !important; }
.table-bordered { border: 1px solid #3a3a3a !important; }
.table-bordered th,.table-bordered td { border: 1px solid #3a3a3a !important; }
.table-bordered thead th,.table-bordered thead td { border-bottom-width: 2px !important; }
.table-borderless th,.table-borderless td,.table-borderless thead th,.table-borderless tbody+tbody { border: 0 !important; }
.table-striped tbody tr:nth-of-type(odd) { background-color: rgba(255,255,255,0.05) !important; }
.table-hover tbody tr:hover { color: #d6d6d6 !important; background-color: rgba(255,255,255,0.075) !important; }
.table-primary,.table-primary>th,.table-primary>td { background-color: #172331 !important; }
.table-primary th,.table-primary td,.table-primary thead th,.table-primary tbody+tbody { border-color: #2f4358 !important; }
.table-hover .table-primary:hover { background-color: #192634 !important; }
.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th { background-color: #192634 !important; }
.table-secondary,.table-secondary>th,.table-secondary>td { background-color: #252525 !important; }
.table-secondary th,.table-secondary td,.table-secondary thead th,.table-secondary tbody+tbody { border-color: #454545 !important; }
.table-hover .table-secondary:hover { background-color: #282828 !important; }
.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th { background-color: #282828 !important; }
.table-success,.table-success>th,.table-success>td { background-color: #18331e !important; }
.table-success th,.table-success td,.table-success thead th,.table-success tbody+tbody { border-color: #325c3b !important; }
.table-hover .table-success:hover { background-color: #1a3720 !important; }
.table-hover .table-success:hover>td,.table-hover .table-success:hover>th { background-color: #1a3720 !important; }
.table-info,.table-info>th,.table-info>td { background-color: #182f33 !important; }
.table-info th,.table-info td,.table-info thead th,.table-info tbody+tbody { border-color: #32565c !important; }
.table-hover .table-info:hover { background-color: #1a3337 !important; }
.table-hover .table-info:hover>td,.table-hover .table-info:hover>th { background-color: #1a3337 !important; }
.table-warning,.table-warning>th,.table-warning>td { background-color: #302a17 !important; }
.table-warning th,.table-warning td,.table-warning thead th,.table-warning tbody+tbody { border-color: #574d2f !important; }
.table-hover .table-warning:hover { background-color: #342d19 !important; }
.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th { background-color: #342d19 !important; }
.table-danger,.table-danger>th,.table-danger>td { background-color: #30171a !important; }
.table-danger th,.table-danger td,.table-danger thead th,.table-danger tbody+tbody { border-color: #562e32 !important; }
.table-hover .table-danger:hover { background-color: #34191c !important; }
.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th { background-color: #34191c !important; }
.table-light,.table-light>th,.table-light>td { background-color: #1c1c1c !important; }
.table-light th,.table-light td,.table-light thead th,.table-light tbody+tbody { border-color: #343434 !important; }
.table-hover .table-light:hover { background-color: #1f1f1f !important; }
.table-hover .table-light:hover>td,.table-hover .table-light:hover>th { background-color: #1f1f1f !important; }
.table-dark,.table-dark>th,.table-dark>td { background-color: #282828 !important; }
.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody { border-color: #4d4d4d !important; }
.table-hover .table-dark:hover { background-color: #2b2b2b !important; }
.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th { background-color: #2b2b2b !important; }
.table-active,.table-active>th,.table-active>td { background-color: rgba(255,255,255,0.075) !important; }
.table-hover .table-active:hover { background-color: rgba(255,255,255,0.075) !important; }
.table-hover .table-active:hover>td,.table-hover .table-active:hover>th { background-color: rgba(255,255,255,0.075) !important; }
.table .thead-light th { color: #bfbfbf !important; background-color: #202020 !important; border-color: #3a3a3a !important; }
.table-dark.table-bordered { border: 0 !important; }
.table-dark.table-striped tbody tr:nth-of-type(odd) { background-color: rgba(0,0,0,0.05) !important; }
.table-dark.table-hover tbody tr:hover { background-color: rgba(0,0,0,0.075) !important; }
@media(max-width:575.98px) {
.table-responsive-sm>.table-bordered { border: 0 !important; }
}
@media(max-width:767.98px) {
.table-responsive-md>.table-bordered { border: 0 !important; }
}
@media(max-width:991.98px) {
.table-responsive-lg>.table-bordered { border: 0 !important; }
}
@media(max-width:1199.98px) {
.table-responsive-xl>.table-bordered { border: 0 !important; }
}
.table-responsive>.table-bordered { border: 0 !important; }
.form-control { color: #bfbfbf !important; background-color: #1c1c1c !important; border: 1px solid #3e3e3e !important; border-radius: .25rem !important; }
.form-control::-ms-expand { background-color: transparent !important; border: 0 !important; }
.form-control:focus { color: #bfbfbf !important; background-color: #1c1c1c !important; border-color: #2f4257 !important; outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.form-control::-webkit-input-placeholder { color: #a4abb1 !important; }
.form-control::-moz-placeholder { color: #a4abb1 !important; }
.form-control:-ms-input-placeholder { color: #a4abb1 !important; }
.form-control::-ms-input-placeholder { color: #a4abb1 !important; }
.form-control::placeholder { color: #a4abb1 !important; }
.form-control:disabled,.form-control[readonly] { background-color: #202020 !important; }
select.form-control:focus::-ms-value { color: #bfbfbf !important; background-color: #1c1c1c !important; }
.form-control-plaintext { color: #d6d6d6 !important; background-color: transparent !important; border: solid transparent !important; border-width: 1px 0 !important; }
.form-control-sm { border-radius: .2rem !important; }
.form-control-lg { border-radius: .3rem !important; }
.form-check-input:disabled~.form-check-label { color: #a4abb1 !important; }
.valid-feedback { color: #63da7e !important; }
.valid-tooltip { border-radius: .25rem !important; }
.was-validated .form-control:valid:focus,.form-control.is-valid:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.was-validated .custom-select:valid,.custom-select.is-valid { background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px,url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") #1c1c1c no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) !important; }
.was-validated .custom-select:valid:focus,.custom-select.is-valid:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label { color: #63da7e !important; }
.was-validated .custom-control-input:valid~.custom-control-label,.custom-control-input.is-valid~.custom-control-label { color: #63da7e !important; }
.was-validated .custom-control-input:valid:focus~.custom-control-label::before,.custom-control-input.is-valid:focus~.custom-control-label::before { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.was-validated .custom-file-input:valid:focus~.custom-file-label,.custom-file-input.is-valid:focus~.custom-file-label { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.invalid-feedback { color: #e25a67 !important; }
.invalid-tooltip { border-radius: .25rem !important; }
.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.was-validated .custom-select:invalid,.custom-select.is-invalid { background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px,url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E") #1c1c1c no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) !important; }
.was-validated .custom-select:invalid:focus,.custom-select.is-invalid:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label { color: #e25a67 !important; }
.was-validated .custom-control-input:invalid~.custom-control-label,.custom-control-input.is-invalid~.custom-control-label { color: #e25a67 !important; }
.was-validated .custom-control-input:invalid:checked~.custom-control-label::before,.custom-control-input.is-invalid:checked~.custom-control-label::before { background-color: #422023 !important; }
.was-validated .custom-control-input:invalid:focus~.custom-control-label::before,.custom-control-input.is-invalid:focus~.custom-control-label::before { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.was-validated .custom-file-input:invalid:focus~.custom-file-label,.custom-file-input.is-invalid:focus~.custom-file-label { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn { color: #d6d6d6 !important; background-color: transparent !important; border: 1px solid transparent !important; border-radius: .25rem !important; }
.btn:hover { color: #d6d6d6 !important; }
.btn:focus,.btn.focus { outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-primary:focus,.btn-primary.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-secondary { background-color: #373b3f !important; }
.btn-secondary:focus,.btn-secondary.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-secondary.disabled,.btn-secondary:disabled { background-color: #373b3f !important; }
.btn-secondary:not(:disabled):not(.disabled):active:focus,.btn-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-secondary.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-success:focus,.btn-success.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-success:not(:disabled):not(.disabled):active:focus,.btn-success:not(:disabled):not(.disabled).active:focus,.show>.btn-success.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-info:focus,.btn-info.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-info:not(:disabled):not(.disabled):active:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.show>.btn-info.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-warning { color: #d6d6d6 !important; }
.btn-warning:hover { color: #d6d6d6 !important; }
.btn-warning:focus,.btn-warning.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-warning.disabled,.btn-warning:disabled { color: #d6d6d6 !important; }
.btn-warning:not(:disabled):not(.disabled):active,.btn-warning:not(:disabled):not(.disabled).active,.show>.btn-warning.dropdown-toggle { color: #d6d6d6 !important; }
.btn-warning:not(:disabled):not(.disabled):active:focus,.btn-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-warning.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-danger:focus,.btn-danger.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-danger:not(:disabled):not(.disabled):active:focus,.btn-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-danger.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-light { color: #d6d6d6 !important; background-color: #1d1d1d !important; border-color: #353535 !important; }
.btn-light:hover { color: #d6d6d6 !important; background-color: #222222 !important; border-color: #3b3b3b !important; }
.btn-light:focus,.btn-light.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-light.disabled,.btn-light:disabled { color: #d6d6d6 !important; background-color: #1d1d1d !important; border-color: #353535 !important; }
.btn-light:not(:disabled):not(.disabled):active,.btn-light:not(:disabled):not(.disabled).active,.show>.btn-light.dropdown-toggle { color: #d6d6d6 !important; background-color: #232323 !important; border-color: #3d3d3d !important; }
.btn-light:not(:disabled):not(.disabled):active:focus,.btn-light:not(:disabled):not(.disabled).active:focus,.show>.btn-light.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-dark:focus,.btn-dark.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-dark:not(:disabled):not(.disabled):active:focus,.btn-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-dark.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-primary { color: #4c9bf0 !important; }
.btn-outline-primary:focus,.btn-outline-primary.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-primary.disabled,.btn-outline-primary:disabled { color: #4c9bf0 !important; background-color: transparent !important; }
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-secondary { color: #a4abb1 !important; }
.btn-outline-secondary:hover { background-color: #373b3f !important; }
.btn-outline-secondary:focus,.btn-outline-secondary.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-secondary.disabled,.btn-outline-secondary:disabled { color: #a4abb1 !important; background-color: transparent !important; }
.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle { background-color: #373b3f !important; }
.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-success { color: #63da7e !important; }
.btn-outline-success:focus,.btn-outline-success.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-success.disabled,.btn-outline-success:disabled { color: #63da7e !important; background-color: transparent !important; }
.btn-outline-success:not(:disabled):not(.disabled):active:focus,.btn-outline-success:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-success.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-info { color: #53d5e9 !important; }
.btn-outline-info:focus,.btn-outline-info.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-info.disabled,.btn-outline-info:disabled { color: #53d5e9 !important; background-color: transparent !important; }
.btn-outline-info:not(:disabled):not(.disabled):active:focus,.btn-outline-info:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-info.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-warning:hover { color: #d6d6d6 !important; }
.btn-outline-warning:focus,.btn-outline-warning.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-warning.disabled,.btn-outline-warning:disabled { background-color: transparent !important; }
.btn-outline-warning:not(:disabled):not(.disabled):active,.btn-outline-warning:not(:disabled):not(.disabled).active,.show>.btn-outline-warning.dropdown-toggle { color: #d6d6d6 !important; }
.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-warning.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-danger { color: #e25a67 !important; }
.btn-outline-danger:focus,.btn-outline-danger.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-danger.disabled,.btn-outline-danger:disabled { color: #e25a67 !important; background-color: transparent !important; }
.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-danger.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-light { border-color: #353535 !important; }
.btn-outline-light:hover { color: #d6d6d6 !important; background-color: #1d1d1d !important; border-color: #353535 !important; }
.btn-outline-light:focus,.btn-outline-light.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-light.disabled,.btn-outline-light:disabled { background-color: transparent !important; }
.btn-outline-light:not(:disabled):not(.disabled):active,.btn-outline-light:not(:disabled):not(.disabled).active,.show>.btn-outline-light.dropdown-toggle { color: #d6d6d6 !important; background-color: #1d1d1d !important; border-color: #353535 !important; }
.btn-outline-light:not(:disabled):not(.disabled):active:focus,.btn-outline-light:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-light.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-dark { color: #cbcbcb !important; }
.btn-outline-dark:focus,.btn-outline-dark.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-outline-dark.disabled,.btn-outline-dark:disabled { color: #cbcbcb !important; background-color: transparent !important; }
.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-link { color: #4c9bf0 !important; }
.btn-link:hover { color: #4c9bf0 !important; }
.btn-link:disabled,.btn-link.disabled { color: #a4abb1 !important; }
.btn-lg,.btn-group-lg>.btn { border-radius: .3rem !important; }
.btn-sm,.btn-group-sm>.btn { border-radius: .2rem !important; }
.dropdown-toggle::after { border-top: .3em solid !important; border-right: .3em solid transparent !important; border-bottom: 0 !important; border-left: .3em solid transparent !important; }
.dropdown-menu { color: #d6d6d6 !important; background-color: #1c1c1c !important; border: 1px solid rgba(255,255,255,0.15) !important; border-radius: .25rem !important; }
.dropup .dropdown-toggle::after { border-top: 0 !important; border-right: .3em solid transparent !important; border-bottom: .3em solid !important; border-left: .3em solid transparent !important; }
.dropright .dropdown-toggle::after { border-top: .3em solid transparent !important; border-right: 0 !important; border-bottom: .3em solid transparent !important; border-left: .3em solid !important; }
.dropleft .dropdown-toggle::before { border-top: .3em solid transparent !important; border-right: .3em solid !important; border-bottom: .3em solid transparent !important; }
.dropdown-divider { border-top: 1px solid #383838 !important; }
.dropdown-item { color: #d6d6d6 !important; background-color: transparent !important; border: 0 !important; }
.dropdown-item:hover,.dropdown-item:focus { color: #dddddd !important; background-color: #1d1d1d !important; }
.dropdown-item.disabled,.dropdown-item:disabled { color: #a4abb1 !important; background-color: transparent !important; }
.dropdown-header { color: #a4abb1 !important; }
.dropdown-item-text { color: #d6d6d6 !important; }
.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn { border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important; }
.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child)>.btn { border-top-left-radius: 0 !important; border-bottom-left-radius: 0 !important; }
.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn { border-bottom-right-radius: 0 !important; border-bottom-left-radius: 0 !important; }
.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child)>.btn { border-top-left-radius: 0 !important; border-top-right-radius: 0 !important; }
.input-group>.form-control:not(:last-child),.input-group>.custom-select:not(:last-child) { border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important; }
.input-group>.form-control:not(:first-child),.input-group>.custom-select:not(:first-child) { border-top-left-radius: 0 !important; border-bottom-left-radius: 0 !important; }
.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after { border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important; }
.input-group>.custom-file:not(:first-child) .custom-file-label { border-top-left-radius: 0 !important; border-bottom-left-radius: 0 !important; }
.input-group-text { color: #bfbfbf !important; background-color: #202020 !important; border: 1px solid #3e3e3e !important; border-radius: .25rem !important; }
.input-group-lg>.form-control,.input-group-lg>.custom-select,.input-group-lg>.input-group-prepend>.input-group-text,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-append>.btn { border-radius: .3rem !important; }
.input-group-sm>.form-control,.input-group-sm>.custom-select,.input-group-sm>.input-group-prepend>.input-group-text,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-append>.btn { border-radius: .2rem !important; }
.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text,.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child) { border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important; }
.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child) { border-top-left-radius: 0 !important; border-bottom-left-radius: 0 !important; }
.custom-control-input:focus~.custom-control-label::before { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.custom-control-input:focus:not(:checked)~.custom-control-label::before { border-color: #2f4257 !important; }
.custom-control-input:not(:disabled):active~.custom-control-label::before { background-color: #182431 !important; border-color: #2a3c4f !important; }
.custom-control-input:disabled~.custom-control-label { color: #a4abb1 !important; }
.custom-control-input:disabled~.custom-control-label::before { background-color: #202020 !important; }
.custom-control-label::before { background-color: #1c1c1c !important; border: #3e464d solid 1px !important; }
.custom-control-label::after { background: no-repeat 50%/50% 50% !important; }
.custom-checkbox .custom-control-label::before { border-radius: .25rem !important; }
.custom-radio .custom-control-label::before { border-radius: 50% !important; }
.custom-switch .custom-control-label::before { border-radius: .5rem !important; }
.custom-switch .custom-control-label::after { background-color: #282d31 !important; border-radius: .5rem !important; }
.custom-switch .custom-control-input:checked~.custom-control-label::after { background-color: #1c1c1c !important; }
.custom-select { color: #bfbfbf !important; background-color: #1c1c1c !important; border: 1px solid #3e3e3e !important; border-radius: .25rem !important; }
.custom-select:focus { border-color: #2f4257 !important; outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.custom-select:focus::-ms-value { color: #bfbfbf !important; background-color: #1c1c1c !important; }
.custom-select[multiple],.custom-select[size]:not([size="1"]) { background-image: none !important; }
.custom-select:disabled { color: #a4abb1 !important; background-color: #202020 !important; }
.custom-file-input:focus~.custom-file-label { border-color: #2f4257 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.custom-file-input:disabled~.custom-file-label { background-color: #202020 !important; }
.custom-file-label { color: #bfbfbf !important; background-color: #1c1c1c !important; border: 1px solid #3e3e3e !important; border-radius: .25rem !important; }
.custom-file-label::after { color: #bfbfbf !important; background-color: #202020 !important; border-left: inherit !important; border-radius: 0 .25rem .25rem 0 !important; }
.custom-range { background-color: transparent !important; }
.custom-range:focus { outline: 0 !important; }
.custom-range:focus::-webkit-slider-thumb { box-shadow: 0 0 0 1px rgba(0,0,0,.35),0 0 0 .2rem rgba(0,0,0,.35) !important; }
.custom-range:focus::-moz-range-thumb { box-shadow: 0 0 0 1px rgba(0,0,0,.35),0 0 0 .2rem rgba(0,0,0,.35) !important; }
.custom-range:focus::-ms-thumb { box-shadow: 0 0 0 1px rgba(0,0,0,.35),0 0 0 .2rem rgba(0,0,0,.35) !important; }
.custom-range::-moz-focus-outer { border: 0 !important; }
.custom-range::-webkit-slider-thumb { border: 0 !important; border-radius: 1rem !important; }
.custom-range::-webkit-slider-thumb:active { background-color: #182431 !important; }
.custom-range::-webkit-slider-runnable-track { color: transparent !important; background-color: #232323 !important; border-color: transparent !important; border-radius: 1rem !important; }
.custom-range::-moz-range-thumb { border: 0 !important; border-radius: 1rem !important; }
.custom-range::-moz-range-thumb:active { background-color: #182431 !important; }
.custom-range::-moz-range-track { color: transparent !important; background-color: #232323 !important; border-color: transparent !important; border-radius: 1rem !important; }
.custom-range::-ms-thumb { border: 0 !important; border-radius: 1rem !important; }
.custom-range::-ms-thumb:active { background-color: #182431 !important; }
.custom-range::-ms-track { color: transparent !important; background-color: transparent !important; border-color: transparent !important; border-width: .5rem !important; }
.custom-range::-ms-fill-lower { background-color: #232323 !important; border-radius: 1rem !important; }
.custom-range::-ms-fill-upper { background-color: #232323 !important; border-radius: 1rem !important; }
.custom-range:disabled::-webkit-slider-thumb { background-color: #282d31 !important; }
.custom-range:disabled::-moz-range-thumb { background-color: #282d31 !important; }
.custom-range:disabled::-ms-thumb { background-color: #282d31 !important; }
.nav-link.disabled { color: #a4abb1 !important; }
.nav-tabs { border-bottom: 1px solid #3a3a3a !important; }
.nav-tabs .nav-link { border: 1px solid transparent !important; border-top-left-radius: .25rem !important; border-top-right-radius: .25rem !important; }
.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus { border-color: #383838 #383838 #3a3a3a !important; }
.nav-tabs .nav-link.disabled { color: #a4abb1 !important; background-color: transparent !important; border-color: transparent !important; }
.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link { color: #bfbfbf !important; background-color: #1c1c1c !important; border-color: #3a3a3a #3a3a3a #333333 !important; }
.nav-tabs .dropdown-menu { border-top-left-radius: 0 !important; border-top-right-radius: 0 !important; }
.nav-pills .nav-link { border-radius: .25rem !important; }
.navbar-toggler { background-color: transparent !important; border: 1px solid transparent !important; border-radius: .25rem !important; }
.navbar-toggler-icon { background: no-repeat center center !important; }
.navbar-light .navbar-brand { color: rgba(255,255,255,0.9) !important; }
.navbar-light .navbar-brand:hover,.navbar-light .navbar-brand:focus { color: rgba(255,255,255,0.9) !important; }
.navbar-light .navbar-nav .nav-link { color: rgba(255,255,255,0.5) !important; }
.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link:focus { color: rgba(255,255,255,0.7) !important; }
.navbar-light .navbar-nav .nav-link.disabled { color: rgba(255,255,255,0.3) !important; }
.navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .nav-link.active { color: rgba(255,255,255,0.9) !important; }
.navbar-light .navbar-toggler { color: rgba(255,255,255,0.5) !important; border-color: rgba(255,255,255,0.1) !important; }
.navbar-light .navbar-toggler-icon { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important; }
.navbar-light .navbar-text { color: rgba(255,255,255,0.5) !important; }
.navbar-light .navbar-text a { color: rgba(255,255,255,0.9) !important; }
.navbar-light .navbar-text a:hover,.navbar-light .navbar-text a:focus { color: rgba(255,255,255,0.9) !important; }
.navbar-dark .navbar-nav .nav-link { color: rgba(0,0,0,0.5) !important; }
.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus { color: rgba(0,0,0,0.75) !important; }
.navbar-dark .navbar-nav .nav-link.disabled { color: rgba(0,0,0,0.25) !important; }
.navbar-dark .navbar-toggler { color: rgba(0,0,0,0.5) !important; border-color: rgba(0,0,0,0.1) !important; }
.navbar-dark .navbar-toggler-icon { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0,0,0,0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important; }
.navbar-dark .navbar-text { color: rgba(0,0,0,0.5) !important; }
.card { background-color: #1c1c1c !important; border: 1px solid rgba(255,255,255,0.125) !important; border-radius: .25rem !important; }
.card>.list-group:first-child .list-group-item:first-child { border-top-left-radius: .25rem !important; border-top-right-radius: .25rem !important; }
.card>.list-group:last-child .list-group-item:last-child { border-bottom-right-radius: .25rem !important; border-bottom-left-radius: .25rem !important; }
.card-header { background-color: rgba(255,255,255,0.03) !important; border-bottom: 1px solid rgba(255,255,255,0.125) !important; }
.card-header:first-child { border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0 !important; }
.card-header+.list-group .list-group-item:first-child { border-top: 0 !important; }
.card-footer { background-color: rgba(255,255,255,0.03) !important; border-top: 1px solid rgba(255,255,255,0.125) !important; }
.card-footer:last-child { border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px) !important; }
.card-header-tabs { border-bottom: 0 !important; }
.card-img { border-radius: calc(.25rem - 1px) !important; }
.card-img-top { border-top-left-radius: calc(.25rem - 1px) !important; border-top-right-radius: calc(.25rem - 1px) !important; }
.card-img-bottom { border-bottom-right-radius: calc(.25rem - 1px) !important; border-bottom-left-radius: calc(.25rem - 1px) !important; }
@media(min-width:576px) {
.card-group>.card+.card { border-left: 0 !important; }
.card-group>.card:not(:last-child) { border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important; }
.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header { border-top-right-radius: 0 !important; }
.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer { border-bottom-right-radius: 0 !important; }
.card-group>.card:not(:first-child) { border-top-left-radius: 0 !important; border-bottom-left-radius: 0 !important; }
.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header { border-top-left-radius: 0 !important; }
.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer { border-bottom-left-radius: 0 !important; }
}
.accordion>.card:not(:first-of-type) .card-header:first-child { border-radius: 0 !important; }
.accordion>.card:not(:first-of-type):not(:last-of-type) { border-bottom: 0 !important; border-radius: 0 !important; }
.accordion>.card:first-of-type { border-bottom: 0 !important; border-bottom-right-radius: 0 !important; border-bottom-left-radius: 0 !important; }
.accordion>.card:last-of-type { border-top-left-radius: 0 !important; border-top-right-radius: 0 !important; }
.breadcrumb { background-color: #202020 !important; border-radius: .25rem !important; }
.breadcrumb-item+.breadcrumb-item::before { color: #a4abb1 !important; }
.breadcrumb-item.active { color: #a4abb1 !important; }
.pagination { border-radius: .25rem !important; }
.page-link { color: #4c9bf0 !important; background-color: #1c1c1c !important; border: 1px solid #3a3a3a !important; }
.page-link:hover { color: #4c9bf0 !important; background-color: #202020 !important; border-color: #3a3a3a !important; }
.page-link:focus { outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.page-item:first-child .page-link { border-top-left-radius: .25rem !important; border-bottom-left-radius: .25rem !important; }
.page-item:last-child .page-link { border-top-right-radius: .25rem !important; border-bottom-right-radius: .25rem !important; }
.page-item.disabled .page-link { color: #a4abb1 !important; background-color: #1c1c1c !important; border-color: #3a3a3a !important; }
.pagination-lg .page-item:first-child .page-link { border-top-left-radius: .3rem !important; border-bottom-left-radius: .3rem !important; }
.pagination-lg .page-item:last-child .page-link { border-top-right-radius: .3rem !important; border-bottom-right-radius: .3rem !important; }
.pagination-sm .page-item:first-child .page-link { border-top-left-radius: .2rem !important; border-bottom-left-radius: .2rem !important; }
.pagination-sm .page-item:last-child .page-link { border-top-right-radius: .2rem !important; border-bottom-right-radius: .2rem !important; }
.badge { border-radius: .25rem !important; }
.badge-pill { border-radius: 10rem !important; }
a.badge-primary:focus,a.badge-primary.focus { outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.badge-secondary { background-color: #373b3f !important; }
a.badge-secondary:focus,a.badge-secondary.focus { outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
a.badge-success:focus,a.badge-success.focus { outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
a.badge-info:focus,a.badge-info.focus { outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.badge-warning { color: #d6d6d6 !important; }
a.badge-warning:hover,a.badge-warning:focus { color: #d6d6d6 !important; }
a.badge-warning:focus,a.badge-warning.focus { outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
a.badge-danger:focus,a.badge-danger.focus { outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.badge-light { color: #d6d6d6 !important; background-color: #1d1d1d !important; }
a.badge-light:hover,a.badge-light:focus { color: #d6d6d6 !important; background-color: #232323 !important; }
a.badge-light:focus,a.badge-light.focus { outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
a.badge-dark:focus,a.badge-dark.focus { outline: 0 !important; box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.jumbotron { background-color: #202020 !important; border-radius: .3rem !important; }
.jumbotron-fluid { border-radius: 0 !important; }
.alert { border: 1px solid transparent !important; border-radius: .25rem !important; }
.alert-heading { color: inherit !important; }
.alert-dismissible .close { color: inherit !important; }
.alert-primary { color: #4c9bf0 !important; background-color: #16222e !important; border-color: #2a3b4e !important; }
.alert-primary hr { border-top-color: #2c3e52 !important; }
.alert-primary .alert-link { color: #4c9af0 !important; }
.alert-secondary { color: #c9c9c9 !important; background-color: #222222 !important; border-color: #3d3d3d !important; }
.alert-secondary hr { border-top-color: #404040 !important; }
.alert-secondary .alert-link { color: #d7d7d7 !important; }
.alert-success { color: #63d97e !important; background-color: #172f1d !important; border-color: #2b5034 !important; }
.alert-success hr { border-top-color: #2d5436 !important; }
.alert-success .alert-link { color: #63da7e !important; }
.alert-info { color: #53d4e9 !important; background-color: #172b2f !important; border-color: #2b4b50 !important; }
.alert-info hr { border-top-color: #2d4f54 !important; }
.alert-info .alert-link { color: #52d3eb !important; }
.alert-warning { color: #f0c64c !important; background-color: #2d2816 !important; border-color: #4e452a !important; }
.alert-warning hr { border-top-color: #52482c !important; }
.alert-warning .alert-link { color: #f0c74c !important; }
.alert-danger { color: #d9636e !important; background-color: #2d1618 !important; border-color: #4d2a2d !important; }
.alert-danger hr { border-top-color: #512c30 !important; }
.alert-danger .alert-link { color: #d9646e !important; }
.alert-light { color: #a3a3a3 !important; background-color: #1c1c1c !important; border-color: #333333 !important; }
.alert-light hr { border-top-color: #373737 !important; }
.alert-light .alert-link { color: #b1b1b1 !important; }
.alert-dark { color: #dadada !important; background-color: #252525 !important; border-color: #414141 !important; }
.alert-dark hr { border-top-color: #444444 !important; }
.alert-dark .alert-link { color: #e8e8e8 !important; }
.progress { background-color: #202020 !important; border-radius: .25rem !important; }
.progress-bar-striped { background-image: linear-gradient(45deg,rgba(0,0,0,0.15) 25%,transparent 25%,transparent 50%,rgba(0,0,0,0.15) 50%,rgba(0,0,0,0.15) 75%,transparent 75%,transparent) !important; }
.list-group-item-action { color: #bfbfbf !important; }
.list-group-item-action:hover,.list-group-item-action:focus { color: #bfbfbf !important; background-color: #1d1d1d !important; }
.list-group-item-action:active { color: #d6d6d6 !important; background-color: #202020 !important; }
.list-group-item { background-color: #1c1c1c !important; border: 1px solid rgba(255,255,255,0.125) !important; }
.list-group-item:first-child { border-top-left-radius: .25rem !important; border-top-right-radius: .25rem !important; }
.list-group-item:last-child { border-bottom-right-radius: .25rem !important; border-bottom-left-radius: .25rem !important; }
.list-group-item.disabled,.list-group-item:disabled { color: #a4abb1 !important; background-color: #1c1c1c !important; }
.list-group-horizontal .list-group-item:first-child { border-top-left-radius: .25rem !important; border-bottom-left-radius: .25rem !important; border-top-right-radius: 0 !important; }
.list-group-horizontal .list-group-item:last-child { border-top-right-radius: .25rem !important; border-bottom-right-radius: .25rem !important; border-bottom-left-radius: 0 !important; }
@media(min-width:576px) {
.list-group-horizontal-sm .list-group-item:first-child { border-top-left-radius: .25rem !important; border-bottom-left-radius: .25rem !important; border-top-right-radius: 0 !important; }
.list-group-horizontal-sm .list-group-item:last-child { border-top-right-radius: .25rem !important; border-bottom-right-radius: .25rem !important; border-bottom-left-radius: 0 !important; }
}
@media(min-width:768px) {
.list-group-horizontal-md .list-group-item:first-child { border-top-left-radius: .25rem !important; border-bottom-left-radius: .25rem !important; border-top-right-radius: 0 !important; }
.list-group-horizontal-md .list-group-item:last-child { border-top-right-radius: .25rem !important; border-bottom-right-radius: .25rem !important; border-bottom-left-radius: 0 !important; }
}
@media(min-width:992px) {
.list-group-horizontal-lg .list-group-item:first-child { border-top-left-radius: .25rem !important; border-bottom-left-radius: .25rem !important; border-top-right-radius: 0 !important; }
.list-group-horizontal-lg .list-group-item:last-child { border-top-right-radius: .25rem !important; border-bottom-right-radius: .25rem !important; border-bottom-left-radius: 0 !important; }
}
@media(min-width:1200px) {
.list-group-horizontal-xl .list-group-item:first-child { border-top-left-radius: .25rem !important; border-bottom-left-radius: .25rem !important; border-top-right-radius: 0 !important; }
.list-group-horizontal-xl .list-group-item:last-child { border-top-right-radius: .25rem !important; border-bottom-right-radius: .25rem !important; border-bottom-left-radius: 0 !important; }
}
.list-group-flush .list-group-item { border-right: 0 !important; border-left: 0 !important; border-radius: 0 !important; }
.list-group-flush:first-child .list-group-item:first-child { border-top: 0 !important; }
.list-group-flush:last-child .list-group-item:last-child { border-bottom: 0 !important; }
.list-group-item-primary { color: #4c9bf0 !important; background-color: #172331 !important; }
.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus { color: #4c9bf0 !important; background-color: #192634 !important; }
.list-group-item-secondary { color: #c9c9c9 !important; background-color: #252525 !important; }
.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus { color: #c9c9c9 !important; background-color: #282828 !important; }
.list-group-item-success { color: #63d97e !important; background-color: #18331e !important; }
.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus { color: #63d97e !important; background-color: #1a3720 !important; }
.list-group-item-info { color: #53d4e9 !important; background-color: #182f33 !important; }
.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus { color: #53d4e9 !important; background-color: #1a3337 !important; }
.list-group-item-warning { color: #f0c64c !important; background-color: #302a17 !important; }
.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus { color: #f0c64c !important; background-color: #342d19 !important; }
.list-group-item-danger { color: #d9636e !important; background-color: #30171a !important; }
.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus { color: #d9636e !important; background-color: #34191c !important; }
.list-group-item-light { color: #a3a3a3 !important; background-color: #1c1c1c !important; }
.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus { color: #a3a3a3 !important; background-color: #1f1f1f !important; }
.list-group-item-light.list-group-item-action.active { background-color: #383838 !important; border-color: #525252 !important; }
.list-group-item-dark { color: #dadada !important; background-color: #282828 !important; }
.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus { color: #dadada !important; background-color: #2b2b2b !important; }
.close { color: #ebebeb !important; }
.close:hover { color: #ebebeb !important; }
button.close { background-color: transparent !important; border: 0 !important; }
.toast { background-color: rgba(0,0,0,0.85) !important; border: 1px solid rgba(255,255,255,0.1) !important; box-shadow: 0 .25rem .75rem rgba(0,0,0,.35) !important; border-radius: .25rem !important; }
.toast-header { color: #a4abb1 !important; background-color: rgba(0,0,0,0.85) !important; border-bottom: 1px solid rgba(255,255,255,0.05) !important; }
.modal { outline: 0 !important; }
.modal-content { background-color: #1c1c1c !important; border: 1px solid rgba(255,255,255,0.2) !important; border-radius: .3rem !important; outline: 0 !important; }
.modal-header { border-bottom: 1px solid #3a3a3a !important; border-top-left-radius: .3rem !important; border-top-right-radius: .3rem !important; }
.modal-footer { border-top: 1px solid #3a3a3a !important; border-bottom-right-radius: .3rem !important; border-bottom-left-radius: .3rem !important; }
.tooltip .arrow::before { border-color: transparent !important; border-style: solid !important; }
.bs-tooltip-top .arrow::before,.bs-tooltip-auto[x-placement^="top"] .arrow::before { border-width: .4rem .4rem 0 !important; }
.bs-tooltip-right .arrow::before,.bs-tooltip-auto[x-placement^="right"] .arrow::before { border-width: .4rem .4rem .4rem 0 !important; }
.bs-tooltip-bottom .arrow::before,.bs-tooltip-auto[x-placement^="bottom"] .arrow::before { border-width: 0 .4rem .4rem !important; }
.bs-tooltip-left .arrow::before,.bs-tooltip-auto[x-placement^="left"] .arrow::before { border-width: .4rem 0 .4rem .4rem !important; }
.tooltip-inner { border-radius: .25rem !important; }
.popover { background-color: #1c1c1c !important; border: 1px solid rgba(255,255,255,0.2) !important; border-radius: .3rem !important; }
.popover .arrow::before,.popover .arrow::after { border-color: transparent !important; border-style: solid !important; }
.bs-popover-top>.arrow::before,.bs-popover-auto[x-placement^="top"]>.arrow::before { border-width: .5rem .5rem 0 !important; border-top-color: rgba(255,255,255,0.25) !important; }
.bs-popover-top>.arrow::after,.bs-popover-auto[x-placement^="top"]>.arrow::after { border-width: .5rem .5rem 0 !important; border-top-color: #333333 !important; }
.bs-popover-right>.arrow::before,.bs-popover-auto[x-placement^="right"]>.arrow::before { border-width: .5rem .5rem .5rem 0 !important; border-right-color: rgba(255,255,255,0.25) !important; }
.bs-popover-right>.arrow::after,.bs-popover-auto[x-placement^="right"]>.arrow::after { border-width: .5rem .5rem .5rem 0 !important; border-right-color: #333333 !important; }
.bs-popover-bottom>.arrow::before,.bs-popover-auto[x-placement^="bottom"]>.arrow::before { border-width: 0 .5rem .5rem .5rem !important; border-bottom-color: rgba(255,255,255,0.25) !important; }
.bs-popover-bottom>.arrow::after,.bs-popover-auto[x-placement^="bottom"]>.arrow::after { border-width: 0 .5rem .5rem .5rem !important; border-bottom-color: #333333 !important; }
.bs-popover-bottom .popover-header::before,.bs-popover-auto[x-placement^="bottom"] .popover-header::before { border-bottom: 1px solid #353535 !important; }
.bs-popover-left>.arrow::before,.bs-popover-auto[x-placement^="left"]>.arrow::before { border-width: .5rem 0 .5rem .5rem !important; border-left-color: rgba(255,255,255,0.25) !important; }
.bs-popover-left>.arrow::after,.bs-popover-auto[x-placement^="left"]>.arrow::after { border-width: .5rem 0 .5rem .5rem !important; border-left-color: #333333 !important; }
.popover-header { background-color: #1e1e1e !important; border-bottom: 1px solid #383838 !important; border-top-left-radius: calc(.3rem - 1px) !important; border-top-right-radius: calc(.3rem - 1px) !important; }
.popover-body { color: #d6d6d6 !important; }
.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus { outline: 0 !important; }
.carousel-control-prev-icon,.carousel-control-next-icon { background: no-repeat 50%/100% 100% !important; }
.carousel-indicators li { background-color: #1c1c1c !important; border-top: 10px solid transparent !important; border-bottom: 10px solid transparent !important; }
.spinner-border { border: .25em solid currentColor !important; border-right-color: transparent !important; border-radius: 50% !important; }
.spinner-border-sm { border-width: .2em !important; }
.spinner-grow { background-color: currentColor !important; border-radius: 50% !important; }
.bg-secondary { background-color: #373b3f !important; }
.bg-light { background-color: #1d1d1d !important; }
a.bg-light:hover,a.bg-light:focus,button.bg-light:hover,button.bg-light:focus { background-color: #232323 !important; }
.bg-white { background-color: #1c1c1c !important; }
.bg-transparent { background-color: transparent !important; }
.border { border: 1px solid #3a3a3a !important; }
.border-top { border-top: 1px solid #3a3a3a !important; }
.border-right { border-right: 1px solid #3a3a3a !important; }
.border-bottom { border-bottom: 1px solid #3a3a3a !important; }
.border-left { border-left: 1px solid #3a3a3a !important; }
.border-0 { border: 0 !important; }
.border-top-0 { border-top: 0 !important; }
.border-right-0 { border-right: 0 !important; }
.border-bottom-0 { border-bottom: 0 !important; }
.border-left-0 { border-left: 0 !important; }
.border-light { border-color: #353535 !important; }
.border-white { border-color: #333333 !important; }
.rounded-sm { border-radius: .2rem !important; }
.rounded { border-radius: .25rem !important; }
.rounded-top { border-top-left-radius: .25rem !important; border-top-right-radius: .25rem !important; }
.rounded-right { border-top-right-radius: .25rem !important; border-bottom-right-radius: .25rem !important; }
.rounded-bottom { border-bottom-right-radius: .25rem !important; border-bottom-left-radius: .25rem !important; }
.rounded-left { border-top-left-radius: .25rem !important; border-bottom-left-radius: .25rem !important; }
.rounded-lg { border-radius: .3rem !important; }
.rounded-circle { border-radius: 50% !important; }
.rounded-pill { border-radius: 50rem !important; }
.rounded-0 { border-radius: 0 !important; }
.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video { border: 0 !important; }
.sr-only { border: 0 !important; }
.shadow-sm { box-shadow: 0 .125rem .25rem rgba(0,0,0,.35) !important; }
.shadow { box-shadow: 0 .5rem 1rem rgba(0,0,0,.35) !important; }
.shadow-lg { box-shadow: 0 1rem 3rem rgba(0,0,0,.35) !important; }
.stretched-link::after { background-color: rgba(255,255,255,0) !important; }
.text-primary { color: #4c9bf0 !important; }
a.text-primary:hover,a.text-primary:focus { color: #4c9bf0 !important; }
.text-secondary { color: #a4abb1 !important; }
a.text-secondary:hover,a.text-secondary:focus { color: #bfbfbf !important; }
.text-success { color: #63da7e !important; }
a.text-success:hover,a.text-success:focus { color: #62da7f !important; }
.text-info { color: #53d5e9 !important; }
a.text-info:hover,a.text-info:focus { color: #53d4e9 !important; }
a.text-warning:hover,a.text-warning:focus { color: #f0c74c !important; }
.text-danger { color: #e25a67 !important; }
a.text-danger:hover,a.text-danger:focus { color: #e25a67 !important; }
.text-dark { color: #cbcbcb !important; }
a.text-dark:hover,a.text-dark:focus { color: #e0e0e0 !important; }
.text-body { color: #d6d6d6 !important; }
.text-muted { color: #a4abb1 !important; }
.text-black-50 { color: rgba(255,255,255,0.5) !important; }
.text-white-50 { color: rgba(0,0,0,0.5) !important; }
.text-hide { color: transparent !important; background-color: transparent !important; border: 0 !important; }
.text-reset { color: inherit !important; }
.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-danger,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-danger:active,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-danger:focus,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-danger:hover,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-dark,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-dark:active,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-dark:focus,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-dark:hover,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-info,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-info:active,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-info:focus,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-info:hover,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-primary,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-primary:active,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-primary:focus,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-primary:hover,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-secondary,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-secondary:active,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-secondary:focus,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-secondary:hover,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-success,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-success:active,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-success:focus,.bootstrap-select>.dropdown-toggle.bs-placeholder.btn-success:hover { color: rgba(0,0,0,0.5) !important; }
.bootstrap-select>select { border: 0 !important; }
.bootstrap-select .dropdown-toggle:focus,.bootstrap-select>select.mobile-device:focus+.dropdown-toggle { outline: 5px auto -webkit-focus-ring-color !important; }
.bootstrap-select.form-control { border: 0 !important; }
.form-group-lg .bootstrap-select.form-control .dropdown-toggle,.form-group-sm .bootstrap-select.form-control .dropdown-toggle { border-radius: inherit !important; }
.bootstrap-select.form-control-lg .dropdown-toggle,.bootstrap-select.form-control-sm .dropdown-toggle { border-radius: inherit !important; }
.bootstrap-select.disabled:focus,.bootstrap-select>.disabled:focus { outline: 0 !important; }
.input-group .bootstrap-select.form-control .dropdown-toggle { border-radius: inherit !important; }
.bootstrap-select .dropdown-menu>.inner:focus { outline: 0 !important; }
.bootstrap-select .dropdown-menu.inner { border: 0 !important; border-radius: 0 !important; }
.bootstrap-select .dropdown-menu li.active small { color: rgba(0,0,0,0.5) !important; }
.bootstrap-select .dropdown-menu .notify { background: #1e1e1e !important; border: 1px solid #3a3a3a !important; box-shadow: inset 0 1px 1px rgba(0,0,0,.35) !important; }
.bootstrap-select .no-results { background: #1e1e1e !important; }
.bootstrap-select .bs-ok-default:after { border-style: solid !important; border-width: 0 .26em .26em 0 !important; }
.bootstrap-select.show-menu-arrow .dropdown-toggle .filter-option:before { border-left: 7px solid transparent !important; border-right: 7px solid transparent !important; border-bottom: 7px solid rgba(0,0,0,0.2) !important; }
.bootstrap-select.show-menu-arrow .dropdown-toggle .filter-option:after { border-left: 6px solid transparent !important; border-right: 6px solid transparent !important; border-bottom: 6px solid #333333 !important; }
.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle .filter-option:before { border-top: 7px solid rgba(0,0,0,0.2) !important; border-bottom: 0 !important; }
.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle .filter-option:after { border-top: 6px solid #333333 !important; border-bottom: 0 !important; }
.btn-primary:not(:disabled):not(.disabled):hover,
.btn-primary:not(:disabled):not(.disabled):focus,
.btn-primary:not(:disabled):not(.disabled):active { background-color: #2c5c46 !important; box-shadow: 0 0 0 0.2rem rgba(0,0,0,.35) !important; }
.btn-outline-primary { color: #4cf0a4 !important; }
.text-primary { color: #4cf0a4 !important; }
.alert-primary { color: #4cf0a3 !important; background-color: #152b1f !important; border-color: #2c523b !important; }
.page-link { color: #4cf0a4 !important; }
a { color: #4cf0a4 !important; }
a:hover { color: #4cf0a2 !important; }
.form-control:focus,
.custom-select:focus { box-shadow: 0 0 0 0.2rem rgba(0,0,0,.35) !important; }
body { background: #1e1e1e !important; color: #dedede !important; }
.card { border-color: #3a3a3a !important; border-radius: 8px !important; background: #1c1c1c !important; }
.breadcrumb { background: transparent !important; color: #acacac !important; }
.breadcrumb-item a { color: inherit !important; }
.breadcrumb-item a:hover { color: #4cf0a2 !important; }
.breadcrumb-item.active { color: #dedede !important; }
.modal-content { border: 1px solid #3a3a3a !important; border-radius: 12px !important; }
:root { --brand-50: #152b1f !important; --brand-tint: #1e1e1e !important; --bg: #1e1e1e !important; --surface: #1c1c1c !important; --ink: #dedede !important; --ink-2: #c7c7c7 !important; --ink-3: #acacac !important; --ink-blue: #4c9bf0 !important; --line: #3a3a3a !important; --line-2: #383838 !important; --amber-tint: #2b2315 !important; }
body { color: var(--ink) !important; background: var(--bg) !important; }
a { color: inherit !important; }
.topbar { background: var(--surface) !important; border-bottom: 1px solid var(--line) !important; }
.brand-mark { color: var(--ink) !important; }
.topnav a { border-radius: 6px !important; color: var(--ink-2) !important; }
.topnav a.active { color: var(--ink) !important; }
.topnav a.active::after { background: var(--brand) !important; }
.topnav a:hover { background: var(--line-2) !important; }
.topnav a.active:hover { background: transparent !important; }
.lang-circle { border-radius: 50% !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; border: 1px solid transparent !important; }
.lang-circle:hover { border-color: var(--brand) !important; }
.lang-flag-btn { border-radius: 50% !important; background: transparent !important; border: 1px solid var(--line) !important; }
.lang-flag-btn:hover { border-color: var(--brand) !important; }
.flag-badge { border-radius: 50% !important; }
.menu-btn { border-radius: 6px !important; background: transparent !important; border: 1px solid var(--line) !important; color: var(--ink-2) !important; }
.menu-btn:hover { border-color: var(--ink-3) !important; color: var(--ink) !important; }
.dropdown-panel { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; box-shadow: 0 10px 32px rgba(0,0,0,.35), 0 2px 6px rgba(0,0,0,.35) !important; }
.dropdown-panel .dp-title { color: var(--ink-3) !important; }
.dropdown-panel .dp-item { color: var(--ink-2) !important; background: transparent !important; border: 0 !important; border-radius: 4px !important; }
.dropdown-panel .dp-item:hover { background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.dropdown-panel .dp-item.active { color: var(--brand-600) !important; }
.dropdown-panel .dp-item .dp-code { color: var(--ink-3) !important; background: var(--line-2) !important; border-radius: 3px !important; }
.dropdown-panel .dp-item.active .dp-code { background: var(--brand) !important; }
.dropdown-panel .dp-item .dp-check { color: var(--brand-600) !important; }
.dropdown-panel .dp-sep { background: var(--line) !important; }
.ad-unit, .rh-left-slide { color: var(--ink-4) !important; }
.ad-unit .ad-tag { color: var(--ink-3) !important; }
.ad-unit .ad-size { color: var(--ink-4) !important; }
.crumbs { color: var(--ink-3) !important; }
.crumbs a:hover { color: var(--brand-600) !important; }
.crumbs .sep { color: var(--ink-4) !important; }
.crumbs .current { color: var(--ink) !important; }
.hero { border-bottom: 1px solid var(--line) !important; }
.hero p.lede { color: var(--ink-2) !important; }
.daily-pick { border-radius: var(--r-lg) !important; box-shadow: 0 1px 2px rgba(0,0,0,.35) !important; }
.daily-pick::before { background: radial-gradient(1px 1px at 18% 22%, rgba(0,0,0,0.06) 50%, transparent 51%),
    radial-gradient(1px 1px at 78% 60%, rgba(0,0,0,0.05) 50%, transparent 51%),
    radial-gradient(1px 1px at 42% 84%, rgba(0,0,0,0.05) 50%, transparent 51%) !important; }
.daily-pick:hover { box-shadow: 0 12px 28px rgba(0,0,0,.35) !important; }
.daily-pick .dp-eyebrow { color: var(--brand) !important; }
.daily-pick .dp-eyebrow .dp-pulse { border-radius: 50% !important; background: var(--brand) !important; box-shadow: 0 0 0 0 rgba(0,0,0,.35) !important; }
.daily-pick .dp-cat { color: rgba(0,0,0,0.5) !important; }
.daily-pick .dp-phrases { border-top: 1px solid rgba(0,0,0,0.1) !important; border-bottom: 1px solid rgba(0,0,0,0.1) !important; }
.daily-pick .dp-phrases .dp-row .ru { color: rgba(0,0,0,0.55) !important; }
.daily-pick .dp-foot { color: rgba(0,0,0,0.7) !important; }
.daily-pick .dp-foot .dp-cta { color: var(--brand) !important; }
.hero-meta { color: var(--ink-3) !important; }
.hero-meta .dot-sep { color: var(--ink-4) !important; }
.search-box { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.search-box:focus-within { border-color: var(--brand) !important; }
.search-box input { border: 0 !important; outline: 0 !important; background: transparent !important; color: var(--ink) !important; }
.search-box .search-icn { color: var(--ink-3) !important; }
.search-box .clear { border: 0 !important; background: transparent !important; color: var(--ink-3) !important; border-radius: 4px !important; }
.search-box .clear:hover { background: var(--line-2) !important; color: var(--ink) !important; }
.search-box .kbd-hint { color: var(--ink-4) !important; background: var(--line-2) !important; border-radius: 4px !important; }
.cat-card { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-lg) !important; }
.cat-card:hover { border-color: var(--ink-4) !important; }
.cat-card .cat-stamp { color: var(--brand-50) !important; }
.cat-card p { color: var(--ink-2) !important; }
.cat-card .cat-meta { color: var(--ink-3) !important; }
.section-h .see-all { color: var(--brand-600) !important; }
.coll-card { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.coll-card::before { background: var(--brand) !important; }
.coll-card:hover { border-color: var(--brand) !important; box-shadow: 0 2px 12px rgba(0,0,0,.35) !important; }
.coll-card .ck-cat { color: var(--ink-3) !important; }
.coll-card .ck-samples { border-top: 1px dashed var(--line-2) !important; }
.coll-card .ck-samples .smp { color: var(--ink-2) !important; }
.coll-card .ck-samples .smp .en { color: var(--ink) !important; }
.coll-card .ck-samples .smp .ru { color: var(--ink-3) !important; }
.coll-card .ck-bottom { color: var(--ink-3) !important; }
.coll-card .lvl-badge { border-radius: 3px !important; background: var(--line-2) !important; color: var(--ink-2) !important; }
.coll-card .lvl-A1, .coll-card .lvl-A2 { background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.coll-card .lvl-B1 { background: #1e1e1e !important; color: #6c8bd1 !important; }
.coll-card .lvl-B2 { background: var(--amber-tint) !important; color: var(--amber) !important; }
.cat-header { border-bottom: 1px solid var(--line) !important; }
.cat-header .lede { color: var(--ink-2) !important; }
.cat-header .stamp { color: var(--ink-3) !important; }
.cat-side-mini { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.cat-side-mini h5 { color: var(--ink-3) !important; }
.cat-side-mini a { color: var(--ink-2) !important; border-bottom: 1px solid var(--line-2) !important; }
.cat-side-mini a:last-child { border-bottom: 0 !important; }
.cat-side-mini a:hover { color: var(--brand-600) !important; }
.coll-actions button { border: 1px solid var(--line) !important; background: var(--surface) !important; border-radius: 6px !important; color: var(--ink-2) !important; }
.coll-actions button:hover { border-color: var(--ink-4) !important; color: var(--ink) !important; background: var(--bg) !important; }
.coll-meta-strip { color: var(--ink-3) !important; border-bottom: 1px solid var(--line) !important; }
.coll-meta-strip .lvl-badge { border-radius: 3px !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.coll-meta-strip .reverse-toggle { background: var(--line-2) !important; border-radius: 100px !important; }
.coll-meta-strip .reverse-toggle button { border: 0 !important; background: transparent !important; border-radius: 100px !important; color: var(--ink-3) !important; }
.coll-meta-strip .reverse-toggle button.active { background: var(--surface) !important; color: var(--ink) !important; }
.phrase-toolbar .pt-search { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: 6px !important; }
.phrase-toolbar .pt-search input { border: 0 !important; outline: 0 !important; background: transparent !important; }
.phrase-toolbar .pt-search:focus-within { border-color: var(--brand) !important; }
.phrase-toolbar .pt-count { color: var(--ink-3) !important; }
.phrase-table { border-top: 1px solid var(--line) !important; border-bottom: 1px solid var(--line) !important; }
.phrase-table .ph-row { border-bottom: 1px solid var(--line-2) !important; }
.phrase-table .ph-row:last-child { border-bottom: 0 !important; }
.phrase-table .ph-row:hover { background: var(--brand-tint) !important; }
.phrase-table .ph-row.is-marked { background: #2a2614 !important; }
.phrase-table .ph-num { color: var(--ink-4) !important; }
.phrase-table .ph-source { color: var(--ink) !important; }
.phrase-table .ph-target { color: var(--ink-2) !important; border-left: 1px solid var(--line-2) !important; }
.phrase-table .ph-listen { border: 0 !important; background: transparent !important; border-radius: 4px !important; color: var(--ink-3) !important; }
.phrase-table .ph-listen:hover { color: var(--brand-600) !important; background: rgba(0,0,0,0.65) !important; }
.phrase-table .ph-listen.playing { color: var(--brand-600) !important; }
.phrase-table .ph-target { color: var(--ink-2) !important; border-left: 1px solid var(--line-2) !important; }
.phrase-table .ph-row mark { background: #332f19 !important; color: inherit !important; border-radius: 2px !important; }
.phrase-table .ph-actions button,
.phrase-table .ph-actions a { border: 0 !important; background: transparent !important; color: var(--ink-4) !important; border-radius: 4px !important; }
.phrase-table .ph-actions button:hover,
.phrase-table .ph-actions a:hover { background: rgba(0,0,0,0.6) !important; color: var(--ink) !important; }
.phrase-table .ph-actions button.copied { color: var(--brand-600) !important; }
.phrase-table .ph-head { border-bottom: 1px solid var(--line) !important; background: var(--bg) !important; color: var(--ink-3) !important; }
.phrase-table .ph-head .ph-target { border-left: 1px solid var(--line-2) !important; }
.phrase-cards .ph-card { border: 1px solid var(--line) !important; background: var(--surface) !important; border-radius: var(--r-md) !important; }
.phrase-cards .ph-card .src { color: var(--ink) !important; }
.phrase-cards .ph-card .tgt { color: var(--ink-2) !important; }
.phrase-cards .ph-card .num { color: var(--ink-4) !important; }
.phrase-cards .ph-card .row-actions button { border: 1px solid var(--line) !important; background: var(--surface) !important; border-radius: 4px !important; color: var(--ink-2) !important; }
.phrase-acc .acc-item { border-bottom: 1px solid var(--line) !important; }
.phrase-acc .acc-item .tgt { color: var(--ink-2) !important; }
.phrase-acc .acc-item .arrow { color: var(--ink-4) !important; }
.pager button { border-radius: 6px !important; border: 1px solid var(--line) !important; background: var(--surface) !important; color: var(--ink-2) !important; }
.pager button.active { background: var(--brand) !important; border-color: var(--brand) !important; }
.pager button:hover:not(.active) { border-color: var(--ink-4) !important; }
.pager .pager-info { color: var(--ink-3) !important; }
.coll-side h5 { color: var(--ink-3) !important; }
.coll-side .side-list a { border-bottom: 1px solid var(--line-2) !important; color: var(--ink-2) !important; }
.coll-side .side-list a:last-child { border-bottom: 0 !important; }
.coll-side .side-list a:hover { color: var(--brand-600) !important; }
.coll-side .side-list a .ct { color: var(--ink-4) !important; }
.coll-side .side-list a .seq { color: var(--ink-4) !important; }
.coll-side .tip-card { border: 1px solid var(--brand) !important; background: var(--brand-tint) !important; border-radius: var(--r-md) !important; color: var(--ink-2) !important; }
.coll-side .tip-card strong { color: var(--ink) !important; }
.crosslinks { border-top: 1px solid var(--line) !important; }
.crosslinks h6 { color: var(--ink-3) !important; }
.crosslinks a { color: var(--ink-2) !important; }
.crosslinks a:hover { color: var(--brand-600) !important; }
.site-footer { background: var(--surface) !important; border-top: 1px solid var(--line) !important; color: var(--ink-3) !important; }
.ft-langs { border-bottom: 1px solid var(--line) !important; }
.ft-lang-list a { color: var(--ink-3) !important; }
.ft-lang-list a:hover { color: var(--brand-600) !important; }
.ft-cols { border-bottom: 1px solid var(--line) !important; }
.ft-brand .ft-mark { color: var(--ink) !important; }
.ft-brand .ft-mark .ico { color: var(--brand) !important; }
.ft-brand p { color: var(--ink-3) !important; }
.ft-col h6 { color: var(--ink-3) !important; }
.ft-col a { color: var(--ink-2) !important; }
.ft-col a:hover { color: var(--brand-600) !important; }
.ft-legal-links a { color: var(--ink-3) !important; border-right: 1px solid var(--line) !important; }
.ft-legal-links a:last-child { border-right: 0 !important; }
.ft-legal-links a:hover { color: var(--brand-600) !important; }
.ft-copy { color: var(--ink-4) !important; }
.translator-shell h1 { color: var(--ink-2) !important; }
.translator-card { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.translator-card .tr-langbar { border-bottom: 1px solid var(--line) !important; }
.translator-card .tr-lang { border: 0 !important; background: transparent !important; border-radius: 6px !important; color: var(--ink-2) !important; }
.translator-card .tr-lang:hover { background: var(--line-2) !important; color: var(--ink) !important; }
.translator-card .tr-lang .chev { color: var(--ink-4) !important; }
.translator-card .tr-swap { border: 0 !important; background: transparent !important; border-radius: 6px !important; color: var(--ink-3) !important; }
.translator-card .tr-swap:hover { background: var(--line-2) !important; color: var(--ink) !important; }
.translator-card .pane.source { border-right: 1px solid var(--line) !important; }
.translator-card .tr-clear { border: 0 !important; background: transparent !important; border-radius: 6px !important; color: var(--ink-4) !important; }
.translator-card .tr-clear:hover { background: var(--line-2) !important; color: var(--ink) !important; }
.translator-card .pane textarea { border: 0 !important; outline: 0 !important; color: var(--ink) !important; background: transparent !important; }
.translator-card .pane .result { color: var(--ink) !important; }
.translator-card .pane .pane-foot { color: var(--ink-4) !important; }
.translator-card .pane .pane-foot .ico-btn { border-radius: 6px !important; border: 0 !important; background: transparent !important; color: var(--ink-3) !important; }
.translator-card .pane .pane-foot .ico-btn:hover { background: var(--line-2) !important; color: var(--ink) !important; }
.translator-card .pane .pane-foot .char-count { color: var(--ink-4) !important; }
.translator-card .tr-translate { border-radius: 50% !important; border: 3px solid var(--surface) !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; box-shadow: 0 1px 3px rgba(0,0,0,.35) !important; }
.translator-card .tr-translate:hover { background: var(--brand) !important; box-shadow: 0 8px 22px rgba(0,0,0,.35) !important; }
@media (max-width: 560px) {
.translator-card .pane.source { border-right: 0 !important; border-bottom: 1px solid var(--line) !important; }
}
.below-translator { border: 1px solid var(--line) !important; }
.tr-phrases { border: 1px solid var(--line) !important; border-radius: var(--r-lg) !important; background: radial-gradient(120% 160% at 100% 0%, var(--brand-tint) 0%, rgba(0,0,0,0) 60%), var(--surface) !important; }
.tr-phrases-h p { color: var(--ink-3) !important; }
.tr-phrases-list a { border: 1px solid var(--line) !important; border-radius: 8px !important; background: #1c1c1c !important; }
.tr-phrases-list a:hover { border-color: var(--brand) !important; }
.tp-title { color: var(--ink) !important; }
.tp-count { color: var(--ink-4) !important; }
.tr-phrases-all { color: var(--brand-600) !important; }
.tr-promo { border-radius: var(--r-lg) !important; color: #d9d9d9 !important; }
.tr-promo p { color: #d9d9d9 !important; }
.tr-promo-cta { background: var(--brand) !important; border-radius: 6px !important; }
.tr-promo-cta:hover { background: var(--brand) !important; }
.tr-dict { border: 1px solid var(--line) !important; border-radius: var(--r-lg) !important; background: var(--surface) !important; }
.tr-dict-title { color: var(--ink-4) !important; }
.tr-dict mark { background: transparent !important; color: var(--brand-600) !important; }
.tr-dict-lemma .lemma-ipa { color: var(--ink-3) !important; }
.tr-dict-lemma .lemma-pos { color: var(--ink-3) !important; }
.lemma-sound { border: 0 !important; background: transparent !important; border-radius: 5px !important; color: var(--brand-600) !important; }
.lemma-sound:hover { background: var(--brand-tint) !important; }
.tr-dict-conj { color: var(--brand-600) !important; }
.tr-dict-form { color: var(--ink-2) !important; }
.tr-dict-meaning .m-note { color: var(--ink-4) !important; }
.tr-dict-meaning .ex-en { color: var(--ink) !important; }
.tr-dict-meaning .ex-ru { color: var(--ink-3) !important; }
.tr-dict-more { border: 1px solid var(--line) !important; border-radius: 100px !important; color: var(--ink-4) !important; }
.tr-dict-more:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.tr-dict-sec-h { color: var(--ink-4) !important; }
.tr-dict-coll a { color: var(--brand-600) !important; }
.tr-dict-coll a:hover { text-decoration-color: var(--brand-600) !important; }
.tr-dict-table { border-top: 1px solid var(--line-2) !important; }
.tr-dict-trow { border-bottom: 1px dashed var(--line-2) !important; }
.tr-dict-trow .td-en { color: var(--ink) !important; }
.tr-dict-trow .td-ru { color: var(--ink-3) !important; }
.tr-dict-note { border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; background: var(--bg) !important; }
.tr-dict-note svg { color: var(--ink-3) !important; }
.tr-dict-note p { color: var(--ink-3) !important; }
.tr-dict-note a { color: var(--brand-600) !important; }
.tr-consult { border: 1px solid var(--line) !important; border-radius: var(--r-lg) !important; background: radial-gradient(120% 90% at 0% 0%, var(--brand-tint) 0%, rgba(0,0,0,0) 60%), var(--surface) !important; }
.tr-consult:hover { border-color: var(--brand) !important; box-shadow: 0 8px 22px rgba(0,0,0,.35) !important; }
.tr-consult-icon { border-radius: 10px !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.tr-consult h3 { color: var(--ink) !important; }
.tr-consult-cta { color: var(--brand-600) !important; }
.tr-apps { border: none !important; border-radius: var(--r-lg) !important; }
.tr-apps-text p { color: var(--ink-3) !important; }
.store-btn { border-radius: 8px !important; }
.bt-h .label { color: var(--brand-600) !important; background: var(--brand-tint) !important; border-radius: 3px !important; }
.bt-h .more { color: var(--brand-600) !important; }
.bt-h-text p { color: var(--ink-3) !important; }
.bt-cta { border-radius: 8px !important; background: var(--brand) !important; }
.bt-cta:hover { background: var(--brand-600) !important; }
.bt-foot { color: var(--ink-3) !important; }
.bt-foot a { color: var(--brand-600) !important; }
.dict-card { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.dict-card .ipa { color: var(--ink-3) !important; }
.dict-card .pos { color: var(--ink-3) !important; }
.dict-card .meanings { border-top: 1px solid var(--line) !important; }
.aeo-tag { color: var(--ink-3) !important; }
.aeo-byline { border-bottom: 1px solid var(--line) !important; color: var(--ink-3) !important; }
.aeo-byline .avatar { border-radius: 50% !important; background: var(--brand-50) !important; color: var(--brand-600) !important; }
.aeo-tldr { background: var(--bg) !important; border-left: 3px solid var(--brand) !important; color: var(--ink) !important; }
.aeo-tldr strong { color: var(--ink-3) !important; }
.aeo-wrap p { color: var(--ink-2) !important; }
.aeo-wrap p strong { color: var(--ink) !important; }
.aeo-wrap .embedded-phrases { border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.aeo-wrap .embedded-phrases .ph-row { border-bottom: 1px solid var(--line-2) !important; }
.aeo-wrap .embedded-phrases .ph-row:last-child { border-bottom: 0 !important; }
.aeo-wrap .embedded-phrases .tgt { color: var(--ink-2) !important; border-left: 1px solid var(--line-2) !important; }
.aeo-wrap .embedded-phrases .copy-cell { border-left: 1px solid var(--line-2) !important; color: var(--ink-4) !important; }
.aeo-wrap .embedded-phrases .copy-cell:hover { color: var(--brand-600) !important; background: var(--brand-tint) !important; }
.aeo-wrap .embedded-phrases .ph-head { background: var(--bg) !important; color: var(--ink-3) !important; border-bottom: 1px solid var(--line) !important; }
.aeo-wrap .faq { border-top: 1px solid var(--line) !important; }
.aeo-wrap .faq-item { border-bottom: 1px solid var(--line-2) !important; }
.aeo-wrap .faq-item h4 .chev { color: var(--ink-4) !important; }
.aeo-wrap .faq-item .body { color: var(--ink-2) !important; }
.empty-state { color: var(--ink-3) !important; }
.toast { background: var(--ink) !important; border-radius: 6px !important; }
.is-marked-flag { color: var(--amber) !important; background: #332f19 !important; border-radius: 2px !important; }
.stats-strip { border-bottom: 1px solid var(--line) !important; }
.stats-strip .stat { color: var(--ink-3) !important; }
.stats-strip .stat .n { color: var(--ink) !important; }
.stats-strip .lang-pair-card { color: var(--ink-3) !important; }
.stats-strip .lang-pair-card b { color: var(--ink) !important; }
.tech-section { border-top: 1px solid var(--line) !important; }
.tech-eyebrow { color: var(--brand-600) !important; }
.tech-switch { border: 1px solid var(--line) !important; border-radius: 100px !important; background: var(--surface) !important; }
.tech-switch-label { color: var(--ink-4) !important; }
.tech-switch button { border: 0 !important; background: transparent !important; color: var(--ink-3) !important; border-radius: 100px !important; }
.tech-switch button.on { background: var(--ink) !important; }
.tech-prod-who { color: var(--ink-4) !important; }
.tech-fact span { color: rgba(0,0,0,0.72) !important; }
.tech-feat { border: 1px solid var(--line) !important; border-radius: var(--r-lg) !important; background: var(--surface) !important; }
.tech-feat .ti { border-radius: 9px !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.tech-feat p { color: var(--ink-3) !important; }
.tech-cta { border: 1px solid var(--line) !important; border-radius: var(--r-lg) !important; background: var(--brand-tint) !important; }
.tech-cta span { color: var(--ink-2) !important; }
.tech-cta a { border-radius: 8px !important; background: var(--brand) !important; }
.tech-cta a:hover { background: var(--brand-600) !important; }
.tech-strip { border: 1px solid var(--line) !important; border-radius: var(--r-lg) !important; background: var(--surface) !important; }
.tech-strip-text { color: var(--ink-3) !important; }
.tech-strip-text strong { color: var(--ink) !important; }
.tech-strip-links a { border: 1px solid var(--line) !important; border-radius: 10px !important; }
.tech-strip-links a:hover { border-color: var(--brand) !important; background: var(--brand-tint) !important; }
.tech-strip-links .ti { border-radius: 8px !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.tech-strip-links a:hover .ti { background: #1c1c1c !important; }
.tech-strip-name { color: var(--ink) !important; }
.tech-strip-who { color: var(--ink-4) !important; }
.tech-strip-all { color: var(--brand-600) !important; }
.tech-idx { color: var(--ink-4) !important; }
.tech-idx.dark { color: rgba(0,0,0,0.55) !important; }
.tech-prod { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-lg) !important; }
.tech-prod:hover { border-color: var(--brand) !important; box-shadow: 0 10px 28px rgba(0,0,0,.35) !important; }
.tech-prod .ti { border-radius: 11px !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.tech-prod p { color: var(--ink-3) !important; }
.tech-prod-arrow { color: var(--ink-4) !important; }
.tech-prod:hover .tech-prod-arrow { color: var(--brand-600) !important; }
.tech-ecosystem { border-radius: var(--r-lg) !important; }
.tech-ecosystem p { color: rgba(0,0,0,0.85) !important; }
.tech-chip { border-radius: 100px !important; border: 1px solid rgba(0,0,0,0.22) !important; background: rgba(0,0,0,0.07) !important; }
.tech-chip:hover { background: rgba(0,0,0,0.14) !important; border-color: rgba(0,0,0,0.4) !important; }
.tech-chip.more { background: transparent !important; border-style: dashed !important; color: rgba(0,0,0,0.7) !important; }
.tech-tool { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.tech-tool:hover { border-color: var(--brand) !important; box-shadow: 0 4px 16px rgba(0,0,0,.35) !important; }
.tech-tool .ti { border-radius: 10px !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.tech-ctrl { background: var(--bg) !important; border: 1px solid var(--line-2) !important; border-radius: var(--r-md) !important; }
.tech-ctrl:hover { border-color: var(--brand) !important; background: var(--brand-tint) !important; }
.tech-ctrl .ti { border-radius: 10px !important; background: var(--surface) !important; border: 1px solid var(--line) !important; color: var(--brand-600) !important; }
.seo-copy { border-top: 1px solid var(--line) !important; }
.seo-item h2 { color: var(--ink) !important; }
.seo-item p { color: var(--ink-2) !important; }
#warnIconDiv { color: #f04c64 !important; }
.mt-transcription { color: var(--ink-3) !important; }
.dict-header,
#phrasesResult h2.green,
#topSamplesSelSource h2.green { color: var(--ink-4) !important; }
.transcription { color: var(--ink-3) !important; }
.ref_psp { color: var(--ink-3) !important; }
.otherImportantForms { color: var(--ink-2) !important; }
.fsform_link { color: var(--brand-600) !important; }
.r_c, .ref_info { color: var(--ink-4) !important; }
.samSource { color: var(--ink) !important; }
.samTranslation { color: var(--ink-3) !important; }
.phrase-list-elm a { color: var(--brand-600) !important; }
.more-link { border: 1px solid var(--line) !important; border-radius: 100px !important; color: var(--ink-4) !important; }
.more-link:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.sourceSampleSearch,
.sourceSample { background: transparent !important; color: var(--brand-600) !important; }
.tr-sam-table .samplesList { border-bottom: 1px dashed var(--line-2) !important; }
.tr-sam-table .samplesList .samSource { color: var(--ink) !important; }
.tr-sam-table .samplesList .samTranslation { color: var(--ink-3) !important; }
.moreSamples a { border: 1px solid var(--line) !important; border-radius: 100px !important; color: var(--ink-4) !important; }
.moreSamples a:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.disclaimer1 { border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; background: var(--bg) !important; }
.disclaimer1 svg { color: var(--ink-3) !important; }
.disclaimer1 p { color: var(--ink-3) !important; }
#phrasesResultSource,
#dictView { border-bottom: 1px solid var(--line-2) !important; }
.less-translation,
.more-translation { border-bottom: 1px solid var(--line-2) !important; }
.more-translation span, .less-translation span { color: #4cf0a3 !important; }
@media (max-width: 720px) {
.phrase-table .ph-target { border-left: 0 !important; }
}
.kind-headline .kind-stamp { color: var(--ink-3) !important; border-radius: 3px !important; background: var(--line-2) !important; }
.kind-headline .kind-stamp.aeo { background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.kind-headline p { color: var(--ink-3) !important; }
.kind-headline .see-all { color: var(--brand-600) !important; }
.aeo-card { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.aeo-card::before { background: var(--brand) !important; }
.aeo-card:hover { border-color: var(--brand) !important; box-shadow: 0 2px 12px rgba(0,0,0,.35) !important; }
.aeo-card .ac-kind { color: var(--brand-600) !important; }
.aeo-card .ac-kind::before { border-radius: 50% !important; background: var(--brand) !important; }
.aeo-card p.ac-blurb { color: var(--ink-3) !important; }
.aeo-card .ac-term { background: var(--bg) !important; border: 1px solid var(--line) !important; border-radius: 3px !important; color: var(--ink-2) !important; }
.aeo-card .ac-foot { color: var(--ink-3) !important; }
.aeo-coll-header { border-bottom: 1px solid var(--line) !important; }
.aeo-coll-header .kind-tag { color: var(--brand-600) !important; background: var(--brand-tint) !important; border-radius: 3px !important; }
.aeo-coll-header p.lede { color: var(--ink-2) !important; }
.aeo-coll-header .ach-meta { color: var(--ink-3) !important; }
.aeo-coll-header .ach-meta .dot { color: var(--ink-4) !important; }
.aeo-toolbar .at-search { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: 6px !important; }
.aeo-toolbar .at-search:focus-within { border-color: var(--brand) !important; }
.aeo-toolbar .at-search input { border: 0 !important; outline: 0 !important; background: transparent !important; }
.aeo-toolbar .at-count { color: var(--ink-3) !important; }
.aeo-entry { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.aeo-entry::before { background: var(--brand) !important; border-radius: 6px 0 0 6px !important; }
.aeo-entry:hover { border-color: var(--brand) !important; box-shadow: 0 2px 12px rgba(0,0,0,.35) !important; }
.aeo-entry .ae-term { color: var(--ink) !important; }
.aeo-entry .ae-def { color: var(--ink-2) !important; }
.aeo-entry .ae-example { color: var(--ink-2) !important; background: var(--bg) !important; border-left: 2px solid var(--line) !important; border-radius: 0 4px 4px 0 !important; }
.aeo-entry .ae-example::before { color: var(--ink-4) !important; }
.aeo-entry .ae-example::after { color: var(--ink-4) !important; }
.aeo-entry .ae-meta { color: var(--ink-3) !important; }
.aeo-entry .ae-meta .arrow { color: var(--brand-600) !important; }
.aeo-entry mark { background: #332f19 !important; color: inherit !important; border-radius: 2px !important; }
.aeo-coll-side h5 { color: var(--ink-3) !important; }
.aeo-coll-side .aside-letter { color: var(--ink-4) !important; border-bottom: 1px solid var(--line-2) !important; }
.aeo-coll-side .aside-list a { color: var(--ink-2) !important; border-radius: 4px !important; }
.aeo-coll-side .aside-list a:hover { color: var(--brand-600) !important; background: var(--brand-tint) !important; }
.aeo-entry-hero { border-bottom: 1px solid var(--line) !important; }
.aeo-entry-hero .kind-tag { color: var(--brand-600) !important; background: var(--brand-tint) !important; border-radius: 3px !important; }
.aeo-entry-hero .aeh-actions button { border: 1px solid var(--line) !important; background: var(--surface) !important; border-radius: 6px !important; color: var(--ink-3) !important; }
.aeo-entry-hero .aeh-actions button:hover { color: var(--brand-600) !important; border-color: var(--brand) !important; }
.aeo-section h3 { color: var(--ink-3) !important; }
.aeo-section .body { color: var(--ink) !important; }
.aeo-example-block { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.aeo-example-block .ex-en { color: var(--ink) !important; }
.aeo-example-block .ex-en::before { color: var(--brand) !important; }
.aeo-example-block .ex-en::after { color: var(--brand) !important; }
.aeo-example-block .ex-ru { color: var(--ink-3) !important; border-top: 1px dashed var(--line-2) !important; }
.aeo-example-block .listen-btn { border: 0 !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; border-radius: 4px !important; }
.aeo-example-block .listen-btn:hover { background: var(--brand) !important; }
.aeo-example-block .listen-btn.playing { background: var(--brand) !important; }
.aeo-callout { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.aeo-callout.mistakes { background: #292114 !important; border-color: #4e432a !important; }
.aeo-callout h4 { color: var(--ink-3) !important; }
.aeo-callout.mistakes h4 { color: var(--amber) !important; }
.aeo-callout h4 .dot { border-radius: 50% !important; background: var(--brand) !important; }
.aeo-callout.mistakes h4 .dot { background: var(--amber) !important; }
.aeo-callout .body { color: var(--ink-2) !important; }
.aeo-entry-side h5 { color: var(--ink-3) !important; }
.aeo-entry-side .next-prev a { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: 6px !important; color: var(--ink-2) !important; }
.aeo-entry-side .next-prev a:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.aeo-entry-side .next-prev a .lbl { color: var(--ink-4) !important; }
.aeo-entry-side .next-prev a strong { color: var(--ink) !important; }
.aeo-entry-side .term-list a { border-bottom: 1px solid var(--line-2) !important; color: var(--ink-2) !important; }
.aeo-entry-side .term-list a.active { color: var(--brand-600) !important; }
.aeo-entry-side .term-list a:last-child { border-bottom: 0 !important; }
.aeo-entry-side .term-list a:hover { color: var(--brand-600) !important; }
.aeo-modal-backdrop { background: rgba(255,255,255,0.55) !important; }
.aeo-modal { background: var(--bg) !important; border-radius: 12px !important; box-shadow: 0 22px 60px rgba(0,0,0,.35) !important; }
.aeo-modal .modal-chrome { background: var(--surface) !important; border-bottom: 1px solid var(--line) !important; color: var(--ink-3) !important; }
.aeo-modal .modal-chrome .modal-loc strong { color: var(--brand-600) !important; }
.aeo-modal .modal-chrome .modal-tools a,
.aeo-modal .modal-chrome .modal-tools button { border: 0 !important; background: transparent !important; border-radius: 4px !important; color: var(--ink-3) !important; }
.aeo-modal .modal-chrome .modal-tools a:hover,
.aeo-modal .modal-chrome .modal-tools button:hover { background: var(--line-2) !important; color: var(--ink) !important; }
.aeo-modal .modal-nav { background: var(--surface) !important; border-top: 1px solid var(--line) !important; }
.aeo-modal .modal-nav a { border: 1px solid var(--line) !important; border-radius: 6px !important; color: var(--ink-2) !important; background: var(--bg) !important; }
.aeo-modal .modal-nav a:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.aeo-modal .modal-nav a .lbl { color: var(--ink-4) !important; }
.aeo-modal .modal-nav .center-link { color: var(--brand-600) !important; }
.aeo-modal .modal-kbd { color: var(--ink-4) !important; border: 1px solid var(--line) !important; border-radius: 3px !important; background: var(--bg) !important; }
.search-note { color: var(--ink-3) !important; }
.search-note a { color: var(--brand-600) !important; }
.lang-pair-inline { border: 1px solid var(--line) !important; border-radius: 999px !important; background: var(--surface) !important; color: var(--ink-3) !important; }
.lang-pair-inline b { color: var(--ink) !important; }
.lang-pair-inline a { color: var(--brand-600) !important; }
.tr-plate { --plate-ink: #70cc9c !important; --plate-mute: rgba(112,204,156,0.72) !important; --plate-bg: linear-gradient(152deg, #142a1e 0%, #162e21 100%) !important; --plate-line: #2c523d !important; --plate-card-line: #2b4f3b !important; }
.tr-plate--banner-facet, .tr-plate--banner-forest { --plate-ink: #58e4c9 !important; --plate-mute: rgba(88,228,201,0.72) !important; --plate-bg: linear-gradient(152deg, #152b24 0%, #162e22 100%) !important; --plate-line: #2c5245 !important; --plate-card-line: #2a4e41 !important; }
.tr-plate--banner-mesh { --plate-ink: #5cc9e0 !important; --plate-mute: rgba(92,201,224,0.7) !important; --plate-bg: linear-gradient(152deg, #142b29 0%, #15292d 100%) !important; --plate-line: #2b4c51 !important; --plate-card-line: #2a494e !important; }
.tr-plate--outline { --plate-bg: #1c1c1c !important; }
.tr-phrases.tr-plate { border: 1px solid var(--plate-line) !important; border-radius: var(--r-lg) !important; background: var(--plate-bg) !important; }
.tr-plate--outline.tr-phrases { border-width: 1.5px !important; }
.below-translator.tr-plate { border: 1px solid var(--plate-line) !important; background: var(--plate-bg) !important; }
.tr-plate-eyebrow { color: var(--plate-accent) !important; }
.tr-plate .tr-phrases-h h3, .below-translator.tr-plate .bt-h-text h3 { color: var(--plate-ink) !important; }
.tr-plate .tr-phrases-h p, .below-translator.tr-plate .bt-h-text p { color: var(--plate-mute) !important; }
.tr-plate .tr-phrases-list a { background: #1c1c1c !important; border-color: var(--plate-card-line) !important; }
.tr-plate .tr-phrases-list a:hover { background: #1c1c1c !important; border-color: var(--brand) !important; }
.tr-plate .tp-title { color: var(--plate-ink) !important; }
.tr-plate .tp-count { color: var(--plate-mute) !important; }
.tr-plate .tr-phrases-all { border-radius: 8px !important; background: var(--brand) !important; }
.tr-plate .tr-phrases-all:hover { background: var(--brand-600) !important; }
.tr-plate-alt { color: var(--plate-accent) !important; }
.tr-plate-alt:hover { color: var(--plate-ink) !important; }
.below-translator.tr-plate .bt-cta { background: var(--brand) !important; border-color: transparent !important; }
.below-translator.tr-plate .bt-cta:hover { background: var(--brand-600) !important; }
.below-translator.tr-plate .bt-foot { color: var(--plate-mute) !important; border-top-color: var(--plate-card-line) !important; }
.below-translator.tr-plate .bt-foot a { color: var(--plate-accent) !important; }
.below-translator.tr-plate .bt-foot a:hover { color: var(--plate-ink) !important; }
.phr-switch-label { color: var(--ink-3) !important; }
.phr-switch button { border: 1px solid var(--line) !important; border-radius: 999px !important; background: #1c1c1c !important; color: var(--ink-2) !important; }
.phr-switch button:hover { border-color: var(--brand) !important; color: var(--ink) !important; }
.phr-switch button.on { background: var(--ink) !important; border-color: var(--ink) !important; }
.tr-banner { --bn-mute: rgba(0,0,0,0.75) !important; --bn-line: rgba(0,0,0,0.24) !important; --bn-cta-hover-bg: #1c1c1c !important; --bn-cta-hover-ink: #5ce0b3 !important; border-radius: var(--r-lg) !important; color: var(--bn-ink) !important; }
.tr-banner--facet .tr-banner-gfx { background: linear-gradient(200deg, rgba(0,0,0,0.16) 0 42%, transparent 42%) right/38% 100% no-repeat, linear-gradient(148deg, rgba(255,255,255,0.2) 0 55%, transparent 55%) right/26% 100% no-repeat !important; }
.tr-banner--facet .tr-banner-gfx::before { background: linear-gradient(160deg, rgba(29,61,47,0.55), rgba(80,215,190,.16)) !important; }
.tr-banner--facet .tr-banner-gfx::after { background: linear-gradient(150deg, rgba(0,0,0,0.3), rgba(0,0,0,0.05)) !important; }
.tr-banner--mesh { --bn-ink: #5cc9e0 !important; --bn-mute: rgba(92,201,224,0.74) !important; --bn-num: #4cdff0 !important; background: linear-gradient(96deg, #162d1d 0%, #173030 46%, #193035 100%) !important; }
.tr-banner--mesh .tr-banner-gfx::after { border-radius: 50% !important; border: 1px solid rgba(0,0,0,0.8) !important; background: radial-gradient(circle at 34% 30%, rgba(0,0,0,0.45), transparent 62%) !important; }
.tr-banner--forest .tr-banner-gfx { background: repeating-linear-gradient(115deg, rgba(0,0,0,0.05) 0 14px, transparent 14px 34px) !important; }
.tr-banner-new { border-radius: 999px !important; background: var(--bn-badge, var(--bn-num)) !important; color: var(--bn-badge-ink, #58e4c9) !important; }
.tr-banner h3 { color: var(--bn-ink) !important; }
.tr-banner p { color: var(--bn-mute) !important; }
.tr-banner-chips a { border: 1px solid var(--bn-line) !important; border-radius: 999px !important; color: var(--bn-ink) !important; }
.tr-banner-chips a:hover { background: var(--bn-ink) !important; border-color: var(--bn-ink) !important; color: var(--bn-cta-hover-ink) !important; }
.tr-banner--mesh .tr-banner-chips a { background: rgba(0,0,0,0.6) !important; }
.tr-banner-side { border-left: 1px solid var(--bn-line) !important; }
.tr-banner-num b { color: var(--bn-num) !important; }
.tr-banner-num span { color: var(--bn-mute) !important; }
.tr-banner-cta { border-radius: 8px !important; background: var(--bn-cta-bg) !important; color: var(--bn-cta-ink) !important; }
.tr-banner-cta:hover { background: var(--bn-cta-hover-bg) !important; color: var(--bn-cta-hover-ink) !important; }
@media (max-width: 900px) {
.tr-banner-side { border-left: 0 !important; border-top: 1px solid var(--bn-line) !important; }
}
.ctn { border-radius: var(--r-lg) !important; background: var(--ct) !important; }
.ctn .ctn-stamp { color: color-mix(in srgb, var(--ca) 18%, transparent) !important; }
.ctn-stamp { color: color-mix(in srgb, var(--ca) 14%, transparent) !important; }
.ctn-icon--line { color: color-mix(in srgb, var(--ca) 34%, transparent) !important; }
.ctn h3 a { color: var(--ink) !important; }
.ctn h3 a:hover { color: var(--ca) !important; }
.ctn-blurb { color: var(--ink-2) !important; }
.ctn-links a { border-radius: 8px !important; background: rgba(0,0,0,0.72) !important; color: var(--ink) !important; }
.ctn-links a:hover { background: #1c1c1c !important; color: var(--ca) !important; }
.ctn-all { color: var(--ca) !important; }
.ctn-all:hover { color: var(--ink) !important; }
.ck-icon--line { color: var(--ic-a) !important; }
.ck-icon [fill="#A9B8CF"] { fill: var(--ic-a) !important; }
.ck-icon [fill="#E3E8F0"], .ck-icon [fill="#C4DAF2"], .ck-icon [fill="#D9D0F2"], .ck-icon [fill="#C3E8D5"], .ck-icon [fill="#FBE3A1"], .ck-icon [fill="#F8D2BC"], .ck-icon [fill="#F7C8D4"] { fill: var(--ic-t) !important; }
.ex-h1 { color: var(--ink-2) !important; }
.ex-lang { background: none !important; border: 0 !important; color: var(--ink-2) !important; border-radius: 6px !important; }
.ex-lang:hover { background: var(--line-2) !important; color: var(--ink) !important; }
.ex-lang-menu { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 8px !important; box-shadow: 0 10px 28px -10px rgba(0,0,0,.35) !important; }
.ex-lang-menu button { background: none !important; border: 0 !important; border-radius: 6px !important; color: var(--ink) !important; }
.ex-lang-menu button:hover { background: var(--brand-tint) !important; }
.ex-lang-menu button.on { color: var(--brand-600) !important; }
.ex-swap { background: none !important; border: 0 !important; border-radius: 50% !important; color: var(--ink-3) !important; }
.ex-swap:hover { background: var(--line-2) !important; color: var(--brand-600) !important; }
.ex-input { border: 1px solid var(--line) !important; border-radius: 19px !important; background: #1c1c1c !important; color: var(--ink) !important; outline: none !important; }
.ex-input::placeholder { color: var(--ink-4) !important; }
.ex-input:focus { border-color: var(--brand) !important; }
.ex-clear { background: none !important; border: 0 !important; border-radius: 50% !important; color: var(--ink-4) !important; }
.ex-clear:hover { background: var(--line-2) !important; color: var(--ink-2) !important; }
.ex-ac { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; box-shadow: 0 14px 34px -12px rgba(0,0,0,.35) !important; }
.ex-ac button { background: none !important; border: 0 !important; border-radius: 7px !important; color: var(--ink) !important; }
.ex-ac button.on { background: var(--brand-tint) !important; }
.ex-ac button svg { color: var(--ink-4) !important; }
.ex-ac .ex-hi { background: none !important; color: var(--brand-600) !important; }
.ex-ac-pos { color: var(--ink-4) !important; }
.ex-go { background: var(--brand) !important; border: 0 !important; border-radius: 19px !important; box-shadow: 0 4px 12px -4px rgba(0,0,0,.35) !important; }
.ex-go:hover { background: var(--brand-600) !important; box-shadow: 0 6px 16px -4px rgba(0,0,0,.35) !important; }
.ex-disclaimer { background: var(--brand-tint) !important; border: 1px solid var(--brand-100, #2a4e3d) !important; border-radius: 8px !important; color: var(--ink-2) !important; }
.ex-disclaimer a { color: var(--brand-600) !important; }
.ex-about { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.ex-lead { color: var(--ink) !important; }
.ex-fi { border-radius: 7px !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.ex-feature h3 { color: var(--brand-600) !important; }
.ex-feature p { color: var(--ink-2) !important; }
.ex-results { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.ex-count { color: var(--ink-2) !important; }
.ex-count b { color: var(--ink) !important; }
.ex-inner-search { border: 1px solid var(--line) !important; border-radius: 16px !important; background: var(--paper, #1d1d1d) !important; }
.ex-inner-search:focus-within { border-color: var(--brand) !important; background: #1c1c1c !important; }
.ex-inner-search svg { color: var(--ink-4) !important; }
.ex-inner-search input { border: 0 !important; background: none !important; outline: none !important; color: var(--ink) !important; }
.ex-inner-search button { background: none !important; border: 0 !important; color: var(--ink-4) !important; }
.ex-inner-search button:hover { color: var(--ink-2) !important; }
.ex-trs { border-bottom: 1px solid var(--line-2) !important; }
.ex-trs-label { color: var(--ink-4) !important; }
.ex-tr-chip { border: 1px solid var(--line) !important; border-radius: 100px !important; background: #1c1c1c !important; color: var(--ink) !important; }
.ex-tr-chip .n { color: var(--ink-4) !important; }
.ex-tr-chip:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.ex-tr-chip.on { background: var(--brand) !important; border-color: var(--brand) !important; }
.ex-tr-chip.on .n { color: rgba(0,0,0,0.8) !important; }
.ex-trs-reset { background: none !important; border: 0 !important; color: var(--ink-3) !important; }
.ex-trs-reset:hover { color: var(--brand-600) !important; }
.ex-row { border-bottom: 1px solid var(--line-2) !important; }
.ex-row:last-of-type { border-bottom: 0 !important; }
.ex-cell { color: var(--ink) !important; }
.ex-tgt { color: var(--ink-2) !important; }
.ex-hi { background: #302b17 !important; color: inherit !important; border-radius: 2px !important; }
.ex-tgt .ex-hi { background: #162e20 !important; }
.ex-source { color: var(--ink-4) !important; }
.ex-report { background: none !important; border: 0 !important; color: var(--ink-4) !important; }
.ex-report:hover { color: var(--brand-600) !important; }
.ex-empty-res { color: var(--ink-3) !important; }
.ex-more { background: var(--brand-tint) !important; border: 1px solid transparent !important; border-radius: 19px !important; color: var(--brand-600) !important; }
.ex-more:hover { background: #162e20 !important; }
.ex-lang-menu-h { color: var(--ink-4) !important; }
.cj-arrow { color: var(--ink-4) !important; }
.cj-lang-links { border-bottom: 1px solid var(--line-2) !important; }
.cj-lang-links a { color: var(--ink-3) !important; }
.cj-lang-links a:hover { color: var(--brand-600) !important; }
.cj-lang-links a.on { color: var(--ink) !important; }
.cj-anchors a { color: var(--brand-600) !important; }
.cj-anchors a::before { color: var(--ink-4) !important; }
.cj-block { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.cj-block-h { color: var(--ink-2) !important; }
.cj-block-h b { color: var(--ink) !important; }
.cj-spec { color: var(--ink-3) !important; }
.cj-sound { background: var(--brand-tint) !important; border: 0 !important; border-radius: 50% !important; color: var(--brand-600) !important; }
.cj-sound:hover { background: #162e20 !important; }
.cj-base-item { background: var(--paper, #1d1d1d) !important; border: 1px solid var(--line-2) !important; border-radius: 8px !important; }
.cj-base-l { color: var(--ink-4) !important; }
.cj-base-v { color: var(--ink) !important; }
.cj-tabs { border-bottom: 1px solid var(--line-2) !important; }
.cj-tabs button { background: none !important; border: 0 !important; border-bottom: 2px solid transparent !important; color: var(--ink-3) !important; }
.cj-tabs button:hover { color: var(--ink) !important; }
.cj-tabs button.on { color: var(--brand-600) !important; border-bottom-color: var(--brand) !important; }
.cj-mood-h { color: var(--ink) !important; }
.cj-table { border: 1px solid var(--line-2) !important; border-radius: 8px !important; }
.cj-table-h { background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.cj-trow { border-top: 1px solid var(--line-2) !important; }
.cj-trow:first-child { border-top: 0 !important; }
.cj-trow:nth-child(even) { background: var(--paper, #1d1d1d) !important; }
.cj-person { color: var(--ink-3) !important; }
.cj-form { color: var(--ink) !important; }
.cj-cases { border: 1px solid var(--line-2) !important; border-radius: 8px !important; }
.cj-case-row { border-top: 1px solid var(--line-2) !important; }
.cj-case-row:first-child { border-top: 0 !important; }
.cj-case-row:nth-child(even) { background: var(--paper, #1d1d1d) !important; }
.cj-case-head { background: var(--brand-tint) !important; }
.cj-case-head span { color: var(--brand-600) !important; }
.cj-case-name { color: var(--ink-2) !important; }
.cj-case-name em { color: var(--ink-4) !important; }
.cj-see { border-top: 1px solid var(--line-2) !important; color: var(--ink-3) !important; }
.cj-see a { color: var(--brand-600) !important; }
.cj-popular { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.cj-popular h2 { color: var(--ink) !important; }
.cj-pop-list a { color: var(--brand-600) !important; }
.cj-popular > .cj-pop-list a { border: 1px solid var(--line) !important; border-radius: 100px !important; color: var(--ink) !important; }
.cj-popular > .cj-pop-list a:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.cj-pop-cards a { border: 1px solid var(--line) !important; border-radius: 9px !important; background: var(--paper, #1d1d1d) !important; }
.cj-pop-cards a:hover { background: #1c1c1c !important; border-color: var(--brand) !important; box-shadow: 0 4px 14px -6px rgba(0,0,0,.35) !important; }
.cj-pop-word { color: var(--ink) !important; }
.cj-pop-go { color: var(--brand-600) !important; }
.cj-pop-all { border-top: 1px solid var(--line-2) !important; color: var(--ink-4) !important; }
.cj-pop-all a { color: var(--brand-600) !important; }
.seo-item li { color: var(--ink-2) !important; }
.cj-seo-tail { color: var(--ink-2) !important; border-top: 1px solid var(--line-2) !important; }
.cj-grammar { border-top: 1px solid var(--line-2) !important; }
.cj-grammar h3 { color: var(--ink-4) !important; }
.cj-grammar-links a { color: var(--brand-600) !important; }
.cj-footer-note { color: var(--ink-3) !important; }
@media (max-width: 700px) {
.ex-tgt { border-left: 2px solid var(--brand-tint) !important; }
}
.st-h1 { color: var(--ink) !important; }
.st-body { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.st-body p { color: var(--ink-2) !important; }
.st-body .st-lead { color: var(--ink) !important; }
.st-body a { color: var(--brand-600) !important; }
.st-callout { background: var(--brand-tint) !important; border: 1px solid var(--brand-100, #2a4e3d) !important; border-radius: 10px !important; }
.st-callout-i { border-radius: 50% !important; background: #1c1c1c !important; color: var(--brand-600) !important; }
.st-callout h3 { color: var(--ink) !important; }
.st-callout p { color: var(--ink-2) !important; }
.st-section > h2 { color: var(--ink) !important; }
.st-service { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 9px !important; }
.st-service:hover { border-color: var(--brand) !important; box-shadow: 0 4px 14px -6px rgba(0,0,0,.35) !important; }
.st-service-i { border-radius: 8px !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.st-service-l { color: var(--ink) !important; }
.st-service-a { color: var(--ink-4) !important; }
.st-service:hover .st-service-a { color: var(--brand-600) !important; }
.st-stat { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 9px !important; }
.st-stat .n { color: var(--brand-600) !important; }
.st-stat .l { color: var(--ink-3) !important; }
.st-more a { color: var(--brand-600) !important; }
.st-groups { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.st-group h3 { color: var(--ink-3) !important; border-bottom: 1px solid var(--line-2) !important; }
.st-group-links a { color: var(--brand-600) !important; }
.gr-lang { border-radius: 12px !important; border: 1px solid color-mix(in srgb, var(--ga) 22%, #333333) !important; background: linear-gradient(150deg, var(--gt) 0%, #1c1c1c 78%) !important; }
.gr-lang::after { border-radius: 50% !important; background: color-mix(in srgb, var(--ga) 12%, transparent) !important; }
.gr-lang:hover { border-color: color-mix(in srgb, var(--ga) 55%, #333333) !important; }
.gr-lang-mark { border-radius: 50% !important; background: #1c1c1c !important; box-shadow: 0 3px 10px -3px color-mix(in srgb, var(--ga) 65%, transparent), 0 0 0 2px color-mix(in srgb, var(--ga) 30%, rgba(0,0,0,.35)) !important; }
.gr-lang-l { color: var(--ink) !important; }
.gr-lang-n { color: var(--ink-3) !important; }
.gr-lang-go { color: var(--gtx, var(--ga)) !important; }
.gr-topic { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.gr-topic h2 { color: var(--ink) !important; }
.gr-topic-p { color: var(--ink-2) !important; }
.gr-topic-links a { background: var(--paper, #1d1d1d) !important; border: 1px solid var(--line-2) !important; border-radius: 8px !important; color: var(--ink) !important; }
.gr-topic-links a:hover { background: #1c1c1c !important; border-color: var(--brand) !important; color: var(--brand-600) !important; }
.gr-topic-links a svg { color: var(--ink-4) !important; }
.gr-topic-links a:hover svg { color: var(--brand-600) !important; }
.gr-side { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.gr-side-h { color: var(--ink-3) !important; border-bottom: 1px solid var(--line-2) !important; }
.gr-side-group h3 { color: var(--ink-2) !important; }
.gr-side-links a { color: var(--brand-600) !important; }
.gr-side-links a.on { color: var(--ink) !important; }
.gr-side-other { border-top: 1px solid var(--line-2) !important; }
.gr-side-other a { color: var(--brand-600) !important; }
.gr-ending { background: var(--brand-tint) !important; border-radius: 100px !important; color: var(--brand-600) !important; }
.gr-exc-tag { color: #f0c54c !important; background: #302b17 !important; border-radius: 100px !important; }
.gr-words a { border: 1px solid var(--line) !important; border-radius: 100px !important; background: #1c1c1c !important; color: var(--ink) !important; }
.gr-words a:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.gr-art { color: color-mix(in srgb, var(--ga) 30%, transparent) !important; }
.rd-banner { border: 1px dashed var(--ink-4) !important; border-radius: var(--r-md) !important; color: var(--ink-4) !important; background: var(--surface) !important; }
.translator-card .tr-langbar .bootstrap-select > .dropdown-toggle { border: 0 !important; background: transparent !important; border-radius: 6px !important; color: var(--ink-2) !important; }
.translator-card .tr-langbar .bootstrap-select > .dropdown-toggle:hover,
        .translator-card .tr-langbar .bootstrap-select > .dropdown-toggle:focus,
        .translator-card .tr-langbar .bootstrap-select.show > .dropdown-toggle { background: var(--line-2) !important; color: var(--ink) !important; outline: 0 !important; }
.translator-card .tr-langbar .bootstrap-select .dropdown-toggle .caret { border-top-color: var(--ink-4) !important; }
.translator-card .tr-langbar select.tr-lang-select { border: 0 !important; background: transparent !important; color: var(--ink-2) !important; }
.ex-searchbar .bootstrap-select > .dropdown-toggle { border: 0 !important; background: transparent !important; border-radius: 6px !important; color: var(--ink-2) !important; }
.ex-searchbar .bootstrap-select > .dropdown-toggle:hover,
        .ex-searchbar .bootstrap-select > .dropdown-toggle:focus,
        .ex-searchbar .bootstrap-select.show > .dropdown-toggle { background: var(--line-2) !important; color: var(--ink) !important; outline: 0 !important; }
.ex-searchbar .bootstrap-select .dropdown-toggle .caret { border-top-color: var(--ink-4) !important; }
.ex-searchbar select.ex-lang-select { border: 0 !important; background: transparent !important; color: var(--ink-2) !important; }
.ex-input-wrap .easy-autocomplete-container ul { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; box-shadow: 0 14px 34px -12px rgba(0,0,0,.35) !important; }
.ex-input-wrap .easy-autocomplete-container ul li { color: var(--ink) !important; }
.ex-input-wrap .easy-autocomplete-container ul li.selected,
                .ex-input-wrap .easy-autocomplete-container ul li:hover { background: var(--brand-tint) !important; }
.ex-input-wrap .easy-autocomplete-container ul li b,
                    .ex-input-wrap .easy-autocomplete-container ul li div b,
                    .ex-input-wrap .easy-autocomplete-container ul li div span { color: var(--brand-600) !important; }
.ex-input-wrap .easy-autocomplete-container ul .eac-category { color: var(--ink-4) !important; }
.ex-input-wrap .ea-notFound { color: var(--ink-3) !important; }
.ex-inner-search #txtSearch { border: 0 !important; background: none !important; outline: none !important; color: var(--ink) !important; }
.ex-inner-search #searchSamples { border: 0 !important; border-radius: 50% !important; background: var(--brand) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#1c1c1c' stroke-width='1.8' stroke-linecap='round'%3E%3Ccircle cx='7' cy='7' r='4.6'/%3E%3Cpath d='M10.4 10.4 L14 14'/%3E%3C/svg%3E") center / 13px 13px no-repeat !important; }
.ex-inner-search #searchSamples:hover { background-color: var(--brand-600) !important; }
.ex-trs .filters > a > span,
    .ex-trs .filters > span.selected { border: 1px solid var(--line) !important; border-radius: 100px !important; background: #1c1c1c !important; color: var(--ink) !important; }
.ex-trs .filters > a > span:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.ex-trs .filters > span.selected { background: var(--brand) !important; border-color: var(--brand) !important; }
.ex-trs .filters .count { color: var(--ink-4) !important; }
.ex-trs .filters > span.selected .count { color: rgba(0,0,0,0.8) !important; }
.ex-trs .showMore a { color: var(--ink-3) !important; }
.ex-trs .showMore a:hover { color: var(--brand-600) !important; }
.ex-results .samplesList { border-bottom: 1px solid var(--line-2) !important; }
.ex-results .samplesList:last-of-type { border-bottom: 0 !important; }
.ex-results .samSource,
.ex-results .samTranslation { color: var(--ink) !important; }
.ex-results .samTranslation { color: var(--ink-2) !important; }
.ex-results .sourceSample,
    .ex-results .samTranslation .backLink { background: #302b17 !important; color: inherit !important; border-radius: 2px !important; }
.ex-results .samTranslation .sourceSample,
    .ex-results .samTranslation .backLink { background: #162e20 !important; }
.ex-results .samTranslation .backLink:hover { color: var(--brand-600) !important; }
.ex-results .sourceSampleSearch { background: var(--brand-50) !important; border-bottom: 1px solid var(--brand) !important; border-radius: 2px !important; }
.ex-results .samOptions a.ui-icon { border-radius: 6px !important; background: none !important; color: var(--ink-4) !important; }
.ex-results .samOptions a.ui-icon:hover { background: var(--line-2) !important; color: var(--brand-600) !important; }
.ex-results .samOptions a.ui-icon::before { background-color: currentColor !important; }
.ex-results a.ex-more { color: var(--brand-600) !important; }
.ex-results a.ex-more:hover { background: #162e20 !important; }
.ex-about #descriptionText > p:first-child { color: var(--ink) !important; }
.ex-about #descriptionText > p.opt { color: var(--ink-2) !important; }
.ex-about #descriptionText > p.opt > span { color: var(--brand-600) !important; }
.ex-about #descriptionText > p.opt::before { border-radius: 7px !important; background-color: var(--brand-tint) !important; }
.ex-note { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-left: 3px solid var(--brand) !important; border-radius: 8px !important; color: var(--ink-2) !important; }
.ex-note a { color: var(--brand-600) !important; }
.ex-note-warn { background: #1d1d1d !important; }
.ex-seo #descriptionText1 h2 { color: var(--ink) !important; }
.ex-seo #descriptionText1 p { color: var(--ink-2) !important; }
.search-note { color: var(--ink-3) !important; }
.cj-lang-links a.on { color: var(--ink) !important; }
.cj-result ul.tabs1_caption.nav-tabs { border: 0 !important; border-bottom: 1px solid var(--line-2) !important; }
.cj-result ul.tabs1_caption > li.nav-item > a,
        .cj-result ul.tabs1_caption > li.nav-item > .nav-link { border: 0 !important; border-bottom: 2px solid transparent !important; border-radius: 0 !important; color: var(--ink-3) !important; background: none !important; }
.cj-result ul.tabs1_caption > li.nav-item > a:hover { color: var(--ink) !important; background: none !important; border-color: transparent transparent var(--line) !important; }
.cj-result ul.tabs1_caption > li.nav-item > a.active,
            .cj-result ul.tabs1_caption > li.nav-item.active > a { color: var(--brand-600) !important; background: none !important; border-bottom-color: var(--brand) !important; }
.cj-result ul.tabs1_caption .psp { color: var(--ink-4) !important; }
.cj-result ul.tabs1_caption .addWForms { color: var(--ink-4) !important; }
.cj-result .tabs-controlButton { border: 0 !important; background: none !important; color: var(--ink-4) !important; }
.cj-result .tabs-controlButton:hover { color: var(--brand-600) !important; }
.cj-result .fwi_gramDiv { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.cj-result h2.sforms_info { background: none !important; border-radius: 0 !important; color: var(--ink-2) !important; }
.cj-result h2.sforms_info > b { color: var(--ink) !important; }
.cj-result .source_only { color: var(--ink) !important; }
.cj-result .transcription { color: var(--ink-3) !important; }
.cj-result .otherImportantForms,
    .cj-result h2.sforms_info > span:not(.pronunciation):not(.ref_result):not(.transcription) { color: var(--ink-3) !important; }
.cj-result .ref_result a.backLink { color: var(--brand-600) !important; }
.cj-result .pronunciation { border-radius: 50% !important; background: var(--brand-tint) !important; }
.cj-result .pronunciation:hover { background: #162e20 !important; }
.auxiliary a.backLink { color: var(--brand-600) !important; }
.cj-result #gramFormNav,
    .cj-result #gramFormNav-mn { background: none !important; border: 0 !important; }
.cj-result #gramFormNav { border-bottom: 1px solid var(--line-2) !important; }
.cj-result .gramFormNavItem,
    .cj-result .gramFormNavItem-mn { border: 0 !important; border-radius: 0 !important; background: none !important; color: var(--ink-3) !important; }
.cj-result .gramFormNavItem { border-bottom: 2px solid transparent !important; }
.cj-result .gramFormNavItem:hover,
        .cj-result .gramFormNavItem-mn:hover { color: var(--ink) !important; background: none !important; }
.cj-result .gramFormNavItem:hover { border-bottom-color: var(--line) !important; }
.cj-result .gramFormNavItem.curChoose { color: var(--brand-600) !important; border-bottom-color: var(--brand) !important; }
.cj-result .gramFormNavItem-mn { border: 1px solid var(--line) !important; border-radius: 100px !important; background: #1c1c1c !important; }
.cj-result .gramFormNavItem-mn:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.cj-result .gramFormNavItem-mn.active { background: var(--brand) !important; border-color: var(--brand) !important; }
.cj-result h3.cc,
.cj-result h4.cc { color: var(--ink) !important; }
.cj-result .wfSpan { border: 1px solid var(--line-2) !important; border-radius: 8px !important; background: #1c1c1c !important; color: var(--ink-3) !important; }
.cj-result .wfSpan p.phdr { background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.cj-result .tr_f { border: 0 !important; border-radius: 0 !important; color: var(--ink-3) !important; }
.cj-result .wfSpan .tr_f { border-top: 1px solid var(--line-2) !important; }
.cj-result .wfSpan p.phdr + .tr_f { border-top: 0 !important; }
.cj-result .wfSpan .tr_f:nth-of-type(even) { background: #1d1d1d !important; }
.cj-result .tr_f .vf { color: var(--ink) !important; }
.cj-result .tr_f .vf:hover { color: var(--brand-600) !important; }
.cj-result .highlight { background: #302b17 !important; border-radius: 2px !important; }
.cj-result .tr_d { border-top: 1px solid var(--line-2) !important; color: var(--ink-3) !important; }
.cj-result .wfSpan .tr_d + .tr_f { border-top: 0 !important; }
.cj-result .tr_f .copyBttn { border-radius: 5px !important; color: var(--ink-4) !important; }
.cj-result .tr_f .copyBttn:hover { background: var(--line-2) !important; color: var(--brand-600) !important; }
.cj-result .tr_f .copyBttn::before { background-color: currentColor !important; }
.cj-result .cform_group { border-radius: 0 !important; background: none !important; color: var(--ink) !important; }
.cj-result .wordforms.table { color: inherit !important; border: 1px solid var(--line-2) !important; border-radius: 8px !important; background: #1c1c1c !important; }
.cj-result .wordforms .tr { border-top: 1px solid var(--line-2) !important; }
.cj-result .wordforms .tr:first-child { border-top: 0 !important; }
.cj-result .wordforms .tr.desk:nth-of-type(even) { background: #1d1d1d !important; }
.cj-result .wordforms.ajective .tr { border-top: 1px solid var(--line-2) !important; }
.cj-result .wordforms .td.des { color: var(--ink-2) !important; }
.cj-result .wordforms .td .tr_f { background: none !important; }
.cj-result .wordforms .tr.thead { background: var(--brand-tint) !important; }
.cj-result .wordforms .tr.thead .td { color: var(--brand-600) !important; }
.cj-result .wordforms .empty-cell { color: var(--ink-4) !important; }
.cj-result table.wordforms { color: inherit !important; background: #1c1c1c !important; border: 1px solid var(--line-2) !important; border-radius: 8px !important; border-collapse: separate !important; border-spacing: 0 !important; }
.cj-result table.wordforms td { border-top: 1px solid var(--line-2) !important; }
.cj-result table.wordforms tr:first-child td { border-top: 0 !important; }
.cj-result table.wordforms tr:nth-of-type(even) { background: #1d1d1d !important; }
.cj-result table.wordforms td.des,
    .cj-result table.wordforms .transl_form_des,
    .cj-result table.wordforms .transl_form_d { color: var(--ink-2) !important; }
.cj-result table.wordforms .tr_f { border: 0 !important; background: none !important; }
.cj-result table.wordforms.rom-adjn tr:first-child { background: var(--brand-tint) !important; }
.cj-result table.wordforms.rom-adjn tr:first-child td { color: var(--brand-600) !important; }
.cj-result table.wordforms:not(.rom-adjn):not(:has(tr:first-child > td:first-child:empty)) td:first-child,
    .cj-result table.wordforms:not(.rom-adjn):not(:has(tr:first-child > td:first-child:empty)) td:first-child .transl_form_des,
    .cj-result table.wordforms:not(.rom-adjn):not(:has(tr:first-child > td:first-child:empty)) td:first-child .transl_form_d { color: var(--brand-600) !important; }
.cj-result table.wordforms:not(.rom-adjn):not(:has(tr:first-child > td:first-child:empty)) td:first-child { background: var(--brand-tint) !important; }
.cj-result .addWForms { color: var(--ink-3) !important; }
.cj-result .psp { color: var(--ink-3) !important; }
.cj-result .auxiliary { color: var(--ink-3) !important; }
.cj-result p.disclaimer,
    .cj-result .disclaimer1 { color: var(--ink-3) !important; }
.cj-result p.disclaimer a,
        .cj-result .disclaimer1 a { color: var(--brand-600) !important; }
.cj-result .db_err { color: #e36059 !important; }
.cj-result .accent-btn { border-radius: 15px !important; }
.btn-secondary:focus, .btn-secondary.focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus { box-shadow: 0 0 0 .2rem rgba(0,0,0,.35) !important; }
.accentuate { color: #f04c6b !important; }
#descriptionText #bestVerbs, 
.bestTranslation { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
#descriptionText #bestVerbs h2,
    .bestTranslation h2 { color: var(--ink) !important; }
#descriptionText .verbsList:not(.all-verbs) > a,
        .bestTranslation .translationsList a { border: 1px solid var(--line) !important; border-radius: 100px !important; color: var(--ink) !important; }
#descriptionText .verbsList:not(.all-verbs) > a:hover,
            .bestTranslation .translationsList a:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
#descriptionText .col-v7 h3.h3-small { border-bottom: 1px solid var(--line-2) !important; color: var(--ink-3) !important; }
#descriptionText .col-v7 h3.h3-small a { color: inherit !important; }
#descriptionText .col-v7 h3.h3-small a:hover { color: var(--brand-600) !important; }
#descriptionText .col-v7 > a { color: var(--brand-600) !important; }
#descriptionText #originalDescription { border-top: 1px solid var(--line) !important; }
#descriptionText #originalDescription h2 { color: var(--ink) !important; }
#descriptionText #originalDescription p,
#descriptionText #originalDescription ul { color: var(--ink-2) !important; }
#descriptionText #originalDescription strong { color: var(--ink) !important; }
.diacritic-button { color: #4cb2f0 !important; border-radius: 5px !important; }
.diacritic-button:hover { background-color: #232323 !important; }
.cj-seo .cj-grammar { border-top: 0 !important; }
.tr-banner--cj { --bn-ink: #5cc9e0 !important; --bn-mute: rgba(92,201,224,0.72) !important; --bn-num: #4cf0d4 !important; --bn-badge: rgba(0,0,0,0.78) !important; --bn-badge-ink: #4cf0b9 !important; --bn-cta-hover-bg: #2c5c46 !important; background: linear-gradient(100deg, #162d20 0%, #162f2c 34%, #172b30 62%, #182831 100%) !important; }
.tr-banner--cj .tr-banner-gfx::before { border-radius: 50% !important; background: rgba(0,0,0,0.22) !important; }
.tr-banner--cj .tr-banner-gfx::after { border-radius: 50% !important; border: 1.5px solid rgba(0,0,0,0.75) !important; box-shadow: 690px -330px 0 -60px rgba(0,0,0,.35), 690px -330px 0 -58.5px rgba(0,0,0,.35) !important; }
.cjb-circ { border-radius: 50% !important; }
.cjb-circ--tr { border: 1.5px solid rgba(0,0,0,0.8) !important; background: rgba(0,0,0,0.08) !important; }
.cjb-circ--br { background: rgba(0,0,0,0.16) !important; }
.cjb-langs { color: var(--bn-mute) !important; }
.tr-banner--cj .tr-banner-chips a { background: rgba(0,0,0,0.62) !important; }
.tr-banner--cj .tr-banner-cta { box-shadow: 0 1px 0 rgba(0,0,0,.35) !important; }
.tr-banner--cj .tr-banner-chips span { border-radius: 999px !important; background: rgba(0,0,0,0.62) !important; color: var(--bn-ink) !important; }
.translator-card .pane.target .tr-done { color: var(--brand-600) !important; }
.translator-card .pane.target #loading { background: rgba(0,0,0,0.72) !important; border-radius: inherit !important; }
.tr-spinner { border: 2.5px solid var(--line) !important; border-top-color: var(--brand) !important; border-radius: 50% !important; }
.translator-card .pane.target .tr-done { color: var(--brand-600) !important; }
.translator-card .pane.target #loading { background: rgba(0,0,0,0.72) !important; border-radius: inherit !important; }
.tr-spinner { border: 2.5px solid var(--line) !important; border-top-color: var(--brand) !important; border-radius: 50% !important; }
#saveLinkWin #copySharedLink { border: 1px solid var(--line) !important; border-radius: 8px !important; }
#saveLinkWin #copySharedLink:hover { background-color: var(--line-2) !important; }
.okBtt { border: 1px solid #3a6d3a !important; border-radius: 4px !important; }
.lvl-badge { border-radius: 3px !important; background: var(--line-2) !important; color: var(--ink-2) !important; }
.lvl-A1, .lvl-A2 { background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.lvl-B1 { background: #1e1e1e !important; color: #6c8bd1 !important; }
.lvl-B2 { background: var(--amber-tint) !important; color: var(--amber) !important; }
.coll-actions button, .coll-actions a { border: 1px solid var(--line) !important; background: var(--surface) !important; border-radius: 6px !important; color: var(--ink-2) !important; }
.coll-actions button:hover, .coll-actions a:hover { border-color: var(--ink-4) !important; color: var(--ink) !important; background: var(--bg) !important; }
.aeo-entry .ae-translation { color: var(--ink-3) !important; }
.aeo-entry-hero .aeh-translation { color: var(--ink-2) !important; }
.aeo-entry-side .term-list a .n { color: var(--ink-4) !important; }
.phr-toast { border-radius: 6px !important; box-shadow: 0 6px 24px rgba(0,0,0,.35) !important; }
.aeo-modal-backdrop .aeo-modal { background: var(--bg) !important; border-radius: 12px !important; box-shadow: 0 22px 60px rgba(0,0,0,.35) !important; }
.aeo-modal-backdrop .aeo-modal a { color: inherit !important; }
.aeo-modal-backdrop .modal-chrome { background: var(--surface) !important; border-bottom: 1px solid var(--line) !important; color: var(--ink-3) !important; }
.aeo-modal-backdrop .modal-chrome .modal-loc strong { color: var(--brand-600) !important; }
.aeo-modal-backdrop .modal-chrome .modal-tools a, .aeo-modal-backdrop .modal-chrome .modal-tools button { border: 0 !important; background: transparent !important; border-radius: 4px !important; color: var(--ink-3) !important; }
.aeo-modal-backdrop .modal-chrome .modal-tools a:hover, .aeo-modal-backdrop .modal-chrome .modal-tools button:hover { background: var(--line-2) !important; color: var(--ink) !important; }
.aeo-modal-backdrop .modal-kbd { color: var(--ink-4) !important; border: 1px solid var(--line) !important; border-radius: 3px !important; background: var(--bg) !important; }
.aeo-modal-backdrop .modal-body .aeo-entry-hero { border-bottom: 1px solid var(--line) !important; }
.aeo-modal-backdrop .modal-body .aeo-entry-hero .kind-tag { color: var(--brand-600) !important; background: var(--brand-tint) !important; border-radius: 3px !important; }
.aeo-modal-backdrop .modal-body .aeh-actions button { border: 1px solid var(--line) !important; background: var(--surface) !important; border-radius: 6px !important; color: var(--ink-3) !important; }
.aeo-modal-backdrop .modal-body .aeh-actions button:hover { color: var(--brand-600) !important; border-color: var(--brand) !important; }
.aeo-modal-backdrop .modal-body .aeh-translation { color: var(--ink-2) !important; }
.aeo-modal-backdrop .modal-body .aeo-section h3 { color: var(--ink-3) !important; }
.aeo-modal-backdrop .modal-body .aeo-section .body { color: var(--ink) !important; }
.aeo-modal-backdrop .modal-body .aeo-example-block { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.aeo-modal-backdrop .modal-body .aeo-example-block .ex-en { color: var(--ink) !important; }
.aeo-modal-backdrop .modal-body .aeo-example-block .ex-en::before { color: var(--brand) !important; }
.aeo-modal-backdrop .modal-body .aeo-example-block .ex-en::after { color: var(--brand) !important; }
.aeo-modal-backdrop .modal-body .aeo-example-block .ex-ru { color: var(--ink-3) !important; border-top: 1px dashed var(--line-2) !important; }
.aeo-modal-backdrop .modal-body .aeo-example-block .listen-btn { border: 0 !important; background: var(--brand-tint) !important; color: var(--brand-600) !important; border-radius: 4px !important; }
.aeo-modal-backdrop .modal-body .aeo-example-block .listen-btn:hover { background: var(--brand) !important; }
.aeo-modal-backdrop .modal-body .aeo-callout { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; }
.aeo-modal-backdrop .modal-body .aeo-callout.mistakes { background: #292114 !important; border-color: #4e432a !important; }
.aeo-modal-backdrop .modal-body .aeo-callout h4 { color: var(--ink-3) !important; }
.aeo-modal-backdrop .modal-body .aeo-callout.mistakes h4 { color: var(--amber) !important; }
.aeo-modal-backdrop .modal-body .aeo-callout h4 .dot { border-radius: 50% !important; background: var(--brand) !important; }
.aeo-modal-backdrop .modal-body .aeo-callout.mistakes h4 .dot { background: var(--amber) !important; }
.aeo-modal-backdrop .modal-body .aeo-callout .body { color: var(--ink-2) !important; }
.aeo-modal-backdrop .modal-nav { background: var(--surface) !important; border-top: 1px solid var(--line) !important; }
.aeo-modal-backdrop .modal-nav a { border: 1px solid var(--line) !important; border-radius: 6px !important; color: var(--ink-2) !important; background: var(--bg) !important; }
.aeo-modal-backdrop .modal-nav a:hover { border-color: var(--brand) !important; color: var(--brand-600) !important; }
.aeo-modal-backdrop .modal-nav a .lbl { color: var(--ink-4) !important; }
.aeo-modal-backdrop .modal-nav .center-link { color: var(--brand-600) !important; }
@media (max-width: 720px) {
.aeo-modal-backdrop .aeo-modal { border-radius: 10px !important; }
}
.daily-pick { background: linear-gradient(96deg, #162d1d 0%, #173030 46%, #193035 100%) !important; color: #5cc9e0 !important; box-shadow: 0 1px 2px rgba(0,0,0,.35) !important; }
.daily-pick:hover { box-shadow: 0 12px 28px rgba(0,0,0,.35) !important; }
.daily-pick .dp-gfx::after { border-radius: 50% !important; background: radial-gradient(circle at 38% 32%, rgba(0,0,0,0.58), rgba(0,0,0,0.12) 52%, transparent 100%) !important; }
.daily-pick .dp-eyebrow { color: #4cdff0 !important; }
.daily-pick .dp-cat { color: rgba(92,201,224,0.6) !important; }
.daily-pick h3 { color: #5cc9e0 !important; }
.daily-pick .dp-phrases .dp-row .en { color: #5cc9e0 !important; }
.daily-pick .dp-phrases .dp-row .ru { color: rgba(92,201,224,0.66) !important; }
.daily-pick .dp-foot { color: rgba(92,201,224,0.74) !important; }
.daily-pick .dp-meta { color: rgba(92,201,224,0.74) !important; }
.daily-pick .dp-foot .dp-cta { border-radius: 8px !important; background: var(--brand) !important; }
.daily-pick:hover .dp-foot .dp-cta { text-decoration-color: currentColor !important; }
.lg-gr-bg { background: none !important; }
.menuContent .bs-docs-sidebar { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.menuContent h5 { border-bottom: 1px solid var(--line-2) !important; color: var(--ink-3) !important; }
.menuContent .na { color: var(--ink-2) !important; }
.menuContent .nav li a { color: var(--ink-blue) !important; background: none !important; border: 0 !important; }
.menuContent .nav li a:hover { background: none !important; }
.menuContent .nav li a.active,
        .menuContent .nav li.active > a { color: var(--ink) !important; }
.txtContent.gramm,
.grammar-description-block .txtContent { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; color: var(--ink-2) !important; }
.txtContent .breadcrumb { background: none !important; border-radius: 0 !important; color: var(--ink-3) !important; }
.txtContent .breadcrumb-item + .breadcrumb-item::before { color: var(--ink-4) !important; }
.txtContent .breadcrumb a { color: var(--ink-3) !important; }
.txtContent .breadcrumb a:hover { color: var(--brand-600) !important; }
.txtContent .breadcrumb-item.active { color: var(--ink) !important; }
.txtContent h1 { color: var(--ink) !important; }
.txtContent h2,
.txtContent .h2-small { color: var(--ink) !important; }
.txtContent h3 { color: var(--ink) !important; }
.txtContent a { color: var(--brand-600) !important; }
.txtContent b,
.txtContent strong { color: var(--ink) !important; }
.txtContent .gram-info { color: var(--ink-2 ) !important; }
.txtContent .gram-info em { color: var(--brand-600) !important; }
.txtContent .highlight { background: #162e20 !important; border-radius: 2px !important; color: var(--ink) !important; }
.right { background-color: #193326 !important; }
.right a { color: var(--ink-blue) !important; }
.examples { border-left: 2px solid #2b503d !important; }
.txtContent .examples a { color: var(--ink-blue) !important; }
.menuContent .nav li.frst-lv a { color: var(--ink-2) !important; }
.txtContent table { border: 1px solid var(--line-2) !important; border-radius: 8px !important; border-collapse: separate !important; border-spacing: 0 !important; color: var(--ink) !important; }
.txtContent table td,
    .txtContent table th { border: 0 !important; border-top: 1px solid var(--line-2) !important; }
.txtContent table tr:first-child td,
    .txtContent table tr:first-child th { border-top: 0 !important; }
.txtContent table tr:nth-child(even) { background: #1d1d1d !important; }
.txtContent table td.des { background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.txtContent table tr:nth-child(even) td.des { background: var(--brand-tint) !important; }
.txtContent table td.style4 { color: var(--ink-2) !important; }
.txtContent table a { color: var(--brand-600) !important; }
.escort-static:not(.row) { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; color: var(--ink-2) !important; }
.escort-static.row .txtContent { background: #1c1c1c !important; border: 1px solid var(--line) !important; border-radius: 10px !important; color: var(--ink-2) !important; }
.escort-static h1,
.escort-static .txtContent h1 { color: var(--ink) !important; }
.escort-static h2,
.escort-static .txtContent h2 { color: var(--ink) !important; }
.escort-static h3 { color: var(--ink) !important; }
.escort-static h4 { color: var(--ink) !important; }
.escort-static a { color: var(--brand-600) !important; }
.escort-static b,
.escort-static strong { color: var(--ink) !important; }
.escort-static .varColumnsItem { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: 10px !important; }
.escort-static .varColumnsItem .colTxt span { color: var(--ink-3) !important; }
.escort-static .green-btt,
.escort-static .green-btt-fill,
.escort-static .green-btt-active,
.escort-static .more-btt-green,
.escort-static input.green-btt,
.escort-static input.green-btt-fill { border: 1px solid var(--brand) !important; border-radius: 19px !important; background: #1c1c1c !important; color: var(--brand-600) !important; }
.escort-static .green-btt-fill,
.escort-static .green-btt-active,
.escort-static .more-btt-green,
.escort-static input.green-btt-fill { background: var(--brand) !important; border-color: var(--brand) !important; box-shadow: 0 4px 12px -4px rgba(0,0,0,.35) !important; }
.escort-static .green-btt:hover { background: var(--brand-tint) !important; }
.escort-static .green-btt-fill:hover,
.escort-static .green-btt-active:hover,
.escort-static .more-btt-green:hover { background: var(--brand-600) !important; }
.escort-static .control-label { color: var(--ink-2) !important; }
.escort-static .form-control { border: 1px solid var(--line) !important; border-radius: 8px !important; background: #1c1c1c !important; color: var(--ink) !important; }
.escort-static .form-control:focus { border-color: var(--brand) !important; outline: 0 !important; }
.escort-static .invalid-feedback { color: #da6a63 !important; }
.escort-static table { border: 1px solid var(--line-2) !important; border-radius: 8px !important; border-collapse: separate !important; border-spacing: 0 !important; color: var(--ink) !important; }
.escort-static table td,
    .escort-static table th { border: 0 !important; border-top: 1px solid var(--line-2) !important; }
.escort-static table tr:first-child td,
    .escort-static table tr:first-child th { border-top: 0 !important; }
.escort-static table th { background: var(--brand-tint) !important; color: var(--brand-600) !important; }
.escort-static table tr:nth-child(even) { background: #1d1d1d !important; }
.escort-static .alert { border-radius: 8px !important; }
.escort-static .menuContent .nav > li > a { color: var(--ink-2) !important; }
.escort-static .menuContent .nav > li > a:hover { color: var(--ink) !important; }
.ui-helper-hidden-accessible { border: 0 !important; }
.ui-helper-reset { border: 0 !important; outline: 0 !important; }
.ui-helper-clearfix:before,.ui-helper-clearfix:after { border-collapse: collapse !important; }
.ui-accordion .ui-accordion-content { border-top: 0 !important; }
.ui-menu { outline: 0 !important; }
.ui-menu .ui-menu-divider { border-width: 1px 0 0 0 !important; }
input.ui-button::-moz-focus-inner,button.ui-button::-moz-focus-inner { border: 0 !important; }
.ui-controlgroup-horizontal .ui-controlgroup-label + .ui-controlgroup-item { border-left: none !important; }
.ui-controlgroup-vertical .ui-controlgroup-label + .ui-controlgroup-item { border-top: none !important; }
.ui-controlgroup-horizontal .ui-controlgroup-label.ui-widget-content { border-right: none !important; }
.ui-controlgroup-vertical .ui-controlgroup-label.ui-widget-content { border-bottom: none !important; }
.ui-controlgroup-vertical .ui-spinner .ui-spinner-up { border-top-style: solid !important; }
.ui-checkboxradio-label .ui-icon-background { box-shadow: inset 1px 1px 1px rgba(0,0,0,.35) !important; border-radius: .12em !important; border: none !important; }
.ui-checkboxradio-radio-label .ui-icon-background { border-radius: 1em !important; border: none !important; }
.ui-checkboxradio-radio-label.ui-checkboxradio-checked .ui-icon,.ui-checkboxradio-radio-label.ui-checkboxradio-checked:hover .ui-icon { background-image: none !important; border-width: 4px !important; border-style: solid !important; }
.ui-datepicker table { border-collapse: collapse !important; }
.ui-datepicker th { border: 0 !important; }
.ui-datepicker td { border: 0 !important; }
.ui-datepicker .ui-datepicker-buttonpane { background-image: none !important; border-left: 0 !important; border-right: 0 !important; border-bottom: 0 !important; }
.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header { border-left-width: 0 !important; }
.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header { border-right-width: 0 !important; border-left-width: 1px !important; }
.ui-dialog { outline: 0 !important; }
.ui-dialog .ui-dialog-content { border: 0 !important; background: none !important; }
.ui-dialog .ui-dialog-buttonpane { border-width: 1px 0 0 0 !important; background-image: none !important; }
.ui-progressbar-indeterminate .ui-progressbar-value { background-image: none !important; }
.ui-selectmenu-menu .ui-menu .ui-selectmenu-optgroup { border: 0 !important; }
.ui-slider .ui-slider-range { border: 0 !important; }
.ui-spinner-input { border: none !important; background: none !important; color: inherit !important; }
.ui-spinner a.ui-spinner-button { border-top-style: none !important; border-bottom-style: none !important; border-right-style: none !important; }
.ui-tabs .ui-tabs-nav li { border-bottom-width: 0 !important; }
.ui-tabs .ui-tabs-panel { border-width: 0 !important; background: none !important; }
body .ui-tooltip { border-width: 2px !important; }
.ui-widget.ui-widget-content { border: 1px solid #424242 !important; }
.ui-widget-content { border: 1px solid #3c3c3c !important; background: #1c1c1c !important; color: #cfcfcf !important; }
.ui-widget-content a { color: #cfcfcf !important; }
.ui-widget-header { border: 1px solid #3c3c3c !important; background: #212121 !important; color: #cfcfcf !important; }
.ui-widget-header a { color: #cfcfcf !important; }
.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header .ui-state-default,.ui-button,html .ui-button.ui-state-disabled:hover,html .ui-button.ui-state-disabled:active { border: 1px solid #424242 !important; background: #1e1e1e !important; color: #c5c5c5 !important; }
.ui-state-default a,.ui-state-default a:link,.ui-state-default a:visited,a.ui-button,a:link.ui-button,a:visited.ui-button,.ui-button { color: #c5c5c5 !important; }
.ui-state-hover,.ui-widget-content .ui-state-hover,.ui-widget-header .ui-state-hover,.ui-state-focus,.ui-widget-content .ui-state-focus,.ui-widget-header .ui-state-focus,.ui-button:hover,.ui-button:focus { border: 1px solid #404040 !important; background: #202020 !important; color: #d3d3d3 !important; }
.ui-state-hover a,.ui-state-hover a:hover,.ui-state-hover a:link,.ui-state-hover a:visited,.ui-state-focus a,.ui-state-focus a:hover,.ui-state-focus a:link,.ui-state-focus a:visited,a.ui-button:hover,a.ui-button:focus { color: #d3d3d3 !important; }
.ui-visual-focus { box-shadow: 0 0 3px 1px rgba(0,0,0,.35) !important; }
.ui-icon-background,.ui-state-active .ui-icon-background { background-color: #1c1c1c !important; }
.ui-state-highlight,.ui-widget-content .ui-state-highlight,.ui-widget-header .ui-state-highlight { background: #37351a !important; color: #d6d566 !important; }
.ui-state-checked { background: #37351a !important; }
.ui-state-highlight a,.ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a { color: #d6d566 !important; }
.ui-state-error,.ui-widget-content .ui-state-error,.ui-widget-header .ui-state-error { border: 1px solid #55352e !important; background: #2b1515 !important; color: #ccb2b2 !important; }
.ui-state-error a,.ui-widget-content .ui-state-error a,.ui-widget-header .ui-state-error a { color: #ccb2b2 !important; }
.ui-state-error-text,.ui-widget-content .ui-state-error-text,.ui-widget-header .ui-state-error-text { color: #ccb2b2 !important; }
.ui-state-disabled,.ui-widget-content .ui-state-disabled,.ui-widget-header .ui-state-disabled { background-image: none !important; }
.ui-corner-all,.ui-corner-top,.ui-corner-left,.ui-corner-tl { border-top-left-radius: 3px !important; }
.ui-corner-all,.ui-corner-top,.ui-corner-right,.ui-corner-tr { border-top-right-radius: 3px !important; }
.ui-corner-all,.ui-corner-bottom,.ui-corner-left,.ui-corner-bl { border-bottom-left-radius: 3px !important; }
.ui-corner-all,.ui-corner-bottom,.ui-corner-right,.ui-corner-br { border-bottom-right-radius: 3px !important; }
.ui-widget-overlay { background: #2f2f2f !important; }
.ui-widget-shadow { box-shadow: 0 0 5px rgba(0,0,0,.35) !important; }
.ui-dialog.ui-widget.ui-widget-content { border: 1px solid var(--line) !important; border-radius: 12px !important; background: var(--bg) !important; box-shadow: 0 22px 60px rgba(0,0,0,.35) !important; color: var(--ink) !important; }
.ui-dialog .ui-dialog-titlebar.ui-widget-header { border: 0 !important; border-bottom: 1px solid var(--line) !important; border-radius: 12px 12px 0 0 !important; background: var(--surface) !important; color: var(--ink) !important; }
.ui-dialog .ui-dialog-content { background: transparent !important; color: var(--ink-2) !important; }
.ui-dialog .ui-dialog-titlebar-close.ui-button { border: 0 !important; border-radius: 4px !important; background: transparent !important; color: var(--ink-3) !important; }
.ui-dialog .ui-dialog-titlebar-close:hover,
.ui-dialog .ui-dialog-titlebar-close:focus { background: var(--line-2) !important; border: 0 !important; color: var(--ink) !important; }
#selectVKb { color: var(--ink-3) !important; }
#selectVKb select { border: 1px solid var(--line) !important; border-radius: 6px !important; background: var(--surface) !important; color: var(--ink) !important; }
a.vkbt,
a.vkbt:visited,
a.vkbt_b,
a.vkbt_b:visited,
a.vkbt_s,
a.vkbt_s:visited { border: 1px solid var(--line) !important; border-radius: 6px !important; background: var(--surface) !important; background-image: none !important; color: var(--ink-2) !important; }
a.vkbt_b,
    a.vkbt_b:visited { background: var(--bg) !important; }
a.vkbt_s,
    a.vkbt_s:visited { background: var(--bg) !important; }
a.vkbt:hover,
        a.vkbt:active,
        a.vkbt_b:hover,
        a.vkbt_b:active,
        a.vkbt_s:hover,
        a.vkbt_s:active { background: var(--brand-tint) !important; border-color: var(--brand) !important; color: var(--brand-600) !important; }
a.vkbt.is-armed .vk-ic,
a.vkbt_b.is-armed .vk-ic { color: var(--brand-600) !important; }
a.is-armed .vk-ic-dot { fill: currentColor !important; }

/* ---- manual tweaks (tools/manual.css) ---- */
:root {
  color-scheme: dark !important;
  --brand-50: #12301f !important;
  --brand-tint: #13261b !important;
  --brand-100: #1d4430 !important;
  --bg: #15171a !important;
  --paper: #1b1e22 !important;
  --surface: #1e2125 !important;
  --ink: #e6e8eb !important;
  --ink-2: #c4c8ce !important;
  --ink-3: #9aa0a9 !important;
  --ink-4: #737a84 !important;
  --ink-blue: #6ea8fe !important;
  --line: #33373d !important;
  --line-2: #2a2d32 !important;
  --amber: #e0a050 !important;
  --amber-tint: #3a2e18 !important;
  --shadow-sm: 0 1px 2px rgba(0,0,0,.4) !important;
  --shadow-md: 0 6px 24px rgba(0,0,0,.45), 0 1px 2px rgba(0,0,0,.4) !important;
}
html, body { background-color: #15171a !important; color: #e6e8eb !important; }
input, textarea, select { background-color: transparent; color: #e6e8eb !important; }
textarea::placeholder, input::placeholder { color: #737a84 !important; }
::selection { background: #1d6b45 !important; color: #fff !important; }
.tr-apps { background: linear-gradient(100deg, #15302a 0%, #1a2d33 55%, #2b2f1c 100%) !important; }
.tr-apps-text h3 { color: #e6e8eb !important; }
`;
  const s = document.createElement('style');
  s.id = 'promt-dark';
  s.textContent = css;
  (document.head || document.documentElement).appendChild(s);
  // move to the end of <head> once it exists so it wins over the site's sheets
  document.addEventListener('DOMContentLoaded', () => document.head && document.head.appendChild(s));
})();
