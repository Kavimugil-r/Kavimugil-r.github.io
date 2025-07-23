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

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just log it and show an alert
    console.log({ name, email, subject, message });
    
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
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