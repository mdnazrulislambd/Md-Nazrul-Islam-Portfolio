document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(
        ".navbar .nav-link[data-section]"
    );

    const section = document.querySelectorAll(
        "section[id]"
    );

    if (navLinks.length === 0 || section.length === 0) {
        return;
    }

    function updateActivelink() {
        let currentSection = "";

        section.forEach(function (section) {
            const sectionTop = section.offsetTop - 120;

            if (Window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            const sectionName = link.dataset.section;
            const isActive = sectionName === currentSection;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("scroll", updateActivelink);
    updateActivelink();
});

/* Hero Interactions */

document.addEventListener("DOMContentLoaded", function () {
    const heroLinks = document.querySelectorAll(
        '.hero-section a[href^="/#"]'
    );

    heroLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href").split("#")[1];
            const targetSection = document.getElementById(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", "#" + targetId);
        });
    });
});

/* ===== UI enhancements ===== */
document.documentElement.classList.add("js-ready");

document.addEventListener("DOMContentLoaded", function () {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1) Reveal elements when they scroll into view
    const revealItems = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window && !reduceMotion) {
        const observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach(function (el) { observer.observe(el); });
    } else {
        revealItems.forEach(function (el) { el.classList.add("is-visible"); });
    }

    // 2) Navbar shadow, scroll progress bar, back-to-top button
    const navbar = document.querySelector(".site-navbar");
    const progress = document.querySelector(".scroll-progress");
    const topButton = document.querySelector(".back-to-top");

    function onScroll() {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;

        if (navbar) navbar.classList.toggle("is-scrolled", y > 10);
        if (progress) progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
        if (topButton) topButton.classList.toggle("show", y > 500);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (topButton) {
        topButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        });
    }
});
