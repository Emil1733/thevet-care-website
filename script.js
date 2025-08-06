// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const hamburgers = navToggle.querySelectorAll('.hamburger');
        hamburgers.forEach((line, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) line.style.opacity = '0';
                if (index === 2) line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                line.style.transform = 'none';
                line.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            
            // Reset hamburger
            const hamburgers = navToggle.querySelectorAll('.hamburger');
            hamburgers.forEach(line => {
                line.style.transform = 'none';
                line.style.opacity = '1';
            });
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            
            // Reset hamburger
            const hamburgers = navToggle.querySelectorAll('.hamburger');
            hamburgers.forEach(line => {
                line.style.transform = 'none';
                line.style.opacity = '1';
            });
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Background on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .review-card, .feature, .section-header');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('.faq-answer');
        
        // Add click cursor and initial state
        question.style.cursor = 'pointer';
        question.style.position = 'relative';
        
        // Add plus/minus indicator
        const indicator = document.createElement('span');
        indicator.innerHTML = '+';
        indicator.style.cssText = `
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 24px;
            font-weight: bold;
            color: #4f46e5;
            transition: all 0.3s ease;
            pointer-events: none;
        `;
        question.appendChild(indicator);
        
        // Initially hide all answers with smooth transition
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
        answer.style.opacity = '0';
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIndicator = otherItem.querySelector('h3 span');
                
                otherItem.classList.remove('active');
                otherAnswer.style.maxHeight = '0';
                otherAnswer.style.opacity = '0';
                if (otherIndicator) {
                    otherIndicator.innerHTML = '+';
                    otherIndicator.style.transform = 'translateY(-50%) rotate(0deg)';
                }
            });
            
            // If this item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
                indicator.innerHTML = '−';
                indicator.style.transform = 'translateY(-50%) rotate(180deg)';
            }
        });
        
        // Add hover effect
        question.addEventListener('mouseenter', function() {
            question.style.backgroundColor = 'rgba(79, 70, 229, 0.05)';
            question.style.padding = '20px';
            question.style.margin = '-10px';
            question.style.borderRadius = '8px';
        });
        
        question.addEventListener('mouseleave', function() {
            question.style.backgroundColor = '';
            question.style.padding = '';
            question.style.margin = '';
            question.style.borderRadius = '';
        });
    });
});

// Form Handling
document.getElementById('vetFinderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    const requiredFields = ['petType', 'location', 'serviceType', 'urgency'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!data[field] || data[field].trim() === '') {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = '#e5e7eb';
        }
    });
    
    // Phone validation (optional field)
    const phoneInput = document.getElementById('phone');
    if (data.phone && data.phone.trim() !== '') {
        const phoneRegex = /^[\+]?[1-9]?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
            phoneInput.style.borderColor = '#ef4444';
            isValid = false;
        }
    }
    
    if (isValid) {
        // Show success message
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Booking Submitted!';
        button.style.backgroundColor = '#10b981';
        button.disabled = true;
        
        // Reset form after 3 seconds
        setTimeout(() => {
            this.reset();
            button.textContent = originalText;
            button.style.backgroundColor = '';
            button.disabled = false;
            
            // Show thank you message
            alert('Thank you! We\'ll contact you within 24 hours to confirm your appointment.');
        }, 2000);
        
        // In a real application, you would send the data to your server here
        console.log('Vet finder form data:', data);
    } else {
        // Show error message
        const firstInvalidField = this.querySelector('input[style*="border-color: rgb(239, 68, 68)"]');
        if (firstInvalidField) {
            firstInvalidField.focus();
            firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// Phone number formatting (optional field)
const phoneField = document.getElementById('phone');
if (phoneField) {
    phoneField.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';
        
        if (value.length > 0) {
            if (value.length <= 3) {
                formattedValue = `(${value}`;
            } else if (value.length <= 6) {
                formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }
        
        e.target.value = formattedValue;
    });
}

// Add loading state for external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function() {
        this.style.opacity = '0.7';
        this.style.pointerEvents = 'none';
        
        setTimeout(() => {
            this.style.opacity = '1';
            this.style.pointerEvents = 'auto';
        }, 1000);
    });
});

// Lazy loading for images (if not using native lazy loading)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Preload critical resources
function preloadResource(url, type = 'image') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = type;
    document.head.appendChild(link);
}

// Performance monitoring (Core Web Vitals)
function measureWebVitals() {
    if ('PerformanceObserver' in window) {
        // Measure LCP (Largest Contentful Paint)
        new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure FID (First Input Delay)
        new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                console.log('FID:', entry.processingStart - entry.startTime);
            });
        }).observe({ entryTypes: ['first-input'] });

        // Measure CLS (Cumulative Layout Shift)
        let clsValue = 0;
        new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            });
            console.log('CLS:', clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
    }
}

// Initialize performance monitoring in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    measureWebVitals();
}

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}