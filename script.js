let menu = document.getElementById("menu");
let menuDialog = document.getElementById("menuDialog");
let menuClose = document.getElementById("menuClose");

hideMenuDialog();

function hideMenuDialog() {
  menuDialog.style.display = "none";
  menuClose.style.display = "none";
  menu.style.display = "block";
}

function showMenuDialog() {
  menuDialog.style.display = "flex";
  menuDialog.style.transition = "1s";
  menuClose.style.display = "block";
  menu.style.display = "none";
}

menu.addEventListener("click", showMenuDialog);
menuClose.addEventListener("click", hideMenuDialog);
