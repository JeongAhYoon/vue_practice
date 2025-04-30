<template>
  <div>
    <counter-component v-if="showCounter" ref="counterRef"></counter-component>
    <div
      :style="{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }"
    >
      <button @click.prevent="(event) => (showCounter = !showCounter)">
        Toggle Counter
      </button>
    </div>
    <!-- <TemplateSyntax />
<ComputedComponent />
<ClassComponent class="foo bar"/>
<StyleComponent class="foo bar"/>
<ConditionalComponent />
<ListRendering />
<EventHandling />
<FormInput />
<WatchComponent />
<WatchEffectComponent /> -->
<SinglePost v-bind="postDetails" :post="post"/>
<div>Parent: {{ post.name }}</div>
    <div style="margin-top: 15rem"></div>
  </div>
</template>

<script setup>
// setup 사용하지 않으면 이런식으로 하고 쓰도록 한다..
// export default {
//   components:{
//     Counter
//   }, 
//     setup() {

//     }
// }
import CounterComponent from './components/Counter.vue' //change it locally
import { onBeforeUpdate, onMounted, onUpdated, ref, reactive } from "vue";
import SinglePost from './components/SinglePost.vue';
const showCounter = ref(true);
const counterRef = ref(null);
const postDetails = {
  title: 'Ernest',
  age: 49
};

const post = reactive({
  id: 1,
  name: "randomName"
});
const postTitle = ref('Claire is cute')
// onBeforeUpdate(() => {
//   console.log("before Update");
// });
// onUpdated(() => {
//   console.log("on Update");
// });
onMounted(() => {
  console.log(counterRef.value.increaseCounter());
  console.log(counterRef.value.increaseCounter());
})
</script>
