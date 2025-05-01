<template>
    <div>Id: {{ post.id }}</div>
    <div>Title: {{ post.title }}</div>
    <div><button @click.prevent="$event => $emit('editPost', post.id)">Edit Post</button></div>
    <hr />
</template>

<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['editPost']);
</script>