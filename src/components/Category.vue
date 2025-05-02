<template>
    <div>Category Componenet</div>
    <div>{{ message }}</div>
    <div>{{ mainMessage }}</div>
    <button @click="updateMessage">Update</button>
</template>

<script setup>
import { inject } from 'vue';


const {message, updateMessage} = inject('message');
const mainMessage = inject('main');
</script>