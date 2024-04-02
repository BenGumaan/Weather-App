'use strict'

import * as module from "../module.js";

/**
 * Create the hourly weather forcast
 * @returns {Element}
 */
export const createHourlyForecastElement = (dateTimeUnix, timezone, icon, temp) => {
    const element = document.createElement('div');
    element.classList.add("hourly-forecast-item")
    element.setAttribute("data-hourly-forecast-item", "")
    element.innerHTML = String.raw `
        <p class="day">${module.getHours(dateTimeUnix, timezone)}</p>
        <span class="symbol"><img src="/src/images/${icon}.png" width="32"></span>
        <p class="temp">${parseInt(temp)}&deg</p>
    `;

    return element;
};