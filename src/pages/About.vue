<template>
  <div>About Page</div>
  <div>Counter: {{counter.count}}</div>
</template>

<script setup>
import { useCounterStore } from '@/store/countner';

const counter = useCounterStore();
const props = defineProps(['id']);
console.log('about', props);

</script>
