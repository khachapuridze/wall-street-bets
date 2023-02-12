import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.scss';
import 'swiper/components/navigation/navigation.scss';

createApp(App).use(store).use(router).mount('#app');
