import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./userStore";

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
//         doubleCount: (state) => state.count *2,
//         doubleCountPlusOne() {
//           return this.doubleCount + 1;
//         }
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

  const userStore = useUserStore();

  const {users} = storeToRefs(userStore);
  const getUserById = computed(() => {
    return (id) => {
      return userStore.users.find(user=> user.id == id);
    }
  });

  //getter function could be simply just computed function
  const doubleCount = computed(() => count.value * 2);

  //access getters using getter value
  const doubleCountPlusOne = computed(() => {
    return (value) => { return doubleCount.value * value + 1;};
  });

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
    doubleCountPlusOne,
    increment,
    name,
    $reset,
    getUserById
  };
});


