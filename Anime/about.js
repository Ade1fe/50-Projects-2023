const fixedDiv = document.querySelector('.fixed');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    fixedDiv.style.position = 'fixed';
  } else {
    fixedDiv.style.position = 'static';
  }
  
  prevScrollPos = currentScrollPos;
});
