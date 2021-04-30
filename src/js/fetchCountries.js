const BASE_URL = 'https://restcountries.eu/rest/v2/';

export default function fetchCountries(search) {
  return fetch(`${BASE_URL}name/${search}`).then(response => response.json());
}
