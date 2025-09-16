// ==============================
// Desert Line Ltd. Clone JS
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.getElementById('slides');
  if (!slides) return;
  const total = slides.children.length;
  let idx = 0;

  function show(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
  }

  document.getElementById('next').addEventListener('click', () => {
    idx = (idx + 1) % total;
    show(idx);
  });

  document.getElementById('prev').addEventListener('click', () => {
    idx = (idx - 1 + total) % total;
    show(idx);
  });

  // Auto slide every 6s
  setInterval(() => {
    idx = (idx + 1) % total;
    show(idx);
  }, 6000);

  // Contact form handler (demo)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Message sent (demo). Replace this with real backend integration.');
      form.reset();
    });
  }
});
