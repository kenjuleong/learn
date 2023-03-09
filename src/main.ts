import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { routes } from './router';
import { createPinia } from 'pinia';


import './assets/main.css'

const app = createApp(App);
const pinia = createPinia()
const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
  // history: createWebHashHistory()
});

app.use(router)
app.use(pinia)
app.mount('#app');
