// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    // Build a WhatsApp message
    let text = `Hello Colsystems Tech,%0A%0A`;
    text += `Name: ${name}%0A`;
    text += `Phone: ${phone}%0A`;
    if (service) text += `Service needed: ${service}%0A`;
    if (message) text += `Message: ${message}%0A`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/254743363625?text=${text}`;
    window.open(whatsappUrl, '_blank');

    // Optional: show a quick confirmation
    alert('Opening WhatsApp... You can send the message directly to us.');
  });
}

// Smooth highlight for active nav on scroll (simple version)
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.style.color = 'var(--primary-light)';
    } else {
      item.style.color = '';
    }
  });
});
