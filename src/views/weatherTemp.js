'use strict'

import * as module from "../module.js";

/**
 * Create the weather temperature
 * @returns {Element}
 */
export const createWeatherTempElement = (icon, temp, description, dateUnix, timezone) => {
    const element = document.createElement('div');
    element.classList.add("weather-temp")
    element.setAttribute("data-weather-temp", "")
    element.innerHTML = String.raw `
        <img src="/src/images/${icon}.png">
        <div class="temp">
            <p class="temperature">${parseInt(temp)}&deg</p>
            <p class="description">${description}</p>
        </div>
        <div class="dateTime">
            <span class="date">${module.getDate(dateUnix, timezone)}</span>
            <span class="time">${module.getTime(dateUnix, timezone)}</span>
        </div>
    `;

    return element;
};