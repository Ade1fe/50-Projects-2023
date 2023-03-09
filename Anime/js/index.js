

// tablinks

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}



const movies = 'https://api.jikan.moe/v4/top/anime?limit=14&type=movie';
const series = 'https://api.jikan.moe/v4/top/anime?limit=14&type=tv';

const newSeason = 'https://api.jikan.moe/v4/seasons/now';
let animeContainer;

// url is a params passed when the function is called.
const getAnimies = async (url) => {
	// await API response
	const res = await fetch(url);
	// await and stream to JSON
	const result = await res.json();
	// only if the result is available
	if (result) {
		// ternary return statement to get the container to push the result to
		// if it is movies push it to movies section else push to tv section.
		const d = url.endsWith('movie') ? true : false;
		animeContainer = url.endsWith('movie')
			? document.getElementById('anime__movies')
			: document.getElementById('new__season');

		// style the containers or add a class
		// I just set a background color for testing purpose
		// animeContainer.style.background = 'blue';

		//loop through the data and populate the HTML content
		loopResult(result, animeContainer);
	}
};

// working with filter
const listItems = document.querySelectorAll('.tab-link');
for (let index = 0; index < listItems.length; index++) {
	const value = listItems[index];
	value.addEventListener('click', (e) => {
		listItems.forEach((items) => {
			items.classList = 'tab-link';
		});
		value.classList = 'tab-link active-link';
		handleFilter(value.innerText.toLowerCase());
	});
}

const handleFilter = (value) => {
	const filterSection = document.getElementById('anime__movies');

	if (value.includes('recent')) {
		filterData('airing', filterSection);
	} else if (value.includes('trending')) {
		filterData('bypopularity', filterSection);
	} else if (value.includes('most')) {
		filterData('favorite', filterSection);
	} else if (value.includes('rated')) {
		filterData('upcoming', filterSection);
	}
};

const loopResult = (result, container) => {
	container.innerHTML = null;
	result.data.forEach((anime) => {
		const card = document.createElement('div');
		card.id = 'cards';
		card.className = 'cards';
		// card.style.maxWidth = '250px';
		const img = document.createElement('img');
		img.src = anime.images.webp.large_image_url;
		img.alt = anime.title;
		img.className = 'cards-img-top';
		const imageLink = document.createElement('a');
		imageLink.href = 'single.html?id=' + anime.mal_id;
		imageLink.appendChild(img);
		card.appendChild(imageLink);
		card.innerHTML += `
			<div class='cards-body'>
			<a href= single.html?id=${anime.mal_id}>
			<h5 class='cards-title'>${
				anime.title.length > 40
					? (smallTitle = anime.title.substring(0, 40) + '...')
					: anime.title
			}</h5>
			</a>
				
				<p class='cards-episodes'>${anime.episodes ? anime.episodes : ''} Episode</p>
			</div>
`;
		container.appendChild(card);
	});
};

const filterData = async (filterValue, container) => {
	const res = await fetch(
		`https://api.jikan.moe/v4/top/anime?type=tv&filter=${filterValue}`
	);
	// await and stream to JSON
	const result = await res.json();
	// only if the result is available
	if (result) {
		loopResult(result, container);
	}
};

// Carousel
const airing = 'https://api.jikan.moe/v4/seasons/now';
const carouselItems = document.querySelector('.carousel-wrapper-items');
const carouselPrev = document.querySelector('.prev-btn');
const carouselNext = document.querySelector('.next-btn');

let currentPosition = 0;

const recentAnime = async (url) => {
	// await API response
	const res = await fetch(url);
	// await and stream to JSON
	const result = await res.json();
	// only if the result is available
	if (result) {
		//loop through the data and populate the HTML content
		loopResult(result, carouselItems);
	}
};

carouselPrev.addEventListener('click', () => {
	const itemWidth = carouselItems.querySelector('.cards').offsetWidth;
	currentPosition = Math.max(currentPosition - itemWidth * 4, 0);
	carouselItems.style.transform = `translateX(-${currentPosition}px)`;
});

