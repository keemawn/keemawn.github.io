// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation smooth scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, #home');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Mobile navigation functionality
    const mobileNavBtns = document.querySelectorAll('.mobile-nav-btn');
    
    mobileNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));
            const offsetTop = target.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Update active mobile button
            mobileNavBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Initialize sections as hidden for scroll animations (except hero)
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'all 0.8s ease';
        }
    });
    
    // Initialize timeline items for animations
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transition = 'all 0.8s ease';
        if (item.matches(':nth-child(odd)')) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
    });
    
    // Initialize skill bars for animations
    document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.style.width = '0';
        bar.style.transition = 'width 1.5s ease';
    });
    
    // Initialize project cards for animations
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    // Initialize education cards for animations  
    document.querySelectorAll('.education-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    // Initialize stat items for animations
    document.querySelectorAll('.stat-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = 'all 0.6s ease';
    });
    
    // Scroll animations - reveal sections as they come into view
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in the section first
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('visible');
                
                // Then animate specific elements within sections
                setTimeout(() => {
                    // Animate timeline items (Experience section)
                    if (entry.target.id === 'experience') {
                        const timelineItems = entry.target.querySelectorAll('.timeline-item');
                        timelineItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateX(0)';
                            }, index * 400 + 300);
                        });
                    }
                    
                    // Animate skill bars (Skills section)
                    if (entry.target.id === 'skills') {
                        const skillBars = entry.target.querySelectorAll('.skill-progress');
                        skillBars.forEach((bar, index) => {
                            const width = bar.getAttribute('data-width');
                            setTimeout(() => {
                                bar.style.width = width;
                            }, index * 100 + 500);
                        });
                    }
                    
                    // Animate project cards (Projects section)
                    if (entry.target.id === 'projects') {
                        const projectCards = entry.target.querySelectorAll('.project-card');
                        projectCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, index * 200 + 300);
                        });
                    }
                    
                    // Animate education cards (Education section)
                    if (entry.target.id === 'education') {
                        const educationCards = entry.target.querySelectorAll('.education-card');
                        educationCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, index * 150 + 300);
                        });
                    }
                    
                    // Animate stat items (About section)
                    if (entry.target.id === 'about') {
                        const statItems = entry.target.querySelectorAll('.stat-item');
                        statItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, index * 150 + 500);
                        });
                    }
                }, 200); // Small delay after section fade-in
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Active navigation based on scroll position
    window.addEventListener('scroll', function() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update active navigation link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
        
        // Update active mobile navigation button
        mobileNavBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-target') === '#' + currentSection) {
                btn.classList.add('active');
            }
        });
        
        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch('https://formspree.io/f/xblkzoyw', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert('Thank you! Your message has been sent.');
                    contactForm.reset();
                } else {
                    alert('Oops! There was a problem sending your message.');
                }
            } catch (error) {
                alert('Oops! There was a problem sending your message.');
            }
        });
    }
    
    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offsetTop = target.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    }
    
    // Add scroll-to-top functionality
    let scrollToTopBtn = null;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 500) {
            if (!scrollToTopBtn) {
                scrollToTopBtn = document.createElement('button');
                scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
                scrollToTopBtn.className = 'scroll-to-top';
                scrollToTopBtn.style.cssText = `
                    position: fixed;
                    bottom: 80px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                    background: #3498db;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    z-index: 999;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                `;
                
                scrollToTopBtn.addEventListener('click', function() {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
                
                document.body.appendChild(scrollToTopBtn);
            }
        } else {
            if (scrollToTopBtn) {
                scrollToTopBtn.remove();
                scrollToTopBtn = null;
            }
        }
    });
});
