<script setup lang="ts">
    import { bgColor, toggleBg } from "@/composables/store.js";
    import { useCount } from "@/composables/store.js";
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
    
    