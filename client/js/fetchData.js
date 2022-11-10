export default async (endpoint, { id, name, page, limit, category, pmin, pmax, discount, orderBy, order } = {}) => {
  let url;

  try {
    if (id) {
      url = `${endpoint}/${id}`;
    } else {
      url = endpoint + '?';
      name && (url += `&name=${name}`);
      page && (url += `&page=${page}`);
      limit && (url += `&limit=${limit}`);
      category && (url += `&category=${category}`);
      pmin && (url += `&pmin=${pmin}`);
      pmax && (url += `&pmax=${pmax}`);
      discount && (url += `&discount=${discount}`);
      orderBy && (url += `&orderBy=${orderBy}`);
      order && (url += `&order=${order}`);
    }

    const response = await fetch(`${url}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
