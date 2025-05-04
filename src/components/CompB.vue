<template>
    <div><input type="text" v-model="message" /></div>
</template>

<script setup>
import { onActivated, onDeactivated, ref } from 'vue';

const message = ref('');
onActivated(() => {
    console.log("On activated B")
})
onDeactivated(() => {
    console.log("On Deactivated B")
})
</script>