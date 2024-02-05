/* document.getElementById("nav_menu__ul").onclick = function() {
    document.getElementById("nav_menu__ul").classList.add("menu__btn-2");
  }
document.getElementById("menu__btn-1").onclick = function() {
    document.getElementById("menu__btn-1").classList.toggle("menu__btn-2");
  }

 */

  const menuBtn = document.querySelector(".menu__btn");
  const menuMobile = document.querySelector(".nav_menu__ul");

  menuBtn.onclick = function() {
    menuMobile.classList.add("menu__open");
  }
  menuBtn.onclick = function() {
    menuMobile.classList.toggle("menu__open");
  }

