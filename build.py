#!/usr/bin/env python3
"""Precompile the JSX sources to plain JavaScript.

The site loads the generated *.js files directly, so visitors no longer download
the ~3 MB in-browser Babel compiler or wait for it to transpile on every load.

Usage:
    pip install dukpy      # one-time
    python build.py        # after editing any *.jsx, re-run to regenerate *.js

Edit the *.jsx files (the source of truth) — never the generated *.js.
"""
import os
import dukpy

HERE = os.path.dirname(os.path.abspath(__file__))
# Order doesn't matter for compilation; the HTML controls load order.
SOURCES = ["tweaks-panel", "gears", "slideshow", "portfolio-app"]

for name in SOURCES:
    src_path = os.path.join(HERE, name + ".jsx")
    out_path = os.path.join(HERE, name + ".js")
    with open(src_path, encoding="utf-8") as f:
        src = f.read()
    code = dukpy.jsx_compile(src)
    with open(out_path, "w", encoding="utf-8", newline="\n") as f:
        f.write("// AUTO-GENERATED from {0}.jsx by build.py — do not edit directly.\n".format(name))
        f.write(code)
    print("compiled {0}.jsx -> {0}.js  ({1:,} bytes)".format(name, len(code)))

print("done")
