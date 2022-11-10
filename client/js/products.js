import { GET_PRODUCTS } from '../constants/endpoints.js';
import fetchData from './fetchData.js';

export default async (filters) => {
  const mainContainer = document.getElementById('main-container');

  mainContainer.innerHTML = '';
  mainContainer.innerHTML = '<div id="products-container" class="container d-flex flex-wrap align-items-center">';
  const productsContainer = document.getElementById('products-container');
  let html;

  const data = await fetchData(GET_PRODUCTS, filters);

  if (data.error) {
    html = `
    <div class="col-12">
      <h3>Server Error, please try again in a few minutes....</h3>
    </div>
    `;
    productsContainer.innerHTML += html;
  } else if (data.products.length > 0) {
    data.products.forEach((product) => {
      const img = product.url_image || './images/no-image.png';
      const priceHtml = checkDiscount(product.price, product.discount);

      html = `
        <div class="card d-flex flex-column justify-content-between">
          <img src="${img}" class="card-img-top card-img " alt="${product.name}">
          <div class="card-body w-100 d-flex flex-column justify-content-end">
            <h5 class="card-title">${product.name}</h5>
            ${priceHtml}

          </div>
        </div>
        `;
      productsContainer.innerHTML += html;
    });
  } else {
    html = `
    <div class="col-12">
      <h3>No products found</h3>
    </div>
    `;
    productsContainer.innerHTML += html;
  }

  mainContainer.innerHTML += '</div>';
};

const checkDiscount = (price, discount) => {
  if (discount > 0) {
    const discPrice = price - (price * discount) / 100;
    return `
      <p class="card-text">Price: <span class="strike">$${price}</span>  $${discPrice} Discount: ${discount}%</p>`;
  } else {
    return `<p class="card-text">Price: $${price}</p>`;
  }
};
