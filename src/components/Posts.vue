<template>
    <div>Posts Component</div>
    <SinglePosts :message="message" />
</template>

<script setup>
import SinglePosts from './SinglePosts.vue';
defineProps(['message']);
</script>