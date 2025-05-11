<template>
  <div class="row">
    <div class="col-md-9">
      <div>Posts Page</div>
      <table class="table table-striped" v-if="posts.length">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
            <td>
              <!-- <router-link :to="{ name: 'singlePost', params: { id: post.id } }"
                >View Post</router-link
              > -->
              <button @click="onPostClick(post.id)">View Post</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const posts = ref([]);
const router = useRouter();
const onPostClick = (postId) => {
  router.push({ name: "singlePost", params: { id: postId } });
};
const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts.value = await response.json();
  } catch (e) {
    console.log(e.message);
  }
};

onMounted(() => {
  posts.value = inject('postsData');
});
</script>
