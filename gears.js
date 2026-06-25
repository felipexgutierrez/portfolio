// AUTO-GENERATED from gears.jsx by build.py — do not edit directly.
"use strict";

// gears.jsx — scroll-driven line-art gears for the page margins.
// Exposes window.ScrollGears. Rotation is tied to window.scrollY;
// disabled automatically when the viewer prefers reduced motion.

function gearPoints(teeth, ro, ri) {
  var pts = [];
  var step = Math.PI * 2 / teeth;
  var frac = [0.05, 0.4, 0.55, 0.9];
  for (var i = 0; i < teeth; i++) {
    var a = i * step;
    for (var j = 0; j < 4; j++) {
      var ang = a + frac[j] * step;
      var r = j < 2 ? ro : ri;
      pts.push((Math.cos(ang) * r).toFixed(2) + "," + (Math.sin(ang) * r).toFixed(2));
    }
  }
  return pts.join(" ");
}

function Gear(_ref) {
  var r = _ref.r,
      teeth = _ref.teeth,
      speed = _ref.speed,
      _ref$phase = _ref.phase,
      phase = _ref$phase === undefined ? 0 : _ref$phase,
      style = _ref.style;

  var ro = r;
  var ri = r * 0.8;
  var pad = 2;
  var hub = r * 0.16;
  var ring = ri * 0.6;
  var spokes = [45, 135, 225, 315].map(function (deg) {
    var a = deg * Math.PI / 180;
    return {
      x1: (Math.cos(a) * hub).toFixed(2), y1: (Math.sin(a) * hub).toFixed(2),
      x2: (Math.cos(a) * ring).toFixed(2), y2: (Math.sin(a) * ring).toFixed(2)
    };
  });
  var box = ro + pad;
  return React.createElement(
    "div",
    { className: "gearpos", style: style },
    React.createElement(
      "svg",
      { className: "gearsvg", "data-speed": speed, "data-phase": phase, width: box * 2, height: box * 2,
        style: { transform: "rotate(" + phase + "deg)" },
        viewBox: -box + " " + -box + " " + box * 2 + " " + box * 2 },
      React.createElement("polygon", { points: gearPoints(teeth, ro, ri) }),
      React.createElement("circle", { r: ring }),
      React.createElement("circle", { r: hub }),
      spokes.map(function (s, i) {
        return React.createElement("line", { key: i, x1: s.x1, y1: s.y1, x2: s.x2, y2: s.y2 });
      })
    )
  );
}

function ScrollGears(_ref2) {
  var enabled = _ref2.enabled;

  var ref = React.useRef(null);
  React.useEffect(function () {
    if (!enabled || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var els = ref.current.querySelectorAll(".gearsvg");
    var raf = 0;
    var update = function update() {
      raf = 0;
      var y = window.scrollY;
      els.forEach(function (el) {
        var phase = parseFloat(el.dataset.phase) || 0;
        el.style.transform = "rotate(" + (phase + y * parseFloat(el.dataset.speed)) + "deg)";
      });
    };
    var onScroll = function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return function () {
      window.removeEventListener("scroll", onScroll);if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return React.createElement(
    "div",
    { className: "gears", ref: ref, "aria-hidden": "true" },
    React.createElement(Gear, { r: 95, teeth: 14, speed: 0.12, phase: 20, style: { left: -120, top: "14%" } }),
    React.createElement(Gear, { r: 61, teeth: 9, speed: -0.18667, phase: 28.3, style: { left: -55, top: "calc(14% + 171px)" } }),
    React.createElement(Gear, { r: 38, teeth: 7, speed: 0.3, style: { left: -25, top: "78%" } }),
    React.createElement(Gear, { r: 82, teeth: 12, speed: -0.14, phase: 6.4, style: { right: -100, top: "48%" } }),
    React.createElement(Gear, { r: 55, teeth: 8, speed: 0.21, phase: 25.5, style: { right: -45, top: "calc(48% + 147px)" } })
  );
}

Object.assign(window, { ScrollGears: ScrollGears });