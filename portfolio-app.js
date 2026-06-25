// AUTO-GENERATED from portfolio-app.jsx by build.py — do not edit directly.
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Felipe Gutierrez: interactive Drawing Sheet portfolio (Direction A, final build)
// Uses: window.FELIPE (portfolio-data.js), <image-slot>, tweaks-panel.jsx
var _React = React,
    useState = _React.useState;


var TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#3a6ea5",
  "frame": "Single line",
  "grid": true,
  "heroScale": 92,
  "theme": "System",
  "gears": true /*EDITMODE-END*/ };

function ProjectCard(_ref) {
  var p = _ref.p;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return React.createElement(
    "article",
    { className: "projwrap reveal", "data-comment-anchor": "proj-" + p.id },
    React.createElement(
      "div",
      { className: "projcard" + (p.gallery ? " has-gallery" : "") },
      React.createElement(
        "div",
        { className: "projbody" },
        React.createElement(
          "div",
          { className: "projcode" },
          p.code,
          " \xB7 ",
          p.date
        ),
        React.createElement(
          "h3",
          null,
          p.name
        ),
        React.createElement(
          "div",
          { className: "projmeta" },
          p.course
        ),
        React.createElement(
          "p",
          null,
          p.summary
        ),
        open && React.createElement(
          "div",
          { className: "details" },
          React.createElement(
            "ul",
            null,
            p.details.map(function (d, i) {
              return React.createElement(
                "li",
                { key: i },
                d
              );
            })
          )
        ),
        React.createElement(
          "button",
          { className: "detbtn", onClick: function onClick() {
              return setOpen(!open);
            } },
          open ? "− LESS DETAILS" : "+ MORE DETAILS"
        )
      ),
      React.createElement(
        "div",
        { className: "photo" },
        p.gallery && p.gallery.length ? React.createElement(Slideshow, { items: p.gallery, code: p.code }) : React.createElement("image-slot", { id: "photo-" + p.id, placeholder: "Drop photo: " + p.photo, shape: "rect" })
      )
    ),
    React.createElement(
      "div",
      { className: "specrow" },
      React.createElement(
        "div",
        null,
        "ROLE: ",
        p.role
      ),
      React.createElement(
        "div",
        null,
        "TOOLS: ",
        p.tools
      )
    )
  );
}

function CertCard(_ref2) {
  var c = _ref2.c;

  return React.createElement(
    "div",
    { className: "cert reveal", "data-comment-anchor": "cert-" + c.id },
    React.createElement(
      "h4",
      null,
      c.name
    ),
    React.createElement(
      "div",
      { className: "certdetail" },
      c.detail
    ),
    React.createElement(
      "div",
      { className: "certfoot" },
      React.createElement(
        "span",
        { className: "st" + (c.status === "Planned" ? " planned" : "") },
        c.status.toUpperCase()
      )
    )
  );
}

