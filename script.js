// Optional: Add interactivity, like smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer to trigger animations on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden'); // Reveal the section
      observer.unobserve(entry.target); // Stop observing once revealed
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the section is visible
});

// Add 'hidden' class initially
sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
