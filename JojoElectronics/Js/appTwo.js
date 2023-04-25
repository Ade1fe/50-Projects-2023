
const API_KEY  = '34748321-56ec586673804760cca13f7f6';


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


// ----------------------------


let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
let dropdownIsOpen = false

// Handle dropdown menues
if (dropdowns.length) {
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



// -------------------------------------------










   var allSwipper = new Swiper(".allSwipper", {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // =================================
    
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


// Define the addToCartHandler function outside of getApi
function addToCartHandler(event) {
  event.preventDefault();

  let quantity;

  do {
    quantity = prompt('How many items do you want to buy?');

  } while (!Number.isInteger(parseInt(quantity)) || parseInt(quantity) <= 0);

  const productCard = event.target.closest('.image-block');
  const productName = productCard.querySelector('h3').textContent;
  const productImage = productCard.querySelector('img').src;

  if (!productName) {
    console.error('Product name is missing.');
    return;
  }

 const product = {
  id: productCard.dataset.productId,
  name: productName,
  image: productImage,
  quantity: parseInt(quantity),
  price: 10 // set a default price of 10
};


  // retrieve cart from local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || { items: [] };

  // check if the product is already in the cart
  const index = cart.items.findIndex(item => item.name === product.name && item.image === product.image);
  if (index === -1) {
    // product not in cart, add it
    cart.items.push(product);
  } else {
    // product already in cart, update quantity
    cart.items[index].quantity += product.quantity;
  }

  // save updated cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
 alert(`${product.name} added to cart`);

  console.log('Cart:', cart);
  console.log('Product added:', product);
  console.log('Local storage:', localStorage.getItem('cart'));

  // redirect to cart.html
  window.location.href = '../Pages/cart.html';
}


    // ----------------------------------------
    // const NUM_IMAGES = 30;
    const ACCESS_KEY = "34748321-56ec586673804760cca13f7f6";
const NUM_IMAGES = 30;
const swiperWrapper = document.querySelector(".swiper-wrapper");

function getApi(id) {
  const searchTerm = id.toLowerCase();
//   fetch(`https://pixabay.com/api/?key=${ACCESS_KEY}&per_page=${NUM_IMAGES}&category=nature&q=${searchTerm}`)
 fetch(`https://pixabay.com/api/?key=${ACCESS_KEY}&per_page=${NUM_IMAGES}&category&q=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      swiperWrapper.innerHTML = "";
      data.hits.forEach((result) => {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");

        const figure = document.createElement("figure");
        figure.classList.add("image-block");

        const h3 = document.createElement("h3");
        h3.textContent = result.tags;

        const img = document.createElement("img");
        img.src = result.webformatURL;
        img.alt = result.tags;

        const figcaption = document.createElement("figcaption");

        const moreInfoH3 = document.createElement("h3");
        moreInfoH3.textContent = "More Info";
        moreInfoH3.classList.add("myH3");

        const p = document.createElement("p");

        const button = document.createElement("button");
        button.addEventListener('click', addToCartHandler);

        const a = document.createElement("a");
        a.href = result.pageURL;
        a.target = "_blank";
        a.textContent = "Add to cart";
        a.classList.add("add-to-cart");

        button.appendChild(a);
        figcaption.appendChild(moreInfoH3);
        figcaption.appendChild(p);
        figcaption.appendChild(button);
        figure.appendChild(h3);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        swiperSlide.appendChild(figure);
        swiperWrapper.appendChild(swiperSlide);
      });
    })
    .catch((error) => console.log(error));
}


// ---------------------
// coming soon..
document.querySelectorAll('.mm p:first-of-type').forEach((node) => {
  node.addEventListener("click", () => {
    alert('coming soon');
  });
});

const elements = document.querySelectorAll('.come');
elements.forEach(element => {
  element.addEventListener('click', function() {
     alert('coming soon');
  });
});


// onload
const gadgets = document.getElementById("gadgets")


// shop
document.querySelector("#shopAll").addEventListener("click", ()=>{
  
})


// 
const dropdown = document.getElementById('my-dropdown-id');

dropdown.querySelectorAll('li').forEach((li) => {
  const text = li.textContent.trim();
  switch (text) {
    case 'Headphone':
      li.addEventListener('click', () => {
        window.location.href = '../single.html?id=headphone';
      });
      break;
    case 'Video Game':
      li.addEventListener('click', () => {
        window.location.href = '../single.html?id=video-game';
      });
      break;
    case 'Portable Speaker':
      li.addEventListener('click', () => {
        window.location.href = '../single.html?id=portable-speaker';
      });
      break;
    case 'Digital Camera':
      li.addEventListener('click', () => {
        window.location.href = '../single.html?id=digital-camera';
      });
      break;
    case 'Gadget':
      li.addEventListener('click', () => {
        window.location.href = '../single.html?id=gadget';
      });
      break;
    case 'Home Appliance':
      li.addEventListener('click', () => {
        window.location.href = '../single.html?id=home-appliance';
      });
      break;
    case 'Audio Record':
      li.addEventListener('click', () => {
        window.location.href = '../single.html?id=audio-record';
      });
      break;
    case 'Computer/Laptop':
      li.addEventListener('click', () => {
        window.location.href = '../single.html?id=laptop';
      });
      break;
    default:
      break;
  }
});