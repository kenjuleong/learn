<script setup lang="ts">
import { useBg } from "@/composables/piniaStore.js"; 
import { watch } from "vue";
const bg = useBg();

</script>

<template>
    <div :style="{backgroundColor: bg.getColor}" style="height: 100vh; padding: 2rem;">
        <nav>
            <router-link to="/">HomePage</router-link><br>
            <router-link to="/projects">Projects</router-link>
        </nav>
        <router-view />
</div>
</template>

<style>

</style>
