import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency, date,
};
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(VueAxios, axios);
app.use(router);
app.component('loading-page', Loading);
app.mount('#app');
