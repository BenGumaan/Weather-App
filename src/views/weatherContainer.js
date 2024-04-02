'use strict'

/**
 * Create the weather container
 * @returns {Element}
 */
export const createWeatherContainerElement = () => {
    const element = document.createElement('div');
    element.classList.add("weather-container");
    element.setAttribute("data-search-result", "");

    return element;
};
