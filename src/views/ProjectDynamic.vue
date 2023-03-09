<script setup>
import { useRoute } from "vue-router";
import { projects } from "@/composables/store.js";
const route = useRoute();
const { name, description, stars, author } = projects.find(e => e.name == route.params.id);
</script>

<template>
    <h2>Guide for {{ name }}</h2>
    <p>Made by {{ author }}</p>
    <span>Currently has {{ stars }} stars.</span>
    <p>{{ description }}</p>
</template>

<style scoped>
    span {
        font-weight: 600;
        color: palegoldenrod;
    }
</style>