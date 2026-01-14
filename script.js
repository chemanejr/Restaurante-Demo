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

    // === MENU FILTERING LOGIC ===
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categories = document.querySelectorAll('.menu-category');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            categories.forEach(category => {
                if (filterValue === 'all' || category.getAttribute('data-category') === filterValue) {
                    category.classList.remove('hidden');
                    category.classList.add('fade-in', 'visible');
                } else {
                    category.classList.add('hidden');
                }
            });
        });
    });

    // === LIGHTBOX LOGIC ===
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(item => {
        item.style.cursor = 'zoom-in';
        item.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = item.src;
            lightboxCaption.textContent = item.alt;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target === lightboxClose) {
                closeLightbox();
            }
        });
    }

    // === HERO SLIDESHOW LOGIC ===
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    const nextSlide = () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    };

    if (slides.length > 0) {
        setInterval(nextSlide, 5000); // Mudar a cada 5 segundos
    }

    // === CHATBOT LOGIC ===
    const chatTriggers = document.querySelectorAll('.chat-trigger');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatBody = document.getElementById('chat-body');

    const toggleChat = () => chatbotWindow.classList.toggle('active');

    const typingIndicator = document.getElementById('typing-indicator');

    const addMessage = (text, sender) => {
        const msg = document.createElement('div');
        msg.className = `chat-message ${sender}`;

        if (sender === 'bot') {
            msg.innerHTML = `<i class="fas fa-robot"></i> ${text}`;
        } else {
            msg.textContent = text;
        }

        // Inserir antes do indicador de escrita
        chatBody.insertBefore(msg, typingIndicator);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const setTyping = (show) => {
        typingIndicator.style.display = show ? 'flex' : 'none';
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const handleBotResponse = (userText) => {
        const text = userText.toLowerCase();
        setTyping(true);

        // Simulando inteligência de IA com atraso variável e respostas contextuais
        setTimeout(() => {
            setTyping(false);

            if (text.includes('menu') || text.includes('comer') || text.includes('pratos') || text.includes('cardapio')) {
                addMessage('Com certeza! Temos uma seleção de pratos moçambicanos contemporâneos. Pode consultar o menu completo no site, nas secções "Especialidades" e "Menu". Recomendo vivamente o nosso Caril de Camarão.', 'bot');
            } else if (text.includes('horario') || text.includes('horas') || text.includes('aberto') || text.includes('fecha')) {
                addMessage('Claro, o nosso horário é: Segunda a Sexta (11h-22h), Sábados (11h-23h) e Domingos (11h-21h). Esperamos por si!', 'bot');
            } else if (text.includes('reserva') || text.includes('reservar') || text.includes('mesa') || text.includes('agendar')) {
                addMessage('Será um prazer recebê-lo! Clique nos botões "Reservar Mesa" no site para conferir a disponibilidade em tempo real. Eu posso ajudar com algo mais?', 'bot');
            } else if (text.includes('ola') || text.includes('oi') || text.includes('bom dia') || text.includes('boa tarde')) {
                addMessage('Olá! Sou a assistente virtual. Analisei o seu interesse e estou aqui para tornar a sua experiência no Gourmet Restaurant perfeita. O que gostaria de saber?', 'bot');
            } else if (text.includes('obrigado') || text.includes('valeu') || text.includes('ajudou')) {
                addMessage('De nada! É um prazer ajudar. Bom apetite e até breve!', 'bot');
            } else {
                addMessage('Ainda estou a processar essa dúvida... Mas posso confirmar que o Gourmet Restaurant oferece a melhor fusão gastronómica de Maputo. Gostaria de saber sobre o nosso menu ou fazer uma reserva?', 'bot');
            }
        }, 1500 + Math.random() * 1000); // Atraso humano de 1.5 a 2.5 segundos
    };

    const sendMessage = (customText) => {
        const text = typeof customText === 'string' ? customText : chatInput.value.trim();
        if (text) {
            addMessage(text, 'user');
            if (typeof customText !== 'string') chatInput.value = '';
            handleBotResponse(text);
        }
    };

    chatTriggers.forEach(trigger => trigger.addEventListener('click', toggleChat));
    if (chatClose) chatClose.addEventListener('click', () => chatbotWindow.classList.remove('active'));
    if (chatSend) chatSend.addEventListener('click', sendMessage);
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // === RESERVATION MODAL LOGIC ===
    const resModal = document.getElementById('reservation-modal');
    const openResButtons = document.querySelectorAll('.open-reservation');
    const closeResModal = document.getElementById('modal-close');
    const resForm = document.getElementById('reservation-form');
    const resFormView = document.getElementById('reservation-form-view');
    const resSuccessView = document.getElementById('reservation-success-view');
    const closeSuccessBtn = document.getElementById('close-success');

    const openModal = () => {
        resModal.classList.add('active');
        resFormView.style.display = 'block';
        resSuccessView.style.display = 'none';
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    };

    const closeModal = () => {
        resModal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    };

    openResButtons.forEach(btn => btn.addEventListener('click', openModal));
    if (closeResModal) closeResModal.addEventListener('click', closeModal);
    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeModal);

    // Fechar ao clicar fora do conteúdo
    window.addEventListener('click', (e) => {
        if (e.target === resModal) closeModal();
    });

    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulação de envio
            resFormView.style.display = 'none';
            resSuccessView.style.display = 'block';
        });
    }

    // === CONSOLE WELCOME MESSAGE ===
    console.log('%c🍽️ Gourmet Restaurant Demo 🍽️', 'color: #C9A961; font-size: 20px; font-weight: bold;');
    console.log('%cSabores Universais & Elegância Atemporal.', 'color: #A68B4A; font-size: 14px;');
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
