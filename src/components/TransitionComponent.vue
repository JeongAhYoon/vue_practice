<template>
  <div>
    <button @click="show = !show">Toggle</button>
  </div>
  <Transition>
    <div v-if="show">Transition Example</div>
  </Transition>
</template>

<script setup>
import { ref, Transition } from "vue";

const show = ref(true);
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
</style>
