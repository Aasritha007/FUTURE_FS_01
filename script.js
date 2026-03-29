// 🌟 Portfolio Enhancement Script

// Smooth scroll (for future navigation links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Card hover effect (slight scale for better UI feel)
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// Console message (professional touch)
console.log("%cWelcome to Aasritha's Portfolio 🚀", 
    "color: #38bdf8; font-size: 16px; font-weight: bold;"
);
