// function toggleOpen() {
//   const menu = document.querySelector(".ham-menu");
//   menu.style.left = 0;
// }
// function toggleClose() {
//   const menu = document.querySelector(".ham-menu");
//   menu.style.left = "-100%";
// }
function toggleOpen() {
  const menu = document.querySelector(".ham-menu");
  if (menu.style.left === "-100%") {
    menu.style.left = 0;
  } else {
    menu.style.left = "-100%";
  }
}
function toggleNav() {
  const menu = document.querySelector(".ham-menu");
  menu.style.left = "-100%";
}
