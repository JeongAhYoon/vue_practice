<template>
  <button @click="open = true" >Open</button>
  <Teleport to="body">
  <div class="overlay" v-if="open"></div>
    <div class="modal" v-if="open">
      <p>This is the modal</p>
      <button @click="open = false">Close</button>
    </div>
</Teleport>
</template>

<script setup>
import { ref, Teleport } from "vue";

const open = ref(false);
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
    position: absolute;
    z-index: 3;
    top:20%;
    left:40%;
    width:20%;
    background: #fff;
    padding: 20px;
}
</style>
