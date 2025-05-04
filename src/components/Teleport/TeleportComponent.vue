<template>
  <div class="container">
    <div class="content">
      <h2>
        Teleport Component
      </h2>
      <div><MyModal /></div>
    </div>
  </div>
</template>

<script setup>
import MyModal from './MyModal.vue';

</script>

<style>
html, body,
#app {
  height: 100%;
}
.container {
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
}
.content {
  max-width: 400px;
  position:relative;
}
</style>