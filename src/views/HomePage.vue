<script setup lang="ts">
    import { bgColor, toggleBg } from "../composables/store.js";
    </script>
    
    <template>
    <h1>Home Page</h1>
    <button @click="toggleBg">Toggle Button</button>
    <br><input v-model="bgColor" type="color">
    </template>
    
    