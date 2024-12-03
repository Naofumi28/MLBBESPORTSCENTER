// Hero Card Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    const heroCards = document.querySelectorAll('.hero-card');
    let activeCard = null;

    heroCards.forEach(card => {
        const infoSection = card.querySelector('.hero-card-infos');
        let isHovered = false;
        let timeoutId = null;

        // Mouse enter event
        card.addEventListener('mouseenter', () => {
            isHovered = true;
            if (activeCard && activeCard !== card) {
                const activeInfo = activeCard.querySelector('.hero-card-infos');
                activeInfo.classList.remove('active');
            }
            clearTimeout(timeoutId);
            infoSection.classList.add('active');
            activeCard = card;
        });

        // Mouse leave event
        card.addEventListener('mouseleave', () => {
            isHovered = false;
            timeoutId = setTimeout(() => {
                if (!isHovered) {
                    infoSection.classList.remove('active');
                    activeCard = null;
                }
            }, 200); // Small delay to prevent flickering
        });

        // Touch events for mobile
        card.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (activeCard && activeCard !== card) {
                const activeInfo = activeCard.querySelector('.hero-card-infos');
                activeInfo.classList.remove('active');
            }
            infoSection.classList.toggle('active');
            activeCard = infoSection.classList.contains('active') ? card : null;
        });

        // Add magical particle effect on hover
        card.addEventListener('mouseenter', (e) => {
            createParticles(e, card);
        });
    });

    // Close active card when clicking outside
    document.addEventListener('click', (e) => {
        if (activeCard && !activeCard.contains(e.target)) {
            const activeInfo = activeCard.querySelector('.hero-card-infos');
            activeInfo.classList.remove('active');
            activeCard = null;
        }
    });
});

function createParticles(e, card) {
    const particles = 10;
    const rect = card.getBoundingClientRect();
    
    for(let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        document.body.appendChild(particle);
        
        const size = Math.random() * 5 + 2;
        const x = e.clientX - rect.left + (Math.random() - 0.5) * 50;
        const y = e.clientY - rect.top + (Math.random() - 0.5) * 50;
        const destinationX = x + (Math.random() - 0.5) * 100;
        const destinationY = y + (Math.random() - 0.5) * 100;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x + rect.left}px`;
        particle.style.top = `${y + rect.top}px`;
        
        requestAnimationFrame(() => {
            particle.style.transform = `translate(${destinationX - x}px, ${destinationY - y}px)`;
            particle.style.opacity = '0';
        });
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Add this CSS to your stylesheet
const style = document.createElement('style');
style.textContent = `
    .magic-particle {
        position: fixed;
        background: radial-gradient(circle at center, 
            rgba(0, 255, 136, 0.8),
            rgba(0, 162, 255, 0.4)
        );
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        transition: transform 1s ease-out, opacity 1s ease-out;
    }
`;
document.head.appendChild(style);


    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        requestAnimationFrame(() => {
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 50);
        });
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .hero-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    // Hide default cursor when mouse enters the window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '0.7';
    });

    // Hide cursors when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });


    