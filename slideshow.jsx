// slideshow.jsx — angled stacked-card gallery with FIG numbering + VIEW lightbox.
// Exposes window.Slideshow. Pure React (no extra deps). Theme-aware via CSS vars.

// shared swipe hook: returns onTouchStart/onTouchEnd handlers
function useSwipe(onLeft, onRight) {
  const start = React.useRef(null);
  return {
    onTouchStart: (e) => { start.current = e.touches[0].clientX; },
    onTouchEnd: (e) => {
      if (start.current == null) return;
      const dx = e.changedTouches[0].clientX - start.current;
      if (Math.abs(dx) > 40) { dx < 0 ? onLeft() : onRight(); }
      start.current = null;
    }
  };
}

function Lightbox({ items, index, setIndex, onClose }) {
  const swipe = useSwipe(
    () => setIndex((index + 1) % items.length),
    () => setIndex((index - 1 + items.length) % items.length)
  );
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") setIndex((index + 1) % items.length);
      else if (e.key === "ArrowLeft") setIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length]);
  const it = items[index];
  const fig = String(index + 1).padStart(2, "0");
  return ReactDOM.createPortal((
    <div className="lb" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>
      <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); setIndex((index - 1 + items.length) % items.length); }} aria-label="Previous">‹</button>
      <figure className="lb-fig" onClick={(e) => e.stopPropagation()} {...swipe}>
        <img src={it.src} alt={it.title} />
        <figcaption>
          <span className="lb-fignum">FIG · {fig} / {String(items.length).padStart(2, "0")}</span>
          <span className="lb-title">{it.title}</span>
          {it.note && <span className="lb-note">{it.note}</span>}
        </figcaption>
      </figure>
      <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); setIndex((index + 1) % items.length); }} aria-label="Next">›</button>
    </div>
  ), document.body);
}

function Slideshow({ items, code }) {
  const [index, setIndex] = React.useState(0);
  const [box, setBox] = React.useState(false);
  // Preload every gallery image up-front (they're small WebPs now) so advancing
  // never waits on a network fetch or a first-time decode.
  React.useEffect(() => {
    items.forEach((it) => { const im = new Image(); im.src = it.src; });
  }, [items]);
  const n = items.length;
  if (!n) return null;
  const major = ((code || "").match(/\d+/) || ["01"])[0];
  const go = (d) => setIndex((index + d + n) % n);
  const cur = items[index];
  const figLabel = "FIG " + major + "." + String(index + 1).padStart(2, "0");

  // build a small stack: front + two peeking behind
  const stack = [0, 1, 2].map((off) => ({ off, it: items[(index + off) % n] }));
  const swipe = useSwipe(() => go(1), () => go(-1));

  return (
    <div className="ss" data-comment-anchor="warman-gallery">
      <div className="ss-stage" {...swipe}>
        {stack.slice().reverse().map(({ off, it }) => (
          <div key={it.src} className={"ss-card pos-" + off} onClick={() => off === 0 ? setBox(true) : go(off)}>
            <div className="ss-mat">
              <img src={it.src} alt={it.title} draggable="false" />
            </div>
            {off === 0 && (
              <button className="ss-view" onClick={(e) => { e.stopPropagation(); setBox(true); }}>⊕ VIEW</button>
            )}
          </div>
        ))}
        <button className="ss-arrow prev" onClick={() => go(-1)} aria-label="Previous">‹</button>
        <button className="ss-arrow next" onClick={() => go(1)} aria-label="Next">›</button>
      </div>

      <div className="ss-meta">
        <div className="ss-dots">
          {items.map((_, i) => (
            <button key={i} className={"ss-dot" + (i === index ? " on" : "")} onClick={() => setIndex(i)} aria-label={"Figure " + (i + 1)}></button>
          ))}
        </div>
        <div className="ss-caption">
          <span className="ss-fig">{figLabel}</span>
          <span className="ss-idx">· {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")} ·</span>
          <span className="ss-title">{cur.title}</span>
        </div>
      </div>

      {box && <Lightbox items={items} index={index} setIndex={setIndex} onClose={() => setBox(false)} />}
    </div>
  );
}

Object.assign(window, { Slideshow });
