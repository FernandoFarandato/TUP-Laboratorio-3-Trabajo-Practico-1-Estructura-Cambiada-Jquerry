/** @format */

const section = window.location.href.split("/");
console.log(`You are in  ${section[section.length - 1]}`);

const productContainer = document.querySelector("#product--container");


$(document).ready(function(){
    fetchProducts();
});



async function fetchProducts() {
  fetch("./../data/product-data.json")
    .then((response) => response.json())
    .then((data) => renderProducts(data));
}

const renderProducts = function (products) {
  let html = `
    <div class="row">
    <!-- Card -->
    `;
  $(products).each((index, element) => {
    html += `
  
    <div class="my-4 col-12 pt-2 col-md-6 col-lg-4 tarjeta">
        <div class="card">
            <div class="">
                <img
                    class="img w-100 img--card img--card--${element.type}"
                    src="./../images/${element.img}"
                    alt="Sample"
                />
            </div>
            <div class="card-body text-center">
                <h5>${element.title}</h5>
                <p class="small text-muted text-uppercase mb-2">${element.type}</p>
                <p class="card-text description ">
                ${element.description}
                </p>
                <hr />
                <h6 class="mb-3">
                    <span class="text-grey">$${element.price}</span>
                </h6>
                <button
                    type="button"
                    class="btn btn-primary btn mr-1 mb-2 btn-block"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                >
                    Comprar
                </button>
            </div>
        </div>
    </div>
  
      `;
  });

  html += `
            </div>
        </div>
    
    `;

  $("#product--container").append( html);
};


