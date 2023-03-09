<script setup lang="ts">
import { bgColor, toggleBg } from "./composables/store.js";

</script>

<template>
    <div :style="{backgroundColor: bgColor}" style="height: 100vh; padding: 2rem;">
        <nav>
            <router-link to="/">HomePage</router-link><br>
            <router-link to="/projects">Projects</router-link>
        </nav>
        <router-view />
</div>
</template>

<style>

</style>
