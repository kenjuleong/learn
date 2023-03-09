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