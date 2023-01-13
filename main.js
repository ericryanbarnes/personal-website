const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.mobile-nav a');


navButton.addEventListener('click', () => {
    const isOpened = navButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        navButton.setAttribute('aria-expanded', 'true');
        navMenu.setAttribute('aria-expanded', 'true');
    }
    else {
        navButton.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-expanded', 'false');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navButton.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-expanded', 'false');
    });
} );
