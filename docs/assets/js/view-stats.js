        document.addEventListener('DOMContentLoaded', function() {
            const cursorFollower = document.querySelector('.cursor-follower');

            // Update follower position
            document.addEventListener('mousemove', (e) => {
                requestAnimationFrame(() => {
                    cursorFollower.style.left = e.clientX + 'px';
                    cursorFollower.style.top = e.clientY + 'px';
                });
            });

            // Add hover effects for interactive elements
            const interactiveElements = document.querySelectorAll('a, button, .hero-image, .ability-card');
            
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
                });
                
                el.addEventListener('mouseleave', () => {
                    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
                });
            });
        });