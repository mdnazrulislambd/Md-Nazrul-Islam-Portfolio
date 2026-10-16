document.documentElement.classList.add("js-ready");

document.addEventListener("DOMContentLoaded", function () {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollBehavior = reduceMotion ? "auto" : "smooth";

    /* ---------- Active menu link while scrolling ---------- */
    const navLinks = document.querySelectorAll(".navbar .nav-link[data-section]");
    const sections = document.querySelectorAll("section[id]");

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(function (sectionEl) {
            const sectionTop = sectionEl.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                currentSection = sectionEl.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            const isActive = link.dataset.section === currentSection;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    /* ---------- Smooth scroll for the hero buttons ---------- */
    document.querySelectorAll('.hero-section a[href^="/#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href").split("#")[1];
            const targetSection = document.getElementById(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();
            targetSection.scrollIntoView({ behavior: scrollBehavior, block: "start" });
            history.replaceState(null, "", "#" + targetId);
        });
    });

    /* ---------- Reveal elements when they scroll into view ---------- */
    const revealItems = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window && !reduceMotion) {
        const revealObserver = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach(function (el) { revealObserver.observe(el); });
    } else {
        revealItems.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ---------- Navbar shadow, progress bar, back-to-top button ---------- */
    const navbar = document.querySelector(".site-navbar");
    const progress = document.querySelector(".scroll-progress");
    const topButton = document.querySelector(".back-to-top");

    function onScroll() {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;

        if (navbar) navbar.classList.toggle("is-scrolled", y > 10);
        if (progress) progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
        if (topButton) topButton.classList.toggle("show", y > 500);

        updateActiveLink();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (topButton) {
        topButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: scrollBehavior });
        });
    }

    /* ---------- Typing effect in the hero ---------- */
    const typed = document.getElementById("typed-text");

    if (typed && typed.dataset.words && !reduceMotion) {
        // The word list is read again on every step, so the language switch can change it live
        const getWords = function () {
            return typed.dataset.words
                .split("|")
                .map(function (w) { return w.trim(); })
                .filter(function (w) { return w.length > 0; });
        };

        // Bangla letters join into clusters (conjuncts, vowel signs).
        // Cutting by characters would show broken half-letters, so cut by grapheme instead.
        const toGraphemes = function (word) {
            if (window.Intl && Intl.Segmenter) {
                return Array.from(new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(word),
                    function (part) { return part.segment; });
            }
            return Array.from(word);
        };

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const tick = function () {
            const words = getWords();
            if (words.length === 0) return;
            if (wordIndex >= words.length) wordIndex = 0;

            const letters = toGraphemes(words[wordIndex]);
            charIndex += deleting ? -1 : 1;
            charIndex = Math.max(0, Math.min(charIndex, letters.length));
            typed.textContent = letters.slice(0, charIndex).join("");

            let delay = deleting ? 45 : 90;

            if (!deleting && charIndex === letters.length) {
                deleting = true;
                delay = 1400;
            } else if (deleting && charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 350;
            }

            setTimeout(tick, delay);
        };

        typed.textContent = "";
        tick();
    }

    /* ---------- Count-up numbers ---------- */
    document.querySelectorAll("[data-count]").forEach(function (el) {
        const target = parseInt(el.dataset.count, 10);

        if (isNaN(target) || reduceMotion || !("IntersectionObserver" in window)) {
            return;
        }

        el.textContent = "0";

        const counterObserver = new IntersectionObserver(function (entries, obs) {
            if (!entries[0].isIntersecting) return;
            obs.disconnect();

            let current = 0;
            const step = Math.max(1, Math.ceil(target / 30));
            const timer = setInterval(function () {
                current = Math.min(target, current + step);
                el.textContent = current;
                if (current === target) clearInterval(timer);
            }, 50);
        }, { threshold: 0.6 });

        counterObserver.observe(el);
    });

    // Close the mobile menu after tapping a menu link
    const mainNav = document.getElementById("mainNav");

    document.querySelectorAll(".site-navbar .nav-link, .site-navbar .nav-cta").forEach(function (link) {
        link.addEventListener("click", function () {
            if (mainNav && mainNav.classList.contains("show") && window.bootstrap) {
                window.bootstrap.Collapse.getOrCreateInstance(mainNav).hide();
            }
        });
    });
});
