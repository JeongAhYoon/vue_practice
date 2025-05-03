<template>
  <div>
    <button @click="show = !show">Toggle</button>
  </div>
  <Transition enter-active-class="bounce-active" leace-active-class="leave-active">
    <div v-if="show" style="text-align: center">Transition Example</div>
  </Transition>
</template>

<script setup>
import { ref, Transition } from "vue";

const show = ref(true);
</script>

<style scoped>

.bounce-active {
  animation: bounce-in 5s
}

.leave-active {
  animation: bounce-in 0.8s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
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
