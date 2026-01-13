// ===================================
// SABRINA'S RESTAURANT - JAVASCRIPT
// Interactive Features & Animations
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // === SMOOTH SCROLLING ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                const headerNav = document.querySelector('.header-nav');
                const mobileToggle = document.querySelector('.mobile-menu-toggle');
                if (headerNav && headerNav.classList.contains('active')) {
                    headerNav.classList.remove('active');
                    if (mobileToggle) {
                        mobileToggle.querySelector('i').classList.remove('fa-times');
                        mobileToggle.querySelector('i').classList.add('fa-bars');
                    }
                }
            }
        });
    });

    // === MOBILE MENU TOGGLE ===
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerNav = document.querySelector('.header-nav');

    if (mobileMenuToggle && headerNav) {
        mobileMenuToggle.addEventListener('click', function () {
            headerNav.classList.toggle('active');
            this.classList.toggle('active'); // Adicionado
            const icon = this.querySelector('i');
            if (headerNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // === HEADER SCROLL EFFECT ===
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });


    // === INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // === MENU CATEGORY HOVER EFFECTS ===
    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach(category => {
        category.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        category.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // === EXPERIENCE CARDS STAGGER ANIMATION ===
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // === PHONE NUMBER CLICK TRACKING ===
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('Phone call initiated: ' + this.getAttribute('href'));
            // Here you could add analytics tracking if needed
        });
    });

    // === HERO PARALLAX EFFECT ===
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero-background');

    if (hero && heroBackground) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            heroBackground.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }

    // === MENU ITEMS HOVER EFFECT ===
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const price = this.querySelector('.item-price');
            if (price) {
                price.style.transform = 'scale(1.1)';
                price.style.color = 'var(--warm-accent)';
            }
        });

        item.addEventListener('mouseleave', function () {
            const price = this.querySelector('.item-price');
            if (price) {
                price.style.transform = 'scale(1)';
                price.style.color = 'var(--gold-primary)';
            }
        });
    });

    // === CONTACT ITEMS ANIMATION ===
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';

        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100 * index);
    });

    // === SOCIAL LINKS HOVER EFFECT ===
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // === HOURS ROWS ANIMATION ===
    const hoursRows = document.querySelectorAll('.hours-row');
    hoursRows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(10px)';

        setTimeout(() => {
            row.style.transition = 'all 0.4s ease';
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // === BUTTON RIPPLE EFFECT ===
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // === SCROLL TO TOP ON LOGO CLICK ===
    const logo = document.querySelector('.hero-logo');
    if (logo) {
        logo.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        logo.style.cursor = 'pointer';
    }

    // === LAZY LOADING FOR IMAGES ===
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // === CONSOLE WELCOME MESSAGE ===
    console.log('%c🍽️ Bem-vindo ao Nosso Restaurante! 🍽️', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
    console.log('%cSabores que encantam, momentos que ficam.', 'color: #C87941; font-size: 14px;');
    console.log('%cReserve já: +258 00 000 0000', 'color: #2C2416; font-size: 12px;');
});

// === ADD RIPPLE EFFECT STYLES DYNAMICALLY ===
const style = document.createElement('style');
style.textContent = `
  .btn {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
