const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("expand");
});


hamBurger.addEventListener("click", function () {
  document.querySelector(".sidebar-col").classList.toggle("shrink");
});