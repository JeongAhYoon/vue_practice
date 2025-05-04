<template>
    <div>Count: {{ count }} <button @click="count++" > + </button></div>
    
</template>

<script setup>
import { onActivated, onDeactivated, ref } from 'vue';

const count = ref(0);
onActivated(() => {
    console.log("On activated A")
})
onDeactivated(() => {
    console.log("On Deactivated A")
})
</script>
