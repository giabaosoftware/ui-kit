(() => {
  const header = document.querySelector(".jip-header");
  if (!header) return;

  const menuToggle = header.querySelector(".jip-menu-toggle");
  const nav = header.querySelector(".jip-nav");
  const menuClose = header.querySelector(".jip-menu-close");
  const overlay = document.querySelector(".jip-nav-overlay");
  const navLinks = nav ? nav.querySelectorAll(".nav-link") : [];

  if (!menuToggle || !nav || !menuClose || !overlay) return;

  const desktopQuery = window.matchMedia("(min-width: 1025px)");

  const setOpen = (isOpen) => {
    nav.classList.toggle("is-open", isOpen);
    overlay.classList.toggle("is-active", isOpen);
    overlay.hidden = !isOpen;
    document.body.classList.toggle("jip-nav-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };

  const closeMenu = () => setOpen(false);

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    setOpen(!isOpen);
  });

  menuClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!desktopQuery.matches) {
        closeMenu();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu();
    }
  });

  if ("addEventListener" in desktopQuery) {
    desktopQuery.addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
  } else if ("addListener" in desktopQuery) {
    desktopQuery.addListener((event) => {
      if (event.matches) closeMenu();
    });
  }
})();
