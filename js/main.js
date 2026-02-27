// ============================================================
// L&M AUTOMOTIVE PERFORMANCE — MAIN JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------
    // HAMBURGER MENU
    // ----------------------------------------------------------
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close on nav link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // ----------------------------------------------------------
    // NAVBAR SCROLL EFFECT
    // ----------------------------------------------------------
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const onScroll = () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ----------------------------------------------------------
    // ACTIVE NAV LINK
    // ----------------------------------------------------------
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link:not(.btn-nav)').forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });

    // ----------------------------------------------------------
    // SCROLL ANIMATIONS (Intersection Observer)
    // ----------------------------------------------------------
    const animateEls = document.querySelectorAll('.animate');
    if (animateEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        animateEls.forEach(el => observer.observe(el));
    }

    // ----------------------------------------------------------
    // CONTACT FORM — Prevent default & show confirmation
    // ----------------------------------------------------------
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn   = form.querySelector('button[type="submit"]');
            const orig  = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.background = '#1a7a1a';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = orig;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3500);
        });
    }

});
