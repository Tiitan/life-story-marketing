(function () {
  const header = document.getElementById('header');
  const menuButton = document.getElementById('headerMenuButton');
  const menuBackdrop = document.getElementById('headerDrawerBackdrop');
  const menuWrapper = document.querySelector('#header .headerMenu__wrapper');

  const syncDrawer = () => {
    if (!header) return;
    if (window.innerWidth < 1140) {
      header.classList.add('header--withDrawer');
    } else {
      header.classList.remove('header--withDrawer');
      header.classList.remove('header--drawerOpen');
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  };

  const toggleDrawer = () => {
    if (!header) return;
    const isOpen = header.classList.toggle('header--drawerOpen');
    menuButton?.setAttribute('aria-expanded', String(isOpen));
  };

  menuButton?.addEventListener('click', toggleDrawer);
  menuBackdrop?.addEventListener('click', toggleDrawer);
  menuWrapper?.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) {
      toggleDrawer();
    }
  });

  window.addEventListener('resize', syncDrawer);
  syncDrawer();
})();
