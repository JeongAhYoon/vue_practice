<template>
  <div>
    <button @click="onAdd">Add</button>
    <ul>
      <TransitionGroup name="list">
        <li
          v-for="(list, index) in listData"
          :key="list"
          @click="onRemove(index)"
        >
          {{ list }}
        </li>
      </TransitionGroup>
    </ul>
  </div>
</template>

<script setup>
import { ref, TransitionGroup } from "vue";

const listData = ref([1, 2, 3, 4]);
const onAdd = () => {
  const num = Math.floor(Math.random() * 100);
  const index = Math.floor(Math.random() * listData.value.length);
  listData.value.splice(index, 0, num);
};
const onRemove = (index) => {
  listData.value.splice(index, 1);
};
</script>

<style scoped>
.list-enter-from, .list-leave-to {
    opacity: 0;
}
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-move {
    transition: all 1s;
}
.list-leave-active {
    position: absolute;
}
</style>
