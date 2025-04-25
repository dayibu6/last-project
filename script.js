// AOS animations
AOS.init();

// Modal logic
const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close');

contactBtn.addEventListener('click', () => modal.style.display = 'flex');
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

// Form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMsg').textContent = 'Thanks! We’ll get back to you.';
  this.reset();
});
