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

            if (Window.scrolly >= sectionTop) {
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

            history.replaceState(null. "", "#" + targetId);
        });
    });
});