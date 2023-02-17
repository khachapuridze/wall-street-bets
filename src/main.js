import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.scss';

window.onload = function () {
  document.querySelector('#app').style.opacity = '0';
  document.querySelector('#app').style.visibility = 'hidden';


  //hide the preloader
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
    // document.querySelector('#app').style.display = 'block';
    document.querySelector('#app').style.opacity = '1';
    document.querySelector('#app').style.visibility = 'visible';
  }, 1);
};
createApp(App).use(store).use(router).mount('#app');
