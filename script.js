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
    
    // Scroll animations - reveal sections as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate timeline items
                if (entry.target.id === 'experience') {
                    const timelineItems = entry.target.querySelectorAll('.timeline-item');
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, index * 200);
                    });
                }
                
                // Animate skills
                if (entry.target.id === 'skills') {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach((bar, index) => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width;
                        }, index * 100 + 300);
                    });
                }
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
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
    
    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop - 70;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
    
    // Add hover effects to timeline items
    document.querySelectorAll('.timeline-content').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderColor = '#3498db';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
        });
    });
    
    // Initialize sections as visible by default
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
    
    // Add scroll-to-top functionality when scrolling down
    let scrollToTopBtn = null;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Show/hide scroll-to-top button
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
                
                scrollToTopBtn.addEventListener('mouseenter', function() {
                    this.style.background = '#2980b9';
                    this.style.transform = 'translateY(-2px)';
                });
                
                scrollToTopBtn.addEventListener('mouseleave', function() {
                    this.style.background = '#3498db';
                    this.style.transform = 'translateY(0)';
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