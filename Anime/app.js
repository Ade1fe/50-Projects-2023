  let navbar = document.getElementById("nav-section");
  let navOffset = navbar.offsetTop;
  window.addEventListener("scroll", () => {
    (window.scrollY >= navOffset) ? navbar.classList.add("fixed-nav") : navbar.classList.remove("fixed-nav")
  });


  // notification Bar
  
    $(document).ready(() => {
  $(".carl").hide();

  $("#note").click(() => {
    $(".carl").toggle();
  });
});




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


// -----------------------------------------------------------
const userCardTemplate = document.querySelector("#myContain");

fetch('https://api.jikan.moe/v4/top/anime')
    .then((res) => res.json())
    .then((response) =>{
        console.log(response)
      
        if (response && response.length) {
            response.forEach(data => {
                console.log(data)
                const mycontain = document.createElement("div");
                mycontain.classList.add("myContain");

                const card = `  
                    <div class="card" style="max-width: 250px;">
                        <img src="${data.images.jpg.large}" class="card-img-top" alt="...">
                        <div class="hover">
                            <a href="${data.links.self}"><img src="" alt=""></a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                            </p>
                            <h5></h5>
                        </div>
                    </div>
                `;
                mycontain.innerHTML += card;
                userCardTemplate.appendChild(mycontain);
            });
        }
    });
