import './styles.css';
import countriesList from './templates/counries-list.hbs';

const refs = {
  searchQuery: document.querySelector('.js-countries-search'),
  countriesList: document.querySelector('.js-countries-list'),
  counrtyContainer: document.querySelector('js-conutry-card'),
};
const URL = 'https://restcountries.eu/rest/v2/';

refs.searchQuery.addEventListener('input', onFocusSearch);

function onFocusSearch(e) {
  const search = e.currentTarget.value;

  fetchCountries(search).then(renderCountriesList);
}

function fetchCountries(search) {
  return fetch(`${URL}name/${search}`).then(response => response.json());
}

function renderCountriesList(country) {
  const markup = countriesList(country);
  refs.countriesList.innerHTML = markup;
}
