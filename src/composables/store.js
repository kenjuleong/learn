import {ref} from "vue";

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
   { name: 'Modmail.js', description: "lorem ispum lorem ispum lorem ispum lorem ispum", stars: Math.round(Math.random() * 25), author: '@leecheeyong' }, 
   { name: 'Jet Brawley', description: "lorem ispum lorem ispum lorem ispum lorem ispum", stars: Math.round(Math.random() * 25), author: '@leecheeyong' },
   { name: 'Google', description: "lorem ispum lorem ispum lorem ispum lorem ispum", stars: Math.round(Math.random() * 25), author: '@leecheeyong' }, 
   { name: 'Github', description: "lorem ispum lorem ispum lorem ispum lorem ispum", stars: Math.round(Math.random() * 25), author: '@leecheeyong' }, 
   { name: 'Player', description: "lorem ispum lorem ispum lorem ispum lorem ispum", stars: Math.round(Math.random() * 25), author: '@leecheeyong' }, 
   { name: 'Logs Viewer', description: "lorem ispum lorem ispum lorem ispum lorem ispum", stars: Math.round(Math.random() * 25), author: '@leecheeyong' },
   { name: 'Attendance Taker', description: "lorem ispum lorem ispum lorem ispum lorem ispum", stars: Math.round(Math.random() * 25), author: '@leecheeyong' }
]