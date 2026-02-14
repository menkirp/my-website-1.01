// Shared helpers
(function(){
  // Year
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = year);

  // Placeholder alerts for buttons you will wire later
  document.querySelectorAll('[data-placeholder-alert]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert(btn.getAttribute('data-placeholder-alert') || 'Replace with your link / integration.');
    });
  });
})();