const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Add logic here to show/hide the menu on mobile
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'block';
    } else {
        navLinks.style.display = 'none';
    }
    
});