<template>
  <div>
    <!-- <CustomInput :searchText="searchText" @updateText="$event => searchText = $event"/> -->
      <!-- <CustomInput :modelValue="searchText" @update:modelValue="newValue => searchText = newValue"/>  -->
      <CustomInput v-model="searchText"/> 
    <div>Parent: {{searchText}} </div>
    <!-- <counter-component v-if="showCounter" ref="counterRef"></counter-component>
    <div
      :style="{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }"
    >
      <button @click.prevent="(event) => (showCounter = !showCounter)">
        Toggle Counter
      </button>
    </div>
    <TemplateSyntax />
<ComputedComponent />
<ClassComponent class="foo bar"/>
<StyleComponent class="foo bar"/>
<ConditionalComponent />
<ListRendering />
<EventHandling />
<FormInput />
<WatchComponent />
<WatchEffectComponent /> -->
<!-- <PostComponent></PostComponent>
<SinglePost v-bind="postDetails" :post="post"/>
<div>Parent: {{ post.name }}</div>
<PropsValidation :id="10" message="success" :updatedTitle="updateTitle" :person="person" />
<PropsValidation :post="post" message="warning" :updatedTitle="updateTitle" :person="person" /> -->
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
import Person from './components/Person.js'
import SinglePost from './components/SinglePost.vue';
import PropsValidation from './components/PropsValidation.vue';
import PostComponent from './components/PostComponent.vue';
import CustomInput from './components/CustomInput.vue';
const showCounter = ref(true);
const counterRef = ref(null);
const postDetails = {
  title: 'Ernest',
  age: 49
};
const searchText = ref('Hello Kelly Yoon');
// const updateText = (text) => {
//   searchText.value = text;
// }

const post = reactive({
  id: 1,
  name: "randomName"
});
const updateTitle = () => {
  post.name = 'changed from parent';
}

const person = new Person('Claire', 11);


const postTitle = ref('Claire is cute')
// onBeforeUpdate(() => {
//   console.log("before Update");
// });
// onUpdated(() => {
//   console.log("on Update");
// });
onMounted(() => {
  //console.log(counterRef.value.increaseCounter());
  //console.log(counterRef.value.increaseCounter());
})
</script>
