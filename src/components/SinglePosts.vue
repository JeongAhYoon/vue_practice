<template>
    <div>Single Post </div>
    <Category :message="message" />
</template>

<script setup>

import Category from './Category.vue';
defineProps(['message']);
</script>