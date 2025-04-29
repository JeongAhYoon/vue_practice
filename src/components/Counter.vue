<template>
  <div class="text-center">
    <div id="counterTitle">{{ counterTitle }}</div>
    <div>
      <button @click.prevent="decreaseCounter()">-</button>
      <span>{{ counterData.count }}</span>
      <button @click.prevent="increaseCounter()">+</button>
      <div>The Counter Value is {{oddOrEven}}</div>
      <div><input type="text" v-model="counterTitle" /></div>
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
import { reactive, ref, computed, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated } from "vue";
const counter = ref(100);
const counterTitle = ref("Counter Title");
const counterData = reactive({
  count: 0,
  title:'Counter Title'
});
const increaseCounter = () => counterData.count++;

const decreaseCounter = () => counterData.count--;

onBeforeMount(() => {
    console.log(document.getElementById('counterTitle'));
    console.log('before mounted'); // component setup 후 Dom이 만들어 지기 전에 불려짐.
});

onMounted(() => {
    console.log(document.getElementById('counterTitle'));
    console.log('mounted'); 
});

onBeforeUnmount(() => {
    console.log('on before unMounted'); 
});

onUnmounted(() => {
    console.log('on unmounted');
})

const oddOrEven = computed(() => {return counterData.count % 2 == 0 ? 'Even' : 'Odd'} )
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
