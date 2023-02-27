  let navbar = document.getElementById("nav-section");
  let navOffset = navbar.offsetTop;
  window.addEventListener("scroll", () => {
    (window.scrollY >= navOffset) ? navbar.classList.add("fixed-nav") : navbar.classList.remove("fixed-nav")
  });

  
    $(document).ready(() => {
  $(".carl").hide();

  $("#note").click(() => {
    $(".carl").toggle();
  });
});