/*
============================================================
When Explore button is clicked redirect to pages/guide.html
============================================================
*/
function showHeroesGuidePage() {
  window.location.href = "pages/guide.html";
}

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event bubbling
      mobileMenu.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }
});

// Cursor effects
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  if (cursor)
    cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
  if (follower)
    follower.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
});

// Hero card interaction
document.querySelectorAll(".hero-card").forEach((card) => {
  if (window.innerWidth <= 768) {
    // Mobile - Click interaction
    card.addEventListener("click", () => {
      // Remove active class from all other cards
      document.querySelectorAll(".hero-card").forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard
            .querySelector(".hero-card-infos")
            .classList.remove("active");
          otherCard.classList.remove("active");
        }
      });

      // Toggle active class on clicked card
      card.querySelector(".hero-card-infos").classList.toggle("active");
      card.classList.toggle("active");
    });
  } else {
    // Desktop - Hover interaction
    card.addEventListener("mouseenter", () => {
      card.querySelector(".hero-card-infos").classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      card.querySelector(".hero-card-infos").classList.remove("active");
    });
  }
});

// Close stats when clicking outside
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768 && !e.target.closest(".hero-card")) {
    document.querySelectorAll(".hero-card-infos").forEach((info) => {
      info.classList.remove("active");
    });
    document.querySelectorAll(".hero-card").forEach((card) => {
      card.classList.remove("active");
    });
  }
});
