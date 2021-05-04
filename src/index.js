import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import renderCountriesList from './js/markup/countries-markup';
import refs from './js/markup/refs';
import { infoNotify } from './utils/notifications';

refs.searchQuery.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  // const search = event.target.value.trim(); // убрать пробелы
  const search = e.target.value;

  // if (!search) {
  //   refs.countriesList.innerHTML = '';
  // }

  fetchCountries(search).then(renderCountriesList).catch(infoNotify);
}
