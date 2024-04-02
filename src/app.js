'use strict'

import { initHomePage } from './pages/homePage.js';

const loadApp = () => {
    initHomePage();
};

window.addEventListener('load', loadApp);