import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.scss';

window.onload = function () {
  document.querySelector('#app').style.display = 'none';

  //hide the preloader
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
    document.querySelector('#app').style.display = 'block';
  }, 1);
};
createApp(App).use(store).use(router).mount('#app');
