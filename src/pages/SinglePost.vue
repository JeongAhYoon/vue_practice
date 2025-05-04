<template>
  <div>Single Post {{ $route.params.id }}</div>
  <div v-if="post">
    <div>{{post.id}}</div>
    <h2>{{post.title}}</h2>
    <div>{{post.body}}</div>
  </div>

  <div>
    <router-link to="/posts">Back</router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const post = ref(null);
const route = useRoute();
const getPost = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
        post.value = await response.json();
    }catch(e) {
        console.log(e);
    }

};

onMounted(() =>{
    getPost();
})
</script>
