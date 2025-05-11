import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");
  const navbar = document.getElementById("navbar");
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");

  function closeMobileMenu() {
    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenu.style.maxHeight = "0px";
    hamburgerIcon.classList.add("block");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    closeIcon.classList.remove("block");
  }

  mobileMenuButton.addEventListener("click", () => {
    const isExpanded =
      mobileMenuButton.getAttribute("aria-expanded") === "true" || false;

    if (!isExpanded) {
      mobileMenuButton.setAttribute("aria-expanded", "true");
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
      hamburgerIcon.classList.add("hidden");
      hamburgerIcon.classList.remove("block");
      closeIcon.classList.add("block");
      closeIcon.classList.remove("hidden");
    } else {
      closeMobileMenu();
    }
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(closeMobileMenu, 100);
    });
  });

  let lastScrollTop = 0;
  window.addEventListener(
    "scroll",
    function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.classList.add("shadow-xl");
        navbar.classList.remove("shadow-md");
      } else if (scrollTop <= 50) {
        navbar.classList.add("shadow-md");
        navbar.classList.remove("shadow-xl");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    false,
  );

  const contactBtnDesktop = document.getElementById("contact-btn-desktop");
  if (contactBtnDesktop) {
    contactBtnDesktop.addEventListener("mouseenter", () => {});
    contactBtnDesktop.addEventListener("mouseleave", () => {});
  }
});
