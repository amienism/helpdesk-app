// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router'
import axios from 'axios'

const myApp = createApp(App).use(router)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here

  config: {
    animations: 'all'
    // brand: {
    //   // primary: '#e46262',
    //   // ... or all other brand colors
    // },
    // notify: {...}, // default set of options for Notify Quasar plugin
    // loading: {...}, // default set of options for Loading Quasar plugin
    // loadingBar: { ... }, // settings for LoadingBar Quasar plugin
  }
})

axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.headers.common = {
  Accept: "application/json",
};

axios.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem("jwt_token");

      if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
  },

  (error) => {
      return Promise.reject(error);
  }
);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
