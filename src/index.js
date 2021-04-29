import './styles.css';
import debounce from 'lodash.debounce';
import countries from './templates/counries-list.hbs';

const refs = {
  searchQuery: document.querySelector('.js-countries-search'),
  countriesList: document.querySelector('.js-countries-list'),
  counrtyContainer: document.querySelector('js-conutry-card'),
};
const URL = 'https://restcountries.eu/rest/v2/';

refs.searchQuery.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  const search = e.target.value;
  console.log(search);
  fetchCountries(search).then(renderCountriesList);
}

function fetchCountries(search) {
  return fetch(`${URL}name/${search}`).then(response => response.json());
}

function renderCountriesList(country) {
  const markup = countries(country);
  refs.countriesList.innerHTML = markup;
}
