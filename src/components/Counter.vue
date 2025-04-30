<template>
  <div class="text-center">
    <div id="counterTitle" :ref="(el) => updateRef(el)">{{ counterTitle }}</div>
    <div>
      <button @click.prevent="decreaseCounter()">-</button>
      <span>{{ counterData.count }}</span>
      <button @click.prevent="increaseCounter()">+</button>
      <div>The Counter Value is {{ oddOrEven }}</div>
      <div><input type="text" v-model="counterTitle" /></div>
    </div>
    <div v-for="item in items" :key="item" ref="itemsRef">{{item}}</div>
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
import {
  reactive,
  ref,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onBeforeUpdate,
  onUpdated,
  watchEffect,
  watch,
} from "vue";
const counter = ref(100);
const counterTitle = ref("Counter Title");
const counterData = reactive({
  count: 0,
  title: "Counter Title",
});
const updateRef = (ref) =>  {
    if(ref)
    ref.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
};
const counterRef = ref(null);
// watchEffect(() => {
//     console.log(counterData.count);
//     console.log(counterRef.value.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
//     );
// },{flush:'post'});

watch(() => counterData.count,() => {
    console.log(counterData.count);
    //console.log(counterRef.value);
    if(counterRef.value)
    console.log(counterRef.value.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    );
});

watchEffect(() => {
  console.log(counterData.count);
  console.log(counterTitle.value); // 이걸 추가 추적

  if (counterRef.value) {
    counterRef.value.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
});


const items = ref([1,2,3,4]);
const itemsRef = ref([]);

const increaseCounter = () => counterData.count++;

const decreaseCounter = () => counterData.count--;

onBeforeMount(() => {
  //console.log(document.getElementById("counterTitle"));
  console.log("before mounted"); // component setup 후 Dom이 만들어 지기 전에 불려짐.
 
});

onMounted(() => {
  
  console.log("On Mounted");
  console.log(counterRef.value);
});

onBeforeUnmount(() => {
  console.log("on before unMounted");
});

onUnmounted(() => {
  console.log("on unmounted");
});

const oddOrEven = computed(() => {
  return counterData.count % 2 == 0 ? "Even" : "Odd ";
});

defineExpose({
    counterTitle,
    increaseCounter
})
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