function App() {
  var _useTweaks = useTweaks(TWEAK_DEFAULTS),
      _useTweaks2 = _slicedToArray(_useTweaks, 2),
      t = _useTweaks2[0],
      setTweak = _useTweaks2[1];

  var D = window.FELIPE;

  var _useState3 = useState(window.matchMedia("(prefers-color-scheme: dark)").matches),
      _useState4 = _slicedToArray(_useState3, 2),
      osDark = _useState4[0],
      setOsDark = _useState4[1];

  React.useEffect(function () {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var fn = function fn(e) {
      return setOsDark(e.matches);
    };
    mq.addEventListener("change", fn);
    return function () {
      return mq.removeEventListener("change", fn);
    };
  }, []);
  // Scroll-reveal: fade-and-rise each section/card into view as it's scrolled to.
  React.useEffect(function () {
    var els = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (el) {
        return el.classList.add("in");
      });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) {
      return io.observe(el);
    });
    return function () {
      return io.disconnect();
    };
  }, []);
  var blueprint = t.theme === "Blueprint" || t.theme === "System" && osDark;
  var accent = blueprint ? "#9cc6ff" : t.accent;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      copied = _React$useState2[0],
      setCopied = _React$useState2[1];

  var copyEmail = function copyEmail(e) {
    e.preventDefault();
    var done = function done() {
      setCopied(true);setTimeout(function () {
        return setCopied(false);
      }, 2400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(D.email).then(done).catch(function () {
        window.location.href = "mailto:" + D.email;
      });
    } else {
      window.location.href = "mailto:" + D.email;
    }
  };
  React.useEffect(function () {
    document.documentElement.setAttribute("data-theme", (t.theme || "System").toLowerCase());
  }, [t.theme]);
  return React.createElement(
    "div",
    { className: "page", style: { "--accent": accent } },
    React.createElement(ScrollGears, { enabled: t.gears }),
    React.createElement(
      "nav",
      { className: "ticks" },
      React.createElement(
        "span",
        { className: "tickname" },
        "F\xB7GUTIERREZ \xB7 PORTFOLIO"
      ),
      React.createElement(
        "div",
        { className: "ticklinks" },
        React.createElement(
          "a",
          { href: "#projects" },
          "PROJECTS"
        ),
        React.createElement(
          "a",
          { href: "#certificates" },
          "CERTIFICATES"
        ),
        React.createElement(
          "a",
          { href: "#skills" },
          "SKILLS"
        ),
        React.createElement(
          "a",
          { href: "#contact" },
          "CONTACT"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "sheetframe", "data-frame": t.frame },
      t.frame === "Zone grid" && React.createElement(
        React.Fragment,
        null,
        React.createElement("div", { className: "zcorner tl" }),
        React.createElement(
          "div",
          { className: "zone top" },
          Array.from({ length: 12 }, function (_, i) {
            return React.createElement(
              "span",
              { key: i },
              i + 1
            );
          })
        ),
        React.createElement("div", { className: "zcorner tr" }),
        React.createElement(
          "div",
          { className: "zone left" },
          "ABCDEFGHIJKLMNOPQR".split("").map(function (l) {
            return React.createElement(
              "span",
              { key: l },
              l
            );
          })
        )
      ),
      React.createElement(
        "div",
        { className: "sheet", "data-grid": t.grid ? "true" : "false" },
        React.createElement(
          "header",
          { className: "hero", "data-screen-label": "Hero" },
          React.createElement(
            "div",
            { className: "sub" },
            "MECHANICAL ENGINEERING (HONOURS) \xB7 UTS \xB7 SYDNEY"
          ),
          React.createElement(
            "h1",
            { style: { fontSize: t.heroScale + "px" } },
            "Felipe",
            React.createElement("br", null),
            "Gutierrez"
          ),
          React.createElement(
            "p",
            { className: "tag" },
            D.tagline
          ),
          React.createElement(
            "div",
            { className: "titleblock" },
            React.createElement(
              "div",
              null,
              "SHEET"
            ),
            React.createElement(
              "div",
              null,
              "PORTFOLIO 01"
            ),
            React.createElement(
              "div",
              null,
              "SCALE"
            ),
            React.createElement(
              "div",
              null,
              "1 : 1"
            ),
            React.createElement(
              "div",
              null,
              "DRAWN BY"
            ),
            React.createElement(
              "div",
              null,
              "F. GUTIERREZ"
            ),
            React.createElement(
              "div",
              null,
              "STANDARD"
            ),
            React.createElement(
              "div",
              null,
              "AS1100"
            )
          )
        ),
        React.createElement(
          "section",
          { id: "projects", "data-screen-label": "Projects" },
          React.createElement(
            "div",
            { className: "secthead reveal" },
            React.createElement(
              "span",
              { className: "dwg" },
              "DWG 01"
            ),
            React.createElement(
              "h2",
              null,
              "Projects"
            ),
            React.createElement("div", { className: "rule" })
          ),
          D.projects.map(function (p) {
            return React.createElement(ProjectCard, { p: p, key: p.id });
          })
        ),
        React.createElement(
          "section",
          { id: "certificates", "data-screen-label": "Certificates" },
          React.createElement(
            "div",
            { className: "secthead reveal" },
            React.createElement(
              "span",
              { className: "dwg" },
              "DWG 02"
            ),
            React.createElement(
              "h2",
              null,
              "Certificates"
            ),
            React.createElement("div", { className: "rule" })
          ),
          React.createElement(
            "div",
            { className: "certgrid" },
            D.certificates.map(function (c) {
              return React.createElement(CertCard, { c: c, key: c.id });
            })
          )
        ),
        React.createElement(
          "section",
          { id: "skills", "data-screen-label": "Skills & Experience" },
          React.createElement(
            "div",
            { className: "secthead reveal" },
            React.createElement(
              "span",
              { className: "dwg" },
              "DWG 03"
            ),
            React.createElement(
              "h2",
              null,
              "Skills & Experience"
            ),
            React.createElement("div", { className: "rule" })
          ),
          React.createElement(
            "div",
            { className: "twocol reveal" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "h3small" },
                "TECHNICAL SKILLS"
              ),
              D.skills.map(function (s) {
                return React.createElement(
                  "div",
                  { className: "skillrow", key: s.name },
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "div",
                      { className: "nm" },
                      s.name
                    ),
                    React.createElement(
                      "div",
                      { className: "skillnote" },
                      s.note
                    )
                  ),
                  React.createElement(
                    "span",
                    { className: "lv" },
                    s.level.toUpperCase()
                  )
                );
              })
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "h3small" },
                "EXPERIENCE"
              ),
              D.experience.map(function (e) {
                return React.createElement(
                  "div",
                  { className: "exprow", key: e.role },
                  React.createElement(
                    "div",
                    { className: "rl" },
                    e.role,
                    ", ",
                    e.org
                  ),
                  React.createElement(
                    "div",
                    { className: "dt" },
                    e.date
                  ),
                  React.createElement(
                    "div",
                    { className: "nt" },
                    e.note
                  )
                );
              }),
              React.createElement(
                "div",
                { className: "h3small", style: { marginTop: 28 } },
                "EDUCATION"
              ),
              React.createElement(
                "div",
                { className: "exprow" },
                React.createElement(
                  "div",
                  { className: "rl" },
                  "B.E. Mechanical (Honours)"
                ),
                React.createElement(
                  "div",
                  { className: "dt" },
                  "Aug 2024 to Nov 2028"
                ),
                React.createElement(
                  "div",
                  { className: "nt" },
                  D.uni
                )
              )
            )
          )
        ),
        React.createElement(
          "footer",
          { id: "contact", className: "footer", "data-screen-label": "Contact" },
          React.createElement(
            "div",
            null,
            React.createElement(
              "h2",
              null,
              "Let\u2019s talk."
            ),
            React.createElement(
              "div",
              { className: "contactline" },
              D.email,
              " \xB7 ",
              D.phone
            )
          ),
          React.createElement(
            "div",
            { className: "links" },
            React.createElement(
              "a",
              { href: D.linkedinUrl, target: "_blank", rel: "noopener noreferrer" },
              "LINKEDIN \u2197"
            ),
            React.createElement(
              "a",
              { href: "mailto:" + D.email, onClick: copyEmail, className: copied ? "copied" : "" },
              copied ? "✓ EMAIL COPIED — PASTE IT" : "COPY EMAIL"
            ),
            React.createElement(
              "a",
              { href: window.RESUME_DOCX_URL || "uploads/Felipe_Gutierrez_Resume.docx", download: "Felipe_Gutierrez_Resume.docx" },
              "DOWNLOAD CV"
            )
          )
        )
      ),
      t.frame === "Zone grid" && React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          { className: "zone right" },
          "ABCDEFGHIJKLMNOPQR".split("").map(function (l) {
            return React.createElement(
              "span",
              { key: l },
              l
            );
          })
        ),
        React.createElement("div", { className: "zcorner bl" }),
        React.createElement(
          "div",
          { className: "zone bottom" },
          Array.from({ length: 12 }, function (_, i) {
            return React.createElement(
              "span",
              { key: i },
              i + 1
            );
          })
        ),
        React.createElement("div", { className: "zcorner br" })
      )
    ),
    React.createElement(
      TweaksPanel,
      null,
      React.createElement(TweakSection, { label: "Sheet" }),
      React.createElement(TweakSelect, { label: "Theme", value: t.theme,
        options: ["System", "Light", "Blueprint"],
        onChange: function onChange(v) {
          return setTweak("theme", v);
        } }),
      React.createElement(TweakSelect, { label: "Frame style", value: t.frame,
        options: ["Single line", "Double line", "Borderless", "Zone grid"],
        onChange: function onChange(v) {
          return setTweak("frame", v);
        } }),
      React.createElement(TweakColor, { label: "Accent", value: t.accent,
        options: ["#3a6ea5", "#2e7f8b", "#55609e", "#8a5a3a"],
        onChange: function onChange(v) {
          return setTweak("accent", v);
        } }),
      React.createElement(TweakToggle, { label: "Grid paper background", value: t.grid,
        onChange: function onChange(v) {
          return setTweak("grid", v);
        } }),
      React.createElement(TweakSlider, { label: "Hero size", value: t.heroScale, min: 64, max: 120, unit: "px",
        onChange: function onChange(v) {
          return setTweak("heroScale", v);
        } }),
      React.createElement(TweakToggle, { label: "Scroll gears", value: t.gears,
        onChange: function onChange(v) {
          return setTweak("gears", v);
        } })
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));