import { defineStore } from "pinia";

// export const useCounterStore = defineStore('counter', {
//     state() {
//         return {
//             count: 0
//         };
//     },
//     actions: {
//         increment() {
//             this.count++;
//         }
//     }
// })

export const useCounterStore = defineStore('counterStore', {
    state:() => {
        return {
            count:0
        }
    },
    //this could be just like a computed property
    getters: {
        doubleCount: (state) => state.count *2
    },
    actions: {
        increment() {
            this.count++;
        }
    }
});
