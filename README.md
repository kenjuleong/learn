# Notes

> To setup router, in main.ts

```js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './router'

import './assets/main.css'

const app = createApp(App)
const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})
app.use(router)
app.mount('#app')
```

> Router pages should be located at `/views`
- `views/HomePage.vue`
- `views/ProjectsPage.vue`
- `views/TestPage.vue`

> Use `@` for `/src` source folder

```js
import HomePage from "@/views/Homepage.vue"
```
