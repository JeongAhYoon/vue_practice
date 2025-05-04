<template>
  <div>Posts Page</div>
  <table class="table table-striped" v-if="posts.length">
    <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="post in posts" :key="post.id">
            <th>{{post.id}}</th>
            <th>{{post.title}}</th>
            <th>{{post.body}}</th>
        </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, ref } from "vue";

const posts = ref([]);

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts.value = await response.json();
  } catch (e) {
    console.log(e.message);
  }
};

onMounted(() => {
    fetchPosts();
})

</script>
