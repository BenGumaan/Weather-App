'use strict'

import {
    SEARCH_BUTTON_ATTRIBUTE
} from '../constants.js';

/**
 * Create the search bar
 * @returns {Element}
 */
export const createSearchBarElement = () => {
    const element = document.createElement('div');
    element.classList.add("search-bar")
    element.innerHTML = String.raw `
      <i class="fa-solid fa-location-dot"></i>
      <input type="text" placeholder="Enter your location" data-search-field>
      <button class="fa-solid fa-magnifying-glass" ${SEARCH_BUTTON_ATTRIBUTE}></button>
    `;

    return element;
};