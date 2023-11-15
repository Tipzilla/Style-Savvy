// Import necessary functions and components from Vue and related libraries
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

// Add font awesome icons to the library
library.add(fasFaStar, farFaStar, faStarHalfAlt);

// Create a Vue app instance
const app = createApp(App);

// Use Pinia for state management
app.use(createPinia());

// Use the Vue Router
app.use(router);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app to the DOM
app.mount('#app');

// Set the current year for the copyright notice
const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").textContent = currentYear;