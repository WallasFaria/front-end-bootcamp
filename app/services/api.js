const API_URL = 'http://www.omdbapi.com/?apikey=fcb4609b';

const search = async query => {
  let result = {};

  try {
    result = await fetch(`${API_URL}&s=${query}`);
    result = await result.json();
  } catch (e) {
    console.error(e);
  }

  return result;
}

const getItem = async id => {
  let result = {};

  try {
    result = await fetch(`${API_URL}&i=${id}`);
    result = await result.json();
  } catch (e) {
    console.error(e);
  }

  return result;
}

export {
  search,
  getItem
}
