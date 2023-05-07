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




const buyNow = document.querySelector('.buy-now');

window.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    buyNow.classList.add('buy-now--fixed');
  } else {
    buyNow.classList.remove('buy-now--fixed');
  }
});




const scrollToTopButton = document.getElementById('scroll-to-top');

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

// Scroll to the top of the document when the button is clicked
scrollToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
