<template>
  <div class="text-center">
    <div>Counter Component</div>
    <div>
      <button @click.prevent="decreaseCounter()">-</button>
      <span>{{ counter }}</span>
      <button @click.prevent="increaseCounter()">+</button>
    </div>
  </div>
</template>

<!-- <script>
export default {
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increaseCounter() {
            this.counter++;
        },
        decreaseCounter() {
            this.counter--;
        }
    }
}
</script> -->
<!-- <script>
import {ref} from 'vue';
export default {
    setup() {
        const counter = ref(0);
        function increaseCounter() {
            counter.value++;
        }
        function decreaseCounter() {
            counter.value--;
        }

        return {
            counter,
            increaseCounter,
            decreaseCounter
        };
    }

}
</script> -->

<script setup>
import { ref } from "vue";
const counter = ref(100);
const increaseCounter = () =>
  counter.value++;

const decreaseCounter = () =>
  counter.value--;

</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
