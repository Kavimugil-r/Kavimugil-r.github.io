// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Form submission handling for Formspree
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
      const response = await fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Success message
        formStatus.style.display = 'block';
        formStatus.innerHTML = `
          <div class="alert success">
            <i class="fas fa-check-circle"></i>
            Message sent successfully! I'll get back to you soon.
          </div>
        `;
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Error message
      formStatus.style.display = 'block';
      formStatus.innerHTML = `
        <div class="alert error">
          <i class="fas fa-exclamation-circle"></i>
          Oops! There was a problem sending your message. Please try again later.
        </div>
      `;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      
      // Hide status message after 5 seconds
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 5000);
    }
  });
}
// Mobile menu toggle (can be added later)
// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('nav ul');
// 
// menuToggle.addEventListener('click', () => {
//   nav.classList.toggle('active');
// });

// Active link highlighting based on scroll position
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
    } else {
      document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
    }
  });
});