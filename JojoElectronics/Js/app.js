

const ACCESS_KEY = 'xB1rkBMOjRntTPMKnWRVFUDPZlJ1vbvfqcPUVBdxZ_8';
let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
let dropdownIsOpen = false

// Handle dropdown menues
if (dropdowns.length) {
  // Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
  // Instead use event delegation: https://javascript.info/event-delegation
  // Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
  // But since we only have two dropdowns, no problem with that. 
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
      let target = document.querySelector(`#${event.target.dataset.dropdown}`)

      if (target) {
        if (target.classList.contains('show')) {
          target.classList.remove('show')
          dropdownIsOpen = false
        } else {
          target.classList.add('show')
          dropdownIsOpen = true
        }
      }
    })
  })
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('mouseup', (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`)
      let targetIsDropdown = dropdown == event.target

      if (dropdownButton == event.target) {
        return
      }

      if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
        dropdown.classList.remove('show')
      }
    })
  }
})

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector('.navbar-toggler')
    .addEventListener('click', () => {
      let navbarMenu = document.querySelector('.navbar-menu')

      if (!navbarMenu.classList.contains('active')) {
        navbarMenu.classList.add('active')
      } else {
        navbarMenu.classList.remove('active')
      }
    })
}

handleSmallScreens()



// search
$(".headerOne").hide();
    const search = document.getElementById("search");
    search.addEventListener("click", ()=>{
        $(".headerOne").toggle();
    })


// main-carousel
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//tab links
// Get the tab titles
const tabTitles = document.querySelectorAll('.tab-titles .tab-link');

// Add event listeners to each tab title
tabTitles.forEach(title => {
  title.addEventListener('click', function() {
    // Remove the 'active' class from all tab titles
    tabTitles.forEach(title => {
      title.classList.remove('active');
    });

    // Add the 'active' class to the clicked tab title
    this.classList.add('active');

    // Get the ID of the clicked tab title
    const id = this.id;

    // Call the getApi function with the appropriate search term
    getApi(id);
  });
});



function getApi(id){
  

  // Replace "electronics" with the search term you want to use
  const searchTerm = id;

  fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${ACCESS_KEY}&per_page=20&w=360`)
    .then(response => response.json())
    .then(data => {
      // Loop through the results and create a card for each image
      const container = document.querySelector('#allContainer');
      container.innerHTML = ''; // clear the previous content
      data.results.forEach(result => {
        const card = `
          <figure class="image-block">
            <h3>${result.alt_description}</h3>
            <img src="${result.urls.small}" alt="${result.alt_description}" />
            <figcaption>
              <h3>
		          	More Info
		          </h3>
              <p>
                ${result.description || 'No description available'}
              </p>
              <button>
                <a href="${result.links.html}" target="_blank">Add to cart</a>
              </button>
            </figcaption>
          </figure>
        `;
        container.insertAdjacentHTML('beforeend', card);
      });
    })
    .catch(error => console.error(error));
}




// onload

const searchTerm = "Home Appliances";

function displayImages() {
  fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${ACCESS_KEY}&per_page=6&w=360`)
    .then(response => response.json())
    .then(data => {

      function addToCartHandler(event) {
  event.preventDefault();
  
  let quantity;
  
  do {
    quantity = prompt('How many items do you want to buy?');
  } while (!Number.isInteger(parseInt(quantity)) || parseInt(quantity) <= 0);

  const productCard = event.target.closest('.cardo');
  const product = {
    id: productCard.dataset.productId,
    name: productCard.querySelector('.tits').textContent,
    price: productCard.dataset.price,
    image: productCard.querySelector('img').src,
    quantity: parseInt(quantity) // convert quantity to a number
  };
  
  // retrieve cart from local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || { items: [] };
  
  // check if the product is already in the cart
  const index = cart.items.findIndex(item => item.id === product.id);
  if (index === -1) {
    // product not in cart, add it
    cart.items.push(product);
  } else {
    // product already in cart, update quantity
    cart.items[index].quantity += product.quantity;
  }
  
  // save updated cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));

  // redirect to cart.html
  window.location.href = './Pages/cart.html';
}
      // Loop through the results and create a card for each image
      const container = document.querySelector('.swiper-wrapper');
      container.innerHTML = ''; // clear the previous content
      data.results.forEach(result => {
        const card = document.createElement('div');
        card.classList.add('swiper-slide');

        const cardContent = `
          <div class="cardo">
            <div class="hrs">
              <p class="hours"></p>
              <p class="mins"></p>
              <p class="sec"></p>
            </div>
            <div class="cardImgo">
              <img src="${result.urls.regular}" data-price="10.00" alt="">
            </div>
            <div class="cardtext">
              <p class="tits">${result.alt_description}</p>
             <p class="add-to-cart"><i class="bi bi-cart-check-fill"></i></p>
              <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>  <i class="bi bi-star-half"></i>
            </div>
          </div>
        `;

        card.innerHTML = cardContent;
        container.appendChild(card);

        const addToCartButtons = document.querySelectorAll('.add-to-cart');
// when the user clicks on the addToCartButtons it should prompt them for how many items they want to buy
addToCartButtons.forEach(button => {
button.addEventListener('click', addToCartHandler);
});
        // Countdown timer
        const hours = card.querySelector('.hours');
        const minutes = card.querySelector('.mins');
        const seconds = card.querySelector('.sec');

        const countDownDate = new Date().getTime() + 1000 * 60 * 60 * 24; // Set the countdown to 24 hours from now

        const updateTimer = setInterval(() => {
          const now = new Date().getTime();
          const distance = countDownDate - now;
          const hoursLeft = Math.floor(distance / (1000 * 60 * 60));
          const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

          hours.innerText = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
          minutes.innerText = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
          seconds.innerText = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

          if (distance < 0) {
            clearInterval(updateTimer);
            hours.innerText = '00';
            minutes.innerText = '00';
            seconds.innerText = '00';
          }
        }, 1000);
      });
    });
}


  // window.addEventListener('load', displayImages);
  $( document ).ready(function() { 
    const all = document.getElementById("gadgets")
    //  getApi(all);
     displayImages();
    // countdownTimeStart();
});


// CARD SWIPER
// CARD SWIPER
var mySwiper = new Swiper('.mySwiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  direction: 'horizontal',
  loop: true,

  // Navigation buttons
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
   breakpoints: {
        // when window width is >= 200px (for mobile screens)
        200: {
            slidesPerView: 1.25,
            spaceBetween: 20
        },
        // when window width is >= 340px (for mobile screens)
        300: {
            slidesPerView: 1.25,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        350: {
            slidesPerView: 1.25,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        450: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 576px (for mobile screens)
        570: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 200px (for mobile screens)
        700: {
           slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 992px (for large screens)
        992: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        1023: {
            slidesPerView: 3.75,
            spaceBetween: 30
        }
  }
});















// clicent
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        loop:true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});




// coming soon..
document.querySelectorAll('.mm p:first-of-type').forEach((node) => {
  node.addEventListener("click", () => {
    alert('coming soon');
  });
});




// shop
document.querySelector("#shopAll").addEventListener("click", ()=>{
  
})