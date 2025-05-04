<template>
  <button @click="loadCompA">Comp A</button>
  <button @click="loadCompB">Comp B</button>
  <Transition mode="out-in" appear>
    <!-- appear은 처음 디폴트 컴포넌트가 나올때부터 애니메이션 효과를 발생시키는 것  -->
    <keep-alive>
      <component :is="activeComponentName" />
    </keep-alive>
  </Transition>
</template>

<script setup>
import { ref, shallowRef, Transition } from "vue";
import CompA from "./CompA.vue";
import CompB from "./CompB.vue";
const activeComponentName = shallowRef(CompA);
const loadCompA = () => (activeComponentName.value = CompA);
const loadCompB = () => (activeComponentName.value = CompB);
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
  transition: all 0.2s;
}
</style>
