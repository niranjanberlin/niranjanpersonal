// Auto-update year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll animation for cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 1s ease forwards";
    }
  });
});
cards.forEach(card => observer.observe(card));
