// Smooth scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    if(this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Modal logic for certificate details
const readMoreLinks = document.querySelectorAll('.read-more');
const modals = document.querySelectorAll('.certificate-modal');

readMoreLinks.forEach(link => {
  link.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
    }
  });
});

modals.forEach(modal => {
  // Close when clicking the close button
  modal.querySelector('.certificate-modal-close').addEventListener('click', function() {
    modal.classList.remove('active');
  });
  // Close when clicking outside the modal content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});

// Drawer navigation for mobile/tablet
const hamburgerBtn = document.getElementById('hamburgerBtn');
const drawerNav = document.getElementById('drawerNav');
const drawerOverlay = document.getElementById('drawerOverlay');

if (hamburgerBtn && drawerNav && drawerOverlay) {
  hamburgerBtn.addEventListener('click', () => {
    drawerNav.classList.add('open');
    drawerOverlay.style.display = 'block';
  });
  drawerOverlay.addEventListener('click', () => {
    drawerNav.classList.remove('open');
    drawerOverlay.style.display = 'none';
  });
  drawerNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawerNav.classList.remove('open');
      drawerOverlay.style.display = 'none';
    });
  });
}
