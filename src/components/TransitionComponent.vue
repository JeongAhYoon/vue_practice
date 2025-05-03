<template>
  <div>
    <button @click="show = !show">Toggle</button>
  </div>
  <Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"

  >
    <div v-if="show" style="text-align: center">Transition Example</div>
  </Transition>
</template>

<script setup>
import { ref, Transition } from "vue";

const show = ref(true);

const onBeforeEnter = (el) => {
  console.log('on before enter', el)
};
const onEnter = (el, done) => {
  const animate = el.animate([{transform: 'scale(0)'}, {}],{duration: 1000})
  //done();
  animate.onfinish = () => {
    done();
  }
};
const onAfterEnter = (el) => {};

const onBeforeLeave = (el) => {};
const onLeave = (el, done) => {
  const animate = el.animate([{ transform: 'scale(1)', opacity: 1 },
  { transform: 'scale(0)', opacity: 0 }],{ duration: 500, easing: 'ease-in' })
  //done();
  animate.onfinish = () => {
    done();
  }
};
const onAfterLeave = (el) => {};


</script>

<style scoped>
.bounce-active {
  animation: bounce-in 5s;
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
