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

> Use `router.push()` to switch to another page
>
> Example below switch to `/projects` when count is more than 5
```vue
 <script setup lang="ts">
    import { bgColor, toggleBg } from "../composables/store.js";
    import { useCount } from "../composables/store.js";
    import { watch } from "vue";
    import { useRouter } from "vue-router";

    const { count, incrementCount } = useCount();
    const router = useRouter();
    watch(count, (e) => {
        if(e > 5) {
            router.push("/projects")
        }
    })
</script>
    
    <template>
    <h1>Home Page</h1>
    <button @click="toggleBg">Toggle Button</button>
    <br><input v-model="bgColor" type="color">

    <p>Press 5 times to switch to /projects</p>
    <h2>You've clicked {{ count }}</h2>
    <button @click="incrementCount">Click Me</button>
    </template>
```

> Difference between `useRoute()` and `useRouter()`
- use `useRoute()` to get params, path 
```vue
// current path: https://example.com/projects/1
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params.id) // 1
</script>
```
- use `useRouter()` to change path
```vue
// current path: https://example.com/project
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function changePath() {
    router.push("/home");
}
</script>
// changed path to: https://example.com/home
```

> Use `localStorage` API to store value and items (using usevue, pinia)
```js
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

export const useBg = defineStore('backgroundColor', {
    state: () => ({
        bg: useStorage('bgColor', {color: "black"})
    }),
    getters: {
        getColor() {
            return this.bg.color
        }
    },
    actions: {
         toggleBg() {
            this.bg.color = this.bg.color == "black" ? "white" : "black";
        }
    }
})
```

> **Info**
> **Pinia** allow us to define a store like a vue options API
> - Getters in `pinia` is computes in `vue`: it is a variable with function 
> - Actions in `pinia` is methods in `vue`: they are functions that can be used

