// Function to add 'visible' class to menu sections when they come into view
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.menu-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});