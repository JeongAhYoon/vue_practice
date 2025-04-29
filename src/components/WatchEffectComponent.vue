<template>
  <h2>Watch Effect Component</h2>
  <div>TodoId: <input type="text" v-model="todoId" /></div>
  <div>Count: <input type="text" v-model="count" /></div>
  <div id="channel">Channel Subscriber Count: {{ count }}</div>
</template>

<script setup>
import { ref, watch, watchEffect, watchPostEffect } from "vue";

const todoId = ref(1);
const count = ref(0);
const data = ref(null);

// watch(todoId, async() => {
//     console.log(todoId.value);
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
//     data.value = await response.json();
// }, {immediate: true});

// watchEffect(async () => {
//     console.log(count.value);
// //   let response = await fetch(
// //     `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
// //   );
// //   data.value = await response.json();
 
//   document.getElementById('channel') && console.log(document.getElementById('channel').innerText);
// },{flush:'post'});

watchPostEffect(async () => {
    console.log(count.value);
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//   );
//   data.value = await response.json();
 
  document.getElementById('channel') && console.log(document.getElementById('channel').innerText);
});

let unwatch = '';
setTimeout(() => {
    unwatch = watchEffect(()=>{});
});
</script>
