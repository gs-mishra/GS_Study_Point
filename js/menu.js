/**
 * menu.js
 * Mobile Navigation Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.getElementById('navLinks'); // Should match the ID we added
    const icon = document.querySelector('.mobile-menu-btn ion-icon');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling issues
            navLinks.classList.toggle('active');

            // Toggle Icon
            if (icon) {
                const isActive = navLinks.classList.contains('active');
                icon.setAttribute('name', isActive ? 'close-outline' : 'menu-outline');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                if (icon) icon.setAttribute('name', 'menu-outline');
            }
        });
    } else {
        console.warn('Mobile menu elements not found');
    }
});
