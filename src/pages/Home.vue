<template>
<div>Home Page</div>
<div>Counter: {{ count }}</div>
<div>DoubleCount: {{ doubleCount }}</div>
<button @click="increment()">Incremenet</button>
</template>

<script setup>
import { useCounterStore } from '@/store/countner';
import { storeToRefs } from 'pinia';
import { computed, ref, watchEffect } from 'vue';

const props = defineProps(['name']);
const counter = useCounterStore(); // store will be created when this is called

//const { count, doubleCount } = storeToRefs(counter);
const count = computed(() => counter.count);
const doubleCount = computed(() => counter.doubleCount);

const {increment} = counter;



console.log('home', props);
</script>