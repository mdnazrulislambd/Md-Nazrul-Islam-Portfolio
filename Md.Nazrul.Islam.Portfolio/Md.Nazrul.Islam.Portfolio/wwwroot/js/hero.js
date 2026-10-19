/* hero.js - types the little terminal card once.
   The text is already in the HTML, so with JavaScript off (or "reduce motion" on)
   the card simply shows the finished text. */
(function () {
    "use strict";

    var card = document.querySelector(".hero-whoami");
    if (!card) return;

    // small screens: the card is hidden by CSS, nothing to type
    if (window.getComputedStyle(card).display === "none") return;

    // visitors who asked for less motion get the finished text
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var lines = Array.prototype.slice.call(card.querySelectorAll(".w-cmd, .w-out"));
    var texts = lines.map(function (el) { return el.textContent.trim(); });

    var cursor = document.createElement("span");
    cursor.className = "w-cursor";
    cursor.setAttribute("aria-hidden", "true");

    lines.forEach(function (el) { el.textContent = ""; });

    function typeLine(index) {
        // finished: the cursor keeps blinking at the end of the last line
        if (index >= lines.length) return;

        var el = lines[index];
        var node = document.createTextNode("");
        el.appendChild(node);
        el.appendChild(cursor);            // moves the cursor to the line being typed

        var isCommand = el.classList.contains("w-cmd");
        var text = texts[index];
        var position = 0;
        var speed = isCommand ? 55 : 18;   // commands are typed, results appear quickly

        (function tick() {
            position += 1;
            node.nodeValue = text.slice(0, position);

            if (position < text.length) {
                window.setTimeout(tick, speed);
            } else {
                window.setTimeout(function () { typeLine(index + 1); }, isCommand ? 240 : 300);
            }
        })();
    }

    // start when the card has slid in
    window.setTimeout(function () { typeLine(0); }, 1500);
})();