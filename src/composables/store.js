import {ref} from "vue";
export const bgColor = ref("black");
export function toggleBg() {
    bgColor.value = bgColor.value == "black" ? "white" : "black";
}

export const count = ref(0);
export function useCount() {
    return {
        incrementCount() {
            count.value ++;
        },
        count
    }
}

export const projects = [
    'Modmail.js',
    'Jet Brawley',
    'Google', 
    'Github', 
    'Player', 
    'Logs Viewer',
    'Attendance Taker'
]