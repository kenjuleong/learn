import {ref} from "vue";
export const bgColor = ref("black");
export function toggleBg() {
    bgColor.value = bgColor.value == "black" ? "white" : "black";
}