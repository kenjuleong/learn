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

> Setup `router.js`

```js
export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/ProjectsPage.vue')
    }
]
```

> **Warning**
> **Don't Use**
```js
// not optimized, use the above
  import HomePage from "@/views/HomePage.vue";
  export const routes = [
    {
        path: '/',
        component: HomePage
    }
]
```

> In `App.vue` setup
```vue
<template>
        <nav>
            <router-link to="/">HomePage</router-link><br> // router-link is something like <a href="/"> 
            <router-link to="/projects">Projects</router-link>
        </nav>
        <router-view /> // render the current page (path)
</div>
</template>
```
