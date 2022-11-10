import { GET_DISCOUNTS } from '../constants/endpoints.js';
import fetchData from './fetchData.js';

export default async () => {
  try {
    const data = await fetchData(GET_DISCOUNTS);
    const discountsOptions = document.getElementById('discount-options');
    discountsOptions.innerHTML += `
      <option value="0">0%</option>`;
    data.discounts.forEach((discount) => {
      discountsOptions.innerHTML += `<option value="${discount}" >${discount}%</option>`;
    });
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
