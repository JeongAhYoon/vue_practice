<template>
    <div>Load Post Id: <button v-for="n in 5" :key="n" @click="postId = n">{{ n }}</button></div>
  <div v-if="error">Error Encountered: {{ error.message }}</div>
  <div v-else-if="post">
    <NewSingleComponent
      :post="post"
      :key="post.id"
      @edit-post="updatePost"
    ></NewSingleComponent>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { useFetch } from "@/useFetch";
import NewSingleComponent from "./NewSingleComponent.vue";
import { computed, ref } from "vue";
// const posts = ref([
//     {id : 1, title: 'Post 1'},
//     {id : 2, title: 'Post 2'},
//     {id : 3, title: 'Post 3'},
// ]);

const postId = ref('1');




const url = computed(() => {return  `https://jsonplaceholder.typicode.com/posts/${postId.value}`});
const {post, error} = useFetch(url);
console.log(post.value);


const updatePost = (id, value) => {
  console.log(value);
  // const ps= posts.map(post => post.id === id ? );
  posts.value = posts.value.map((post) => {
    if (post.id === id) return { ...post, title: "Post Is Updated" };
    return post;
  });
};
</script>
