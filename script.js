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
