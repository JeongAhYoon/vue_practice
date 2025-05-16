import { defineStore } from "pinia";
import { computed, ref } from "vue";

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

// export const useCounterStore = defineStore('counterStore', {
//     state:() => {
//         return {
//             count:0,
//             name: "Kelly Yoon"
//         }
//     },
//     //this could be just like a computed property
//     getters: {
//         doubleCount: (state) => state.count *2
//     },
//     actions: {
//         increment() {
//             this.count++;
//         }
//     }
// });

export const useCounterStore = defineStore("counterStore", () => {
  //app level elements could go there even router, watch.......
  const count = ref(0);
  const name = ref('Kelly is studying Vue');

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }
  function $reset() {
    count.value = 0;
    name.value = 'Kelly Yoon dev'
  }

  return {
    count,
    doubleCount,
    increment,
    name,
    $reset
  };
});


