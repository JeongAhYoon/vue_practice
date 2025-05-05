<template>
  <div>Single Post {{ $route.params.id }}</div>
  <div v-if="post">
    <div>{{post.id}}</div>
    <h2>{{post.title}}</h2>
    <div>{{post.body}}</div>
  </div>

  <div>
    <!-- <router-link :to="{name: 'posts'}">Back</router-link> -->
     <button @click="onBackClick">Back To Posts</button>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const post = ref(null);
const route = useRoute();
const router = useRouter();
const getPost = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
        post.value = await response.json();
    }catch(e) {
        console.log(e);
    }

};
const onBackClick = () => {
    // router.push('/post');
    // router.push({ path: '/post'});
    //  router.push({name: 'posts'});
    router.go(-1);
}
// watch( () => route.params, getPost);
watchEffect(getPost);// watchEffect는 안에 있는 parameter들이 바뀌면 저절로 그 콜백 함수가 실행된다는 점이 다르다.그리고 {immediate:true} 없어도 됨.
onMounted(() =>{
    getPost();
})
</script>
