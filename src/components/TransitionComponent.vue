<template>
  <div>
    <button @click="show = !show">Toggle</button>
  </div>
  <Transition name="fade">
    <div v-if="show">Transition Example</div>
  </Transition>
</template>

<script setup>
import { ref, Transition } from "vue";

const show = ref(true);
</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-leave-to {
  
}

.fade-enter-active {
    transition: opacity 2s ease;
}

.fade-leave-from {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>

<!-- 
transition의 단계

v-enter-from
v-enter-to
v-enter-active

v-leave-from
v-leave-to
v-leave-active



-->