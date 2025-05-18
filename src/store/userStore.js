import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const users = ref([{ id: 1, name: "Kelly"}, {id: 2, name: "Ernest" }]);



  return { users };
});
