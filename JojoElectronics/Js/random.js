const elements = document.querySelectorAll('.come');
elements.forEach(element => {
  element.addEventListener('click', function() {
     alert('coming soon');
  });
});