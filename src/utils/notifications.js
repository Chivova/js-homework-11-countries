import { notice, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function toManyMatchesFound() {
  error({
    text: 'To many matches found. Please enter a more specific query!',
    delay: 2000,
  });
}

function infoNotify() {
  notice({
    text: 'Please enter the correct country name!!',
    delay: 2000,
  });
}
export { toManyMatchesFound, infoNotify };
