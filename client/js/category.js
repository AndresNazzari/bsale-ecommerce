import { GET_CATEGORIES } from '../constants/endpoints.js';
import fetchData from './fetchData.js';
export default async () => {
  try {
    const data = await fetchData(GET_CATEGORIES);
    const categoriesOptions = document.getElementById('categories-options');
    data.categories.forEach((category) => {
      categoriesOptions.innerHTML += `<option value="${category.id}" id="${category.id}">${category.name}</option>`;
    });
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
