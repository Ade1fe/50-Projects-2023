jQuery(document).ready(function() {
			jQuery('#menu-icon').on('click', function() {
				jQuery('.navbar').toggleClass('expand');
				return false;
			});
		});
// ----------------------------------------------------

        (function(){
      var words = [
          'capable',
          'dynamic'
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 3000);
        
  })();


// ----------------------------  sticky
window.addEventListener("scroll", function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
})


// slideshow

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


// hr
$(document).ready(function() {
    $(".h3").after("<hr>");
});


// scroll effect
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


// jslider
var RangeSlider = (function() {
	var elRangeInputs = document.querySelectorAll(".range");

	function setProgress(elTarget) {
		var elRangeBar = elTarget.parentElement;
		var intThumbWidth = elRangeBar.clientHeight * 3;
		var intRangeBarWidth = elRangeBar.clientWidth - intThumbWidth;
		var intThumbWidthOffset = intThumbWidth / 2;
		
		var intProgressPosition = (elTarget.value - elTarget.min) / (elTarget.max - elTarget.min);
		var intRangePosition = (intRangeBarWidth * intProgressPosition) + intThumbWidthOffset;
		

		elRangeBar.style.background =
			"linear-gradient(to right, #deaaff " +
			intRangePosition + "px, #fff " +
			intRangePosition + "px";
	}

	for (var i = 0; i < elRangeInputs.length; i++) {
		elRangeInputs[i].firstElementChild.addEventListener("input", function() {
			setProgress(this);
		});

		setProgress(elRangeInputs[i].firstElementChild);
	}
})();



// carousel
