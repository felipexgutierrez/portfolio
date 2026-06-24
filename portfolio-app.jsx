// Felipe Gutierrez: interactive Drawing Sheet portfolio (Direction A, final build)
// Uses: window.FELIPE (portfolio-data.js), <image-slot>, tweaks-panel.jsx
const { useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#3a6ea5",
  "frame": "Single line",
  "grid": true,
  "heroScale": 92,
  "theme": "System",
  "gears": true
}/*EDITMODE-END*/;

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="projwrap" data-comment-anchor={"proj-" + p.id}>
      <div className={"projcard" + (p.gallery ? " has-gallery" : "")}>
        <div className="projbody">
          <div className="projcode">{p.code} · {p.date}</div>
          <h3>{p.name}</h3>
          <div className="projmeta">{p.course}</div>
          <p>{p.summary}</p>
          {open && (
            <div className="details">
              <ul>
                {p.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          )}
          <button className="detbtn" onClick={() => setOpen(!open)}>
            {open ? "− LESS DETAILS" : "+ MORE DETAILS"}
          </button>
        </div>
        <div className="photo">
          {p.gallery && p.gallery.length
            ? <Slideshow items={p.gallery} code={p.code} />
            : <image-slot id={"photo-" + p.id} placeholder={"Drop photo: " + p.photo} shape="rect"></image-slot>}
        </div>
      </div>
      <div className="specrow">
        <div>ROLE: {p.role}</div>
        <div>TOOLS: {p.tools}</div>
      </div>
    </article>
  );
}

function CertCard({ c }) {
  return (
    <div className="cert" data-comment-anchor={"cert-" + c.id}>
      <h4>{c.name}</h4>
      <div className="certdetail">{c.detail}</div>
      <div className="certfoot">
        <span className={"st" + (c.status === "Planned" ? " planned" : "")}>{c.status.toUpperCase()}</span>
      </div>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const D = window.FELIPE;
  const [osDark, setOsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const fn = (e) => setOsDark(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  const blueprint = t.theme === "Blueprint" || (t.theme === "System" && osDark);
  const accent = blueprint ? "#9cc6ff" : t.accent;
  const [copied, setCopied] = React.useState(false);
  const copyEmail = (e) => {
    e.preventDefault();
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2400); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(D.email).then(done).catch(() => { window.location.href = "mailto:" + D.email; });
    } else {
      window.location.href = "mailto:" + D.email;
    }
  };
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", (t.theme || "System").toLowerCase());
  }, [t.theme]);
  return (
    <div className="page" style={{ "--accent": accent }}>
      <ScrollGears enabled={t.gears} />
      <nav className="ticks">
        <span className="tickname">F·GUTIERREZ · PORTFOLIO</span>
        <div className="ticklinks">
          <a href="#projects">PROJECTS</a>
          <a href="#certificates">CERTIFICATES</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <div className="sheetframe" data-frame={t.frame}>
        {t.frame === "Zone grid" && <>
          <div className="zcorner tl"></div>
          <div className="zone top">{Array.from({ length: 12 }, (_, i) => <span key={i}>{i + 1}</span>)}</div>
          <div className="zcorner tr"></div>
          <div className="zone left">{"ABCDEFGHIJKLMNOPQR".split("").map(l => <span key={l}>{l}</span>)}</div>
        </>}

        <div className="sheet" data-grid={t.grid ? "true" : "false"}>
        <header className="hero" data-screen-label="Hero">
          <div className="sub">MECHANICAL ENGINEERING (HONOURS) · UTS · SYDNEY</div>
          <h1 style={{ fontSize: t.heroScale + "px" }}>Felipe<br />Gutierrez</h1>
          <p className="tag">{D.tagline}</p>
          <div className="titleblock">
            <div>SHEET</div><div>PORTFOLIO 01</div>
            <div>SCALE</div><div>1 : 1</div>
            <div>DRAWN BY</div><div>F. GUTIERREZ</div>
            <div>STANDARD</div><div>AS1100</div>
          </div>
        </header>

        <section id="projects" data-screen-label="Projects">
          <div className="secthead">
            <span className="dwg">DWG 01</span><h2>Projects</h2><div className="rule"></div>
          </div>
          {D.projects.map(p => <ProjectCard p={p} key={p.id} />)}
        </section>

        <section id="certificates" data-screen-label="Certificates">
          <div className="secthead">
            <span className="dwg">DWG 02</span><h2>Certificates</h2><div className="rule"></div>
          </div>
          <div className="certgrid">
            {D.certificates.map(c => <CertCard c={c} key={c.id} />)}
          </div>
        </section>

        <section id="skills" data-screen-label="Skills & Experience">
          <div className="secthead">
            <span className="dwg">DWG 03</span><h2>Skills &amp; Experience</h2><div className="rule"></div>
          </div>
          <div className="twocol">
            <div>
              <div className="h3small">TECHNICAL SKILLS</div>
              {D.skills.map(s => (
                <div className="skillrow" key={s.name}>
                  <div>
                    <div className="nm">{s.name}</div>
                    <div className="skillnote">{s.note}</div>
                  </div>
                  <span className="lv">{s.level.toUpperCase()}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="h3small">EXPERIENCE</div>
              {D.experience.map(e => (
                <div className="exprow" key={e.role}>
                  <div className="rl">{e.role}, {e.org}</div>
                  <div className="dt">{e.date}</div>
                  <div className="nt">{e.note}</div>
                </div>
              ))}
              <div className="h3small" style={{ marginTop: 28 }}>EDUCATION</div>
              <div className="exprow">
                <div className="rl">B.E. Mechanical (Honours)</div>
                <div className="dt">Aug 2024 to Nov 2028</div>
                <div className="nt">{D.uni}</div>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="footer" data-screen-label="Contact">
          <div>
            <h2>Let&rsquo;s talk.</h2>
            <div className="contactline">{D.email} · {D.phone}</div>
          </div>
          <div className="links">
            <a href={D.linkedinUrl} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
            <a href={"mailto:" + D.email} onClick={copyEmail} className={copied ? "copied" : ""}>{copied ? "✓ EMAIL COPIED — PASTE IT" : "COPY EMAIL"}</a>
            <a href={window.RESUME_DOCX_URL || "uploads/Felipe_Gutierrez_Resume.docx"} download="Felipe_Gutierrez_Resume.docx">DOWNLOAD CV</a>
          </div>
        </footer>
        </div>

        {t.frame === "Zone grid" && <>
          <div className="zone right">{"ABCDEFGHIJKLMNOPQR".split("").map(l => <span key={l}>{l}</span>)}</div>
          <div className="zcorner bl"></div>
          <div className="zone bottom">{Array.from({ length: 12 }, (_, i) => <span key={i}>{i + 1}</span>)}</div>
          <div className="zcorner br"></div>
        </>}
      </div>

      <TweaksPanel>
        <TweakSection label="Sheet" />
        <TweakSelect label="Theme" value={t.theme}
          options={["System", "Light", "Blueprint"]}
          onChange={(v) => setTweak("theme", v)} />
        <TweakSelect label="Frame style" value={t.frame}
          options={["Single line", "Double line", "Borderless", "Zone grid"]}
          onChange={(v) => setTweak("frame", v)} />
        <TweakColor label="Accent" value={t.accent}
          options={["#3a6ea5", "#2e7f8b", "#55609e", "#8a5a3a"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakToggle label="Grid paper background" value={t.grid}
          onChange={(v) => setTweak("grid", v)} />
        <TweakSlider label="Hero size" value={t.heroScale} min={64} max={120} unit="px"
          onChange={(v) => setTweak("heroScale", v)} />
        <TweakToggle label="Scroll gears" value={t.gears}
          onChange={(v) => setTweak("gears", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
