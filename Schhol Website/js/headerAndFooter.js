const menuIcon = document.querySelector(".menu-icon");
const cancelIcon = document.querySelector(".cancel-icon");
const menuItems = document.querySelector("header ul");

menuIcon.addEventListener("click", () => {
  menuItems.classList.add("show");
  menuIcon.style.display = "none";
  cancelIcon.style.display = "block";
});

cancelIcon.addEventListener("click", () => {
  menuItems.classList.remove("show");
  menuIcon.style.display = "block";
  cancelIcon.style.display = "none";
});