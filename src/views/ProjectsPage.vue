<script setup lang="ts">
    import { bgColor, toggleBg, projects } from "@/composables/store.js";
 </script>
    
    <template>
    <h1>Projects Page</h1>
    <button @click="toggleBg">Toggle Button</button>
    <br><input v-model="bgColor" type="color">
    <br><br>
    <h2>List Of Projects</h2>
    <ul>
        <li v-for="(i) in projects">
            <router-link :to="'projects/'+i">{{ i }}</router-link>
        </li>
    </ul>
    </template>
    
