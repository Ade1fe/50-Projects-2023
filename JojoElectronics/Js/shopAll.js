const ACCESS_KEY = 'xB1rkBMOjRntTPMKnWRVFUDPZlJ1vbvfqcPUVBdxZ_8';
function getApi(id){
  

  // Replace "electronics" with the search term you want to use
  const searchTerm = id;

  fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${ACCESS_KEY}&per_page=20&w=360`)
    .then(response => response.json())
    .then(data => {
      // Loop through the results and create a card for each image
  const container = document.querySelector('.swiper-wrapper');
container.innerHTML = ''; // clear the previous content

// create an empty cart object
const cart = {
  items: []
};

// event listener for "Add to Cart" button
function addToCartHandler(event) {
  event.preventDefault();
  
  let quantity;
  
  do {
    quantity = prompt('How many items do you want to buy?');
  } while (!Number.isInteger(parseInt(quantity)) || parseInt(quantity) <= 0);

  const productCard = event.target.closest('.card');
  const product = {
    id: productCard.dataset.productId,
    name: productCard.querySelector('h5').textContent,
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
  window.location.href = 'cart.html';
}




data.results.forEach(result => {
  const altDescription = result.alt_description ? result.alt_description.substring(0, 15) : '';
  const description = result.description ? result.description.substring(0, 15) : '';

  const card = `
    <div class="swiper-slide">
      <div class="card" data-product-id="${result.id}" data-price="10.00">
        <div class="imgImg">
          <img src="${result.urls.regular}" alt="${result.alt_description}">
        </div>
        <h5>${altDescription}</h5>
        <p>${description}</p>
        <a href="${result.links.html}" target="_blank" class="add-to-cart">Add to Cart</a>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', card);
});

// attach event listener to "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.add-to-cart');
// when the user clicks on the addToCartButtons it should prompt them for how many items they want to buy
addToCartButtons.forEach(button => {
button.addEventListener('click', addToCartHandler);
});

    })
    .catch(error => console.error(error));
}


getApi("Phones");




//  var swiper = new Swiper(".mySwiper", {
//       slidesPerView: 3,
//       grid: {
//         rows: 2,
//       },
//       spaceBetween: 30,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });


 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4.15,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3.13,
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3.12,
      grid: {
        rows: 2,
      },
      spaceBetween: 15,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2.15,
      grid: {
        rows: 2,
      },
      spaceBetween: 10,
    },
    // when window width is < 576px
    0: {
      slidesPerView: 1.35,
      grid: {
        rows: 2,
      },
      spaceBetween: 5,
    },
  },
});

