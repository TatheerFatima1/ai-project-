document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const closeDrawer = document.getElementById('closeDrawer');
    const drawerLinks = document.querySelectorAll('.drawer-links a');

    const toggleDrawer = () => {
        mobileDrawer.classList.toggle('active');
        document.body.style.overflow = mobileDrawer.classList.contains('active') ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', toggleDrawer);
    closeDrawer.addEventListener('click', toggleDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileDrawer.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Form Submission (Simulated)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate network delay
            setTimeout(() => {
                alert('Thank you, Tatheer will get back to you soon!');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Scroll reveal animation (Implicit via Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, observerOptions);

    // Apply reveal to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(section);
    });

    // Add explicit reveal class behavior
    window.addEventListener('scroll', () => {
        document.querySelectorAll('section').forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight * 0.85) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
});
