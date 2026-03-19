(function () {
  document.querySelectorAll('.js-faq-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      button.parentElement?.classList.toggle('closed');
    });
  });
})();
