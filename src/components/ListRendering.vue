<template>
  <div>
    <h3>ListRendering</h3>
  </div>
  <ul>
    <li v-for="(book, index) in books" :key="book.id">
        <div>{{book.title}}</div>
        <div><input type="text" /></div>
    </li>
  </ul>
  <button @click="shuffle">Shuffle</button>
  <ul>
    <li v-for="book of books"> {{parentMessage}} - {{book.title}}</li>
  </ul>
  <ul>
    <li v-for="(value, key, index) in myOject">{{index}}: {{key}} : {{ value}}</li>
  </ul>
  <!-- <div v-for="book in books">
    {{book.title}}
  </div> -->
  <div v-for="n in 10"> {{n}}: Kelly Yoon</div>
</template>

<script setup>
import { reactive,ref } from "vue";
const parentMessage = ref('Parent');
const books = reactive([
  { id: 1, title: "Book1" },
  { id: 2, title: "Book2" },
  { id: 3, title: "Book3" },
  { id: 4, title: "Book4" },
]);

const myOject = reactive({
    title: 'my title',
    author: 'my author',
});
const shuffle = () => {
    books.sort(() => Math.random() - 0.5);
};
</script>
