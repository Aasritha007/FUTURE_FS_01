/* =====================================================
   JERRIPOTHULA AASRITHA
   PREMIUM PORTFOLIO JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       MOBILE NAVIGATION
    ================================================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("open");

            const isOpen =
                navMenu.classList.contains("open");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuBtn.textContent =
                isOpen ? "✕" : "☰";

        });


        // Close menu after clicking a navigation link

        const navLinks =
            navMenu.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.textContent = "☰";

            });

        });


        // Close menu when clicking outside

        document.addEventListener("click", (event) => {

            if (
                !navMenu.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {

                navMenu.classList.remove("open");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.textContent = "☰";

            }

        });

    }


    /* =================================================
       SCROLL REVEAL ANIMATION
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        prefersReducedMotion ||
        !("IntersectionObserver" in window)
    ) {

        revealElements.forEach((element) => {

            element.classList.add("show");

        });

    } else {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach((element) => {

            observer.observe(element);

        });

    }


    /* =================================================
       HERO NAME ANIMATION
    ================================================= */

    const heroName =
        document.querySelector(".hero h1");


    if (
        heroName &&
        !prefersReducedMotion
    ) {

        heroName.style.opacity = "0";

        heroName.style.transform =
            "translateY(20px)";


        requestAnimationFrame(() => {

            setTimeout(() => {

                heroName.style.transition =
                    "opacity 0.8s ease, transform 0.8s ease";

                heroName.style.opacity = "1";

                heroName.style.transform =
                    "translateY(0)";

            }, 150);

        });

    }


    /* =================================================
       HERO PHOTO ANIMATION
    ================================================= */

    const photoCard =
        document.querySelector(".photo-card");


    if (
        photoCard &&
        !prefersReducedMotion
    ) {

        photoCard.style.opacity = "0";

        photoCard.style.transform =
            "translateY(25px) rotate(2deg)";


        setTimeout(() => {

            photoCard.style.transition =
                "opacity 0.9s ease, transform 0.9s ease";

            photoCard.style.opacity = "1";

            photoCard.style.transform =
                "translateY(0) rotate(2deg)";

        }, 350);

    }


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            "#navMenu a"
        );


    if (
        sections.length &&
        navigationLinks.length
    ) {

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            navigationLinks.forEach(
                                (link) => {

                                    link.classList.remove(
                                        "active"
                                    );

                                }
                            );


                            const activeLink =
                                document.querySelector(
                                    `#navMenu a[href="#${entry.target.id}"]`
                                );


                            if (activeLink) {

                                activeLink.classList.add(
                                    "active"
                                );

                            }

                        }

                    });

                },
                {
                    threshold: 0.35
                }
            );


        sections.forEach((section) => {

            sectionObserver.observe(section);

        });

    }


    /* =================================================
       PROJECT CARD INTERACTION
    ================================================= */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                if (prefersReducedMotion) {
                    return;
                }

                card.style.transition =
                    "transform 0.3s ease, box-shadow 0.3s ease";

            }
        );

    });


    /* =================================================
       SKILL HOVER EFFECT
    ================================================= */

    const skillItems =
        document.querySelectorAll(
            ".skill-list span"
        );


    skillItems.forEach((skill) => {

        skill.addEventListener(
            "mouseenter",
            () => {

                skill.style.transform =
                    "translateY(-3px)";

            }
        );


        skill.addEventListener(
            "mouseleave",
            () => {

                skill.style.transform =
                    "translateY(0)";

            }
        );

    });


    /* =================================================
       CURRENT YEAR
    ================================================= */

    const yearElement =
        document.getElementById("year");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const navbar =
                    document.querySelector(
                        ".navbar"
                    );


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight + 25
                        : 20;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior:
                        prefersReducedMotion
                            ? "auto"
                            : "smooth"

                });

            }
        );

    });


    /* =================================================
       SUBTLE PHOTO TILT
       Desktop only
    ================================================= */

    if (
        photoCard &&
        !prefersReducedMotion &&
        window.innerWidth > 900
    ) {

        photoCard.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    photoCard.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    3;


                const rotateX =
                    ((centerY - y) /
                        centerY) *
                    3;


                photoCard.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        photoCard.addEventListener(
            "mouseleave",
            () => {

                photoCard.style.transform =
                    "rotate(2deg)";

            }
        );

    }


    /* =================================================
       PAGE LOAD
    ================================================= */

    window.addEventListener(
        "load",
        () => {

            document.body.classList.add(
                "page-loaded"
            );

        }
    );

});
