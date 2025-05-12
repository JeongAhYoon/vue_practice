<template>
<div>Home Page</div>
<div>Counter: {{ counter.count }}</div>
<div>DoubleCount: {{ counter.doubleCount }}</div>
<button @click="counter.increment()">Incremenet</button>
</template>

<script setup>
import { useCounterStore } from '@/store/countner';

const props = defineProps(['name']);
const counter = useCounterStore();

console.log('home', props);
</script>