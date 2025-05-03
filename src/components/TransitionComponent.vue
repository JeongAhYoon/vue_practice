<template>
  <button @click="loadCompA">Comp A</button>
  <button @click="loadCompB">Comp B</button>
  <Transition mode="out-in" appear> 
    <component :is="activeComponentName" />
  </Transition>
</template>

<script setup>
import { ref, Transition } from "vue";
import CompA from "./CompA.vue";
import CompB from "./CompB.vue";
const activeComponentName = ref(CompA);
const loadCompA = () => activeComponentName.value = CompA;
const loadCompB = () => activeComponentName.value = CompB;
const show = ref(true);
const docState = ref("edit");
</script>

<style scoped>
.v-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

.v-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
</style>
