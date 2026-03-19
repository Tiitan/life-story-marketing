(function () {
  document.querySelectorAll('.js-language-picker').forEach((picker) => {
    const trigger = picker.querySelector('.js-language-trigger');
    trigger?.addEventListener('click', (event) => {
      event.stopPropagation();
      picker.classList.toggle('open');
    });
    picker.addEventListener('click', (event) => event.stopPropagation());
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.js-language-picker.open').forEach((picker) => picker.classList.remove('open'));
  });
})();
