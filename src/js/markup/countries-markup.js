import refs from './refs';
import allCountries from '../../templates/countries-list.hbs';
import country from '../../templates/country.hbs';
import { toManyMatchesFound, infoNotify } from '../../utils/notifications';

export default function renderCountriesList(counties) {
  if (counties.length >= 10) {
    toManyMatchesFound();
    return;
  } else if (counties.length > 2 && counties.length < 10) {
    const markup = allCountries(counties);
    refs.countriesList.innerHTML = markup;
  } else if (counties.length === 1) {
    const countryMarkup = country(counties);
    refs.countriesList.innerHTML = countryMarkup;
  } else {
    infoNotify();
  }
}
