// Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });

        if (document.getElementById('typed-text')) {
            new Typed('#typed-text', {
                strings: ['Web Developer', 'Tech Enthusiast', 'Competitive Programmer'],
                typeSpeed: 70,
                backSpeed: 50,
                loop: true,
            });
        }

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#header nav a');
    window.addEventListener('scroll', () => {
        let current = 'home'; 
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
            }
        });
    });

const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        scrollRevealElements.forEach(el => observer.observe(el));
