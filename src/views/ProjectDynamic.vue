<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
    <h2>Guide for {{ route.params.id }}</h2>
</template>