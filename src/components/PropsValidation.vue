<template>
  <div>SinglePost Component</div>
  <h2>{{ id }}</h2>
  <div>Post: {{ post.name }}</div>
  <div>Message: {{ message }}</div>
  <div>Person: {{ person.name }}</div>
  <div>
    <button @click="updatedTitle">Change post Title</button>
  </div>
</template>
<script setup>
import Person from './Person';
// const props = defineProps({
//     id: [String, Number]
// })
const props = defineProps({
  id: {
    type: Number,
    default: 0,
    // required: true
  },
  post: {
    type: Object,
    default(rowProps) {
      return { name: "Default", id: 1000 };
    },
  },
  message: {
    type: String,
    validator(value) {
        return ['success', 'warning'].includes(value);
    }
  },
  updatedTitle: {
    type: Function,
    default() {
        return 'Welcome';
    }
  },
  person: {
    type: Person
  }
});
</script>
