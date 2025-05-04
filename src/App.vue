<template>
<ul class="link">
  <li><a href="#/">Home</a></li>
  <li><a href="#/about">About</a></li>
  <li><a href="#/asdf">Broken Link</a></li>
</ul>

<div>
  <component :is="currentView"></component>
</div>
</template>
<script setup>
import { computed, ref } from 'vue';
import About from './pages/About.vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

const routes = {
  '/': Home,
  '/about':About
}

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  console.log(currentPath.value);
  currentPath.value = window.location.hash;
  console.log(currentPath.value);
});

const currentView = computed(() => {
return routes[currentPath.value.slice(1) || '/'] || NotFound;
});

</script>

<style scoped>
.link {
  font-size: 50px;
}
</style>
