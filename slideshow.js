// AUTO-GENERATED from slideshow.jsx by build.py — do not edit directly.
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// slideshow.jsx — angled stacked-card gallery with FIG numbering + VIEW lightbox.
// Exposes window.Slideshow. Pure React (no extra deps). Theme-aware via CSS vars.

// shared swipe hook: returns onTouchStart/onTouchEnd handlers
function useSwipe(onLeft, onRight) {
  var start = React.useRef(null);
  return {
    onTouchStart: function onTouchStart(e) {
      start.current = e.touches[0].clientX;
    },
    onTouchEnd: function onTouchEnd(e) {
      if (start.current == null) return;
      var dx = e.changedTouches[0].clientX - start.current;
      if (Math.abs(dx) > 40) {
        dx < 0 ? onLeft() : onRight();
      }
      start.current = null;
    }
  };
}

function Lightbox(_ref) {
  var items = _ref.items,
      index = _ref.index,
      setIndex = _ref.setIndex,
      onClose = _ref.onClose;

  var swipe = useSwipe(function () {
    return setIndex((index + 1) % items.length);
  }, function () {
    return setIndex((index - 1 + items.length) % items.length);
  });
  React.useEffect(function () {
    var onKey = function onKey(e) {
      if (e.key === "Escape") onClose();else if (e.key === "ArrowRight") setIndex((index + 1) % items.length);else if (e.key === "ArrowLeft") setIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return function () {
      return window.removeEventListener("keydown", onKey);
    };
  }, [index, items.length]);
  var it = items[index];
  var fig = String(index + 1).padStart(2, "0");
  return ReactDOM.createPortal(React.createElement(
    "div",
    { className: "lb", onClick: onClose },
    React.createElement(
      "button",
      { className: "lb-close", onClick: onClose, "aria-label": "Close" },
      "\u2715"
    ),
    React.createElement(
      "button",
      { className: "lb-nav prev", onClick: function onClick(e) {
          e.stopPropagation();setIndex((index - 1 + items.length) % items.length);
        }, "aria-label": "Previous" },
      "\u2039"
    ),
    React.createElement(
      "figure",
      _extends({ className: "lb-fig", onClick: function onClick(e) {
          return e.stopPropagation();
        } }, swipe),
      React.createElement("img", { src: it.src, alt: it.title }),
      React.createElement(
        "figcaption",
        null,
        React.createElement(
          "span",
          { className: "lb-fignum" },
          "FIG \xB7 ",
          fig,
          " / ",
          String(items.length).padStart(2, "0")
        ),
        React.createElement(
          "span",
          { className: "lb-title" },
          it.title
        ),
        it.note && React.createElement(
          "span",
          { className: "lb-note" },
          it.note
        )
      )
    ),
    React.createElement(
      "button",
      { className: "lb-nav next", onClick: function onClick(e) {
          e.stopPropagation();setIndex((index + 1) % items.length);
        }, "aria-label": "Next" },
      "\u203A"
    )
  ), document.body);
}

function Slideshow(_ref2) {
  var items = _ref2.items,
      code = _ref2.code;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      index = _React$useState2[0],
      setIndex = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      box = _React$useState4[0],
      setBox = _React$useState4[1];
  // Preload every gallery image up-front (they're small WebPs now) so advancing
  // never waits on a network fetch or a first-time decode.


  React.useEffect(function () {
    items.forEach(function (it) {
      var im = new Image();im.src = it.src;
    });
  }, [items]);
  var n = items.length;
  if (!n) return null;
  var major = ((code || "").match(/\d+/) || ["01"])[0];
  var go = function go(d) {
    return setIndex((index + d + n) % n);
  };
  var cur = items[index];
  var figLabel = "FIG " + major + "." + String(index + 1).padStart(2, "0");

  // build a small stack: front + two peeking behind
  var stack = [0, 1, 2].map(function (off) {
    return { off: off, it: items[(index + off) % n] };
  });
  var swipe = useSwipe(function () {
    return go(1);
  }, function () {
    return go(-1);
  });

  return React.createElement(
    "div",
    { className: "ss", "data-comment-anchor": "warman-gallery" },
    React.createElement(
      "div",
      _extends({ className: "ss-stage" }, swipe),
      stack.slice().reverse().map(function (_ref3) {
        var off = _ref3.off,
            it = _ref3.it;
        return React.createElement(
          "div",
          { key: it.src, className: "ss-card pos-" + off, onClick: function onClick() {
              return off === 0 ? setBox(true) : go(off);
            } },
          React.createElement(
            "div",
            { className: "ss-mat" },
            React.createElement("img", { src: it.src, alt: it.title, draggable: "false" })
          ),
          off === 0 && React.createElement(
            "button",
            { className: "ss-view", onClick: function onClick(e) {
                e.stopPropagation();setBox(true);
              } },
            "\u2295 VIEW"
          )
        );
      }),
      React.createElement(
        "button",
        { className: "ss-arrow prev", onClick: function onClick() {
            return go(-1);
          }, "aria-label": "Previous" },
        "\u2039"
      ),
      React.createElement(
        "button",
        { className: "ss-arrow next", onClick: function onClick() {
            return go(1);
          }, "aria-label": "Next" },
        "\u203A"
      )
    ),
    React.createElement(
      "div",
      { className: "ss-meta" },
      React.createElement(
        "div",
        { className: "ss-dots" },
        items.map(function (_, i) {
          return React.createElement("button", { key: i, className: "ss-dot" + (i === index ? " on" : ""), onClick: function onClick() {
              return setIndex(i);
            }, "aria-label": "Figure " + (i + 1) });
        })
      ),
      React.createElement(
        "div",
        { className: "ss-caption" },
        React.createElement(
          "span",
          { className: "ss-fig" },
          figLabel
        ),
        React.createElement(
          "span",
          { className: "ss-idx" },
          "\xB7 ",
          String(index + 1).padStart(2, "0"),
          " / ",
          String(n).padStart(2, "0"),
          " \xB7"
        ),
        React.createElement(
          "span",
          { className: "ss-title" },
          cur.title
        )
      )
    ),
    box && React.createElement(Lightbox, { items: items, index: index, setIndex: setIndex, onClose: function onClose() {
        return setBox(false);
      } })
  );
}

Object.assign(window, { Slideshow: Slideshow });