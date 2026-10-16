/* theme.js - dark / light toggle
   The saved choice is applied before first paint by the small inline script in <head>
   (see _Layout.cshtml), so there is no flash of the wrong theme. */
(function () {
    "use strict";

    var root = document.documentElement;
    var button = document.querySelector(".theme-toggle");

    function current() {
        return root.getAttribute("data-theme") === "light" ? "light" : "dark";
    }

    function paint(theme) {
        root.setAttribute("data-theme", theme);

        // Colour of the browser bar on phones
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", theme === "light" ? "#f8fafc" : "#031624");

        if (button) button.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    }

    paint(current());

    if (!button) return;

    button.addEventListener("click", function () {
        var next = current() === "light" ? "dark" : "light";

        // Short-lived class that makes colours fade instead of snapping
        root.classList.add("theme-transition");
        paint(next);
        window.setTimeout(function () { root.classList.remove("theme-transition"); }, 450);

        // localStorage can be blocked (private mode): never let that break the page
        try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
    });
})();
