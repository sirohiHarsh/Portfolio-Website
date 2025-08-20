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

    // Particles.js configuration
        particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#818cf8"
            },
            "shape": {
              "type": "circle",
            },
            "opacity": {
              "value": 0.5,
              "random": false,
            },
            "size": {
              "value": 3,
              "random": true,
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#38bdf8",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 4,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
