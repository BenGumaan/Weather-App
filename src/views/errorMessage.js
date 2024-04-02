'use strict'

/**
 * Create the error message
 * @returns {Element}
 */
export const createErrorMsgElement = () => {
    const element = document.createElement('div');
    element.classList.add("not-found")
    element.innerHTML = String.raw `
        <img src="src/images/404-error.png">
        <p>Sorry, city not found!</p>
    `;

    return element;
};

