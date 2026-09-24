/* =====================================================
   JERRIPOTHULA AASRITHA
   PORTFOLIO JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    navLinks.classList.toggle("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

            }
        );


        const links =
            navLinks.querySelectorAll("a");


        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "open"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

    }



    /* =================================================
       TYPING EFFECT
    ================================================= */

    const typingElement =
        document.getElementById("typingText");


    const words = [
        "Student • Developer • Learner",
        "Building Ideas Into Projects",
        "Learning Something New Every Day"
    ];


    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    function typeWriter() {

        if (!typingElement) {
            return;
        }


        if (reducedMotion) {

            typingElement.textContent =
                words[0];

            return;

        }


        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (
                characterIndex ===
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    typeWriter,
                    1800
                );

                return;

            }


        } else {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) %
                    words.length;

            }

        }


        setTimeout(
            typeWriter,
            deleting ? 35 : 65
        );

    }


    typeWriter();



    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (
        reducedMotion ||
        !("IntersectionObserver" in window)
    ) {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

    } else {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );

    }



    /* =================================================
       CURRENT YEAR
    ================================================= */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navigationItems =
        document.querySelectorAll(
            ".nav-link"
        );


    if (
        sections.length &&
        navigationItems.length &&
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                const sectionId =
                                    entry.target.id;


                                navigationItems.forEach(
                                    function (link) {

                                        link.classList.remove(
                                            "active"
                                        );


                                        if (
                                            link.getAttribute(
                                                "href"
                                            ) ===
                                            "#" +
                                            sectionId
                                        ) {

                                            link.classList.add(
                                                "active"
                                            );

                                        }

                                    }
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.35
                }
            );


        sections.forEach(
            function (section) {

                sectionObserver.observe(
                    section
                );

            }
        );

    }



    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


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
                            ? navbar.offsetHeight
                            : 0;


                    const position =
                        target.getBoundingClientRect()
                            .top
                        +
                        window.scrollY
                        -
                        navbarHeight
                        -
                        15;


                    window.scrollTo({

                        top: position,

                        behavior:
                            reducedMotion
                                ? "auto"
                                : "smooth"

                    });

                }
            );

        }
    );



    /* =================================================
       PHOTO HOVER EFFECT
    ================================================= */

    const portrait =
        document.querySelector(
            ".portrait-card"
        );


    if (
        portrait &&
        !reducedMotion &&
        window.innerWidth > 900
    ) {

        portrait.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    portrait.getBoundingClientRect();


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


                const rotateX =
                    (centerY - y) /
                    centerY *
                    2;


                const rotateY =
                    (x - centerX) /
                    centerX *
                    2;


                portrait.style.transform =
                    "perspective(1000px) " +
                    "rotateX(" +
                    rotateX +
                    "deg) " +
                    "rotateY(" +
                    rotateY +
                    "deg) " +
                    "translateY(-5px)";

            }
        );


        portrait.addEventListener(
            "mouseleave",
            function () {

                portrait.style.transform =
                    "rotate(2deg)";

            }
        );

    }



    /* =================================================
       PROJECT CARD EFFECT
    ================================================= */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.style.zIndex =
                        "5";

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.style.zIndex =
                        "1";

                }
            );

        }
    );



    /* =================================================
       CLOSE MOBILE MENU OUTSIDE CLICK
    ================================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !navLinks ||
                !menuToggle
            ) {

                return;

            }


            const clickedInsideMenu =
                navLinks.contains(
                    event.target
                );


            const clickedButton =
                menuToggle.contains(
                    event.target
                );


            if (
                !clickedInsideMenu &&
                !clickedButton
            ) {

                navLinks.classList.remove(
                    "open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

});
