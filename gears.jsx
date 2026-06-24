// gears.jsx — scroll-driven line-art gears for the page margins.
// Exposes window.ScrollGears. Rotation is tied to window.scrollY;
// disabled automatically when the viewer prefers reduced motion.

function gearPoints(teeth, ro, ri) {
  const pts = [];
  const step = (Math.PI * 2) / teeth;
  const frac = [0.05, 0.4, 0.55, 0.9];
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    for (let j = 0; j < 4; j++) {
      const ang = a + frac[j] * step;
      const r = j < 2 ? ro : ri;
      pts.push((Math.cos(ang) * r).toFixed(2) + "," + (Math.sin(ang) * r).toFixed(2));
    }
  }
  return pts.join(" ");
}

function Gear({ r, teeth, speed, phase = 0, style }) {
  const ro = r;
  const ri = r * 0.8;
  const pad = 2;
  const hub = r * 0.16;
  const ring = ri * 0.6;
  const spokes = [45, 135, 225, 315].map((deg) => {
    const a = (deg * Math.PI) / 180;
    return {
      x1: (Math.cos(a) * hub).toFixed(2), y1: (Math.sin(a) * hub).toFixed(2),
      x2: (Math.cos(a) * ring).toFixed(2), y2: (Math.sin(a) * ring).toFixed(2),
    };
  });
  const box = ro + pad;
  return (
    <div className="gearpos" style={style}>
      <svg className="gearsvg" data-speed={speed} data-phase={phase} width={box * 2} height={box * 2}
        style={{ transform: "rotate(" + phase + "deg)" }}
        viewBox={-box + " " + -box + " " + box * 2 + " " + box * 2}>
        <polygon points={gearPoints(teeth, ro, ri)}></polygon>
        <circle r={ring}></circle>
        <circle r={hub}></circle>
        {spokes.map((s, i) => <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}></line>)}
      </svg>
    </div>
  );
}

function ScrollGears({ enabled }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!enabled || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = ref.current.querySelectorAll(".gearsvg");
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      els.forEach((el) => {
        const phase = parseFloat(el.dataset.phase) || 0;
        el.style.transform = "rotate(" + (phase + y * parseFloat(el.dataset.speed)) + "deg)";
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div className="gears" ref={ref} aria-hidden="true">
      {/* left rail: a meshed pair + a small runner */}
      {/* left rail: meshed pair — same tooth pitch, exact centre distance,
          speeds in -14:9 ratio, phased so teeth seat in valleys at y=0 */}
      <Gear r={95} teeth={14} speed={0.12} phase={20} style={{ left: -120, top: "14%" }} />
      <Gear r={61} teeth={9} speed={-0.18667} phase={28.3} style={{ left: -55, top: "calc(14% + 171px)" }} />
      <Gear r={38} teeth={7} speed={0.3} style={{ left: -25, top: "78%" }} />
      {/* right rail: meshed pair — speeds in -12:8 ratio */}
      <Gear r={82} teeth={12} speed={-0.14} phase={6.4} style={{ right: -100, top: "48%" }} />
      <Gear r={55} teeth={8} speed={0.21} phase={25.5} style={{ right: -45, top: "calc(48% + 147px)" }} />
    </div>
  );
}

Object.assign(window, { ScrollGears });
