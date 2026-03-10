// 1. Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        const icon = menuToggle.querySelector('i');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // 2. Progress Bar Animation on Scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    bar.style.width = bar.getAttribute('data-width');
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.progress-fill').forEach(fill => observer.observe(fill));

        // 3. Form Validation
        const form = document.getElementById('regForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;

            const fields = [
                { id: 'username', err: 'userError', cond: (v) => v.length > 0 },
                { id: 'email', err: 'emailError', cond: (v) => v.includes('@') },
                { id: 'password', err: 'passError', cond: (v) => v.length >= 6 }
            ];

            fields.forEach(f => {
                const input = document.getElementById(f.id);
                const msg = document.getElementById(f.err);
                if (!f.cond(input.value.trim())) {
                    msg.style.display = 'block';
                    input.style.borderColor = 'red';
                    valid = false;
                } else {
                    msg.style.display = 'none';
                    input.style.borderColor = '#ddd';
                }
            });

            if (valid) {
                alert('Success! Welcome to Medilo.');
                form.reset();
            }
        });
        document.addEventListener("DOMContentLoaded", () => {
  const teamItems = document.querySelectorAll('.team-item');

  const observerOptions = {
    threshold: 0.2, // Trigger when 20% of the item is visible
    rootMargin: "0px 0px -50px 0px" // Slight offset so it feels more natural
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the class that triggers the CSS transition
        entry.target.classList.add('animate-in');
        // Stop observing once the animation has played
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  teamItems.forEach(item => {
    observer.observe(item);
  });
});
