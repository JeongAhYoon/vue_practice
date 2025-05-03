<template>
  <div>Id: {{ post.id }}</div>
  <div>Title: {{ post.title }}</div>
  <div><button @click.prevent="updatePost">Edit Post</button></div>
  <!-- <div><button @click.prevent="($event) => $emit('updatePost', post.id)">Edit Post</button></div> -->
  
  <div><input type="text" v-focus /></div>
  <hr />
</template>

<script setup>
// const vFocus = {
//   mounted: (el) => {
//     el.focus();
//     el.style.borderColor = 'red';
//   }
// };
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

// const emit = defineEmits(['editPost']);
const emit = defineEmits({
  editPost(postId) {
    if (postId && typeof postId === "number") return true;
    return false;
  },
});
const updatePost = () => {
  emit("editPost", props.post.id, props.post.title);
};
</script>
