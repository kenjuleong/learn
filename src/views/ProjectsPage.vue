<script setup lang="ts">
    import { projects } from "@/composables/store.js";
    import { useBg } from "@/composables/piniaStore.js";
    const bg = useBg();
 </script>
    
    <template>
    <h1>Projects Page</h1>
    <button @click="bg.toggleBg">Toggle Button</button>
    <br><input v-model="bg.bg.color" type="color">
    <br><br>
    <h2>List Of Projects</h2>
    <ul>
        <li v-for="(i) in projects">
            <router-link :to="'projects/'+i.name">{{ i.name }}</router-link>
        </li>
    </ul>
    </template>
    
