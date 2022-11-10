import getProducts from './products.js';
import setCategories from './category.js';
import getDiscounts from './discount.js';
//FUNCION INICIAL
const init = async () => {
  /************EVENTOS*** ******************/
  window.addEventListener('load', async () => {
    await setCategories();
    await getDiscounts();
    await getProducts();
  });

  document.getElementById('name-search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById('search-form'));
    //transform FormData to object
    let data = {};
    for (const [key, value] of formData) {
      data = { ...data, [key]: value };
    }
    getProducts(data);
  });
};

/*********INICIO DEL PROGRAMA***************/
init();