carouselNext.addEventListener('click', () => {
	const itemWidth = carouselItems.querySelector('.cards').offsetWidth;
	currentPosition = Math.min(
		currentPosition + itemWidth * 4,
		itemWidth * (carouselItems.children.length - 4)
	);
	carouselItems.style.transform = `translateX(-${currentPosition}px)`;
});

// function calls on initial render
recentAnime(airing);
getAnimies(movies);
getAnimies(newSeason);
// fetchAnimeNews();

// Main Carousel
document.addEventListener('DOMContentLoaded', async () => {
	const carouselInner = document.querySelector('.carousel-inner');
	const res = await fetch(
		'https://api.jikan.moe/v4/top/anime?limit=14&type=special&limit=10'
	);
	const { data } = await res.json();
	// return items with youtube_id only
	const d = data.filter((item) => item.trailer.youtube_id != null);
	// select the first 3
	const result = d.slice(0, 3);

	result.forEach((item) => {
		// const video = `<iframe src="https://www.youtube.com/embed/${item.trailer.youtube_id}" frameborder="0"></iframe>`;
		const imgFile = `<img src="${item.images.webp.large_image_url}" alt="" />`;
		const carouselItemContainer = document.createElement('div');
		carouselItemContainer.classList = 'carousel-item';
		const carouselItem = `
      <div class='carousel__img'>
        <img src="${item.images.webp.large_image_url}" alt="" />
      </div>

      <div class='carousel-caption bg-light'>
        <h3 class='mb-2'>${item.title}</h3>
        <h6 class='mb-2'>${
			item.synopsis.length > 20
				? (smallTitle = item.synopsis.substring(0, 20) + '...')
				: item.synopsis
		}</h6>
        <p class='mb-2'>${item.rating}</p>
        <div class='myConny'>
            <a href=${item.trailer.url} id='watch'>watch now</a>
            <a href= single.html?id=${item.mal_id}>more details</a>
        </div>
      </div>
    `;

		carouselItemContainer.innerHTML = carouselItem;

		carouselInner.appendChild(carouselItemContainer);
		if (carouselInner.children.length > 1) {
			carouselInner.firstElementChild.classList = 'carousel-item active';
		}
	});
});

// notification

$(document).ready(() => {
	$('.carl').hide();

	$('#note').click(() => {
		$('.carl').toggle();
	});
});

// search


$(document).ready(() => {
  const $searchResult = $('.search__result');

  $searchResult.hide();

  $('.form-control').on('focus', () => {
    $searchResult.show();
  }).on('blur', () => {
    $searchResult.hide();
  }).on('input', () => {
    searchFunction();
  });
});


const searchFunction = () => {
  const input = document.querySelector('input[type="search"]');
  const resultContainer = document.querySelector('.search__result');
  const form = document.getElementById("form");

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputValue = input.value;
    if (inputValue.length >= 3) {
      try {
        let res = await fetch(`https://api.jikan.moe/v4/anime?q=${inputValue}&limit=5`);
        res = await res.json();
        resultContainer.innerHTML = '';
        res.data.slice(0, 5).forEach((data) => {
          const searchCard = `
            <div class="search__item">
              <div class="search__item-img">
                <img src=${data.images.webp.large_image_url} alt=${data.title}/>
              </div>
             <a href=../pages/single.html?id=${data.mal_id} class="search__item-title"> ${data.title} </a>
            </div>
          `;
          resultContainer.innerHTML += searchCard; 
        });
      } catch (error) {}
    }
  });
};




const formInput = document.querySelector('input[type="search"]');
formInput.addEventListener('keyup', () => {
	const inputText = formInput.value;
	if (inputText=='') {
		const resultContainer = document.querySelector('.search__result');
		resultContainer.innerHTML = null;
	}
});



// navbar

let navbar = document.getElementById('nav-section');
let navOffset = navbar.offsetTop;
window.addEventListener('scroll', () => {
	window.scrollY >= navOffset
		? navbar.classList.add('fixed-nav')
		: navbar.classList.remove('fixed-nav');
});
