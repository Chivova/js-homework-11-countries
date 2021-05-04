import refs from './refs';
import allCountries from '../../templates/countries-list.hbs';
import country from '../../templates/country.hbs';
import { toManyMatchesFound, infoNotify } from '../../utils/notifications';

export default function renderCountriesList(countries) {
  if (countries.length >= 10) {
    toManyMatchesFound();
    return;
  } else if (countries.length >= 2 && countries.length < 10) {
    const markup = allCountries(countries);
    renderingMarkup(markup);
  } else if (countries.length === 1) {
    const countryMarkup = country(countries);
    renderingMarkup(countryMarkup);
  } else {
    infoNotify();
  }
}

function renderingMarkup(data) {
  refs.countriesList.innerHTML = data;
}
