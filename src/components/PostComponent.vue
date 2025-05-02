<template>
    
  <div v-if="error">Error Encountered: {{ error.message }}</div>
  <div v-else-if="posts">
    <NewSingleComponent
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @edit-post="updatePost"
    ></NewSingleComponent>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { doFetch } from "@/useFetch";
import NewSingleComponent from "./NewSingleComponent.vue";
import { ref } from "vue";
// const posts = ref([
//     {id : 1, title: 'Post 1'},
//     {id : 2, title: 'Post 2'},
//     {id : 3, title: 'Post 3'},
// ]);

const {posts, error} = await doFetch();
console.log(posts.value);


const updatePost = (id, value) => {
  console.log(value);
  // const ps= posts.map(post => post.id === id ? );
  posts.value = posts.value.map((post) => {
    if (post.id === id) return { ...post, title: "Post Is Updated" };
    return post;
  });
};
</script>
