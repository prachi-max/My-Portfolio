document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal (you already have this library included)
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    // Apply reveal animations to sections
    sr.reveal('.home-content', {});
    sr.reveal('#home_img', { origin: 'right', delay: 300 });
    
    sr.reveal('.about-content', { origin: 'left', delay: 200 });
    sr.reveal('.about-img', { origin: 'right', delay: 300 });
    
    sr.reveal('.skills h4', {});
    sr.reveal('.skills-grid', { delay: 300, interval: 100 });
    sr.reveal('.softskill', { delay: 400, interval: 100 });
    
    sr.reveal('.skills1 h1', {});
    sr.reveal('.skill-box', { delay: 300, interval: 200 });
    
    sr.reveal('#projects h2', {});
    sr.reveal('.project', { delay: 300, interval: 200 });
    
    sr.reveal('.blog h1', {});
    sr.reveal('.blog-post', { delay: 300, interval: 200 });
    
    sr.reveal('.contact-title', {});
    sr.reveal('.contact form', { delay: 300 });

    // Smooth scroll for navigation links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            
            // Update active class
            document.querySelectorAll('.navbar a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Mobile menu toggle
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('fa-xmark');
        });
    }

    // Track active section on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.navbar a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});