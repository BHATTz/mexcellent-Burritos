document.addEventListener("DOMContentLoaded", function () {
  const mobileNav = document.getElementById("mobile-nav");
  const menuItems = document.querySelectorAll(".menu-item-has-children > a");
  const closeBtn = document.getElementById("res-cross");

  // Toggle sub-menus
  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = item.parentElement;
      parent.classList.toggle("active");
      const subMenu = parent.querySelector(".sub-menu");
      if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
      } else {
        subMenu.style.display = "block";
      }
    });
  });

  // Close button functionality
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    mobileNav.style.display = "none";
  });

  // Open mobile menu (for demo purposes, usually triggered by a button click)
  document
    .querySelector(".hamburger-menu")
    .addEventListener("click", function () {
      mobileNav.style.display = "block";
    });
});
