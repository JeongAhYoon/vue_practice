<template>
  <div>
    <TransitionList />
    <!-- <TransitionComponent /> -->
    <!-- <PostComponent /> -->
    <!-- <MouseTracker /> -->
    <!-- <Posts v-if="showPost"> </Posts>
    <div><button @click.prevent="showPost = !showPost">Show Posts</button></div> -->

    <!-- <SlotComponent v-slot="slotProps">
      <div>Hello World</div>
      <div>{{slotProps.text}}</div>
    </SlotComponent> -->
    <!-- <SlotComponent
      ><span style="color: red">Click</span>
      <span>Here - {{ searchText }}</span></SlotComponent
    >

    <SlotComponent /> -->
    <!-- <SlotComponent> -->
    <!-- <template v-slot:header="headerProps">
        <h1>Header Content</h1>
        <div>Message: {{headerProps.message}}</div>
      </template>
      <template v-slot:default="mainProps">
        <div>Main Content</div>
        <div>Message: {{mainProps.message}}</div>
      </template> -->
    <!-- <template>
        <div>Main Content</div>
      </template>
      <div>Main Content</div> -->
    <!-- <template #footer="footerProps">
        <div>Footer Content</div>
        <div>Message: {{footerProps.message}}</div>
      </template> -->
    <!-- </SlotComponent> -->
    <!-- <BaseButton class="large" style="color: green" @click="onParentClick" /> -->
    <!-- <MyButton class="large" style="color: green" @click="onParentClick" />
    <UserName v-model:firstName="firstName" v-model:lastName="lastName"/>
    <div> {{firstName}} {{lastName}}</div> -->
    <!-- <CustomInput :searchText="searchText" @updateText="$event => searchText = $event"/> -->
    <!-- <CustomInput :modelValue="searchText" @update:modelValue="newValue => searchText = newValue"/>  -->
    <!-- <CustomInput v-model:title.no-hyphens="searchText"/> 
    <div>Parent: {{searchText}} </div> -->
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
import CounterComponent from "./components/Counter.vue"; //change it locally
import {
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref,
  reactive,
  provide,
  defineAsyncComponent,
} from "vue";
import Person from "./components/Person.js";
import SinglePost from "./components/SinglePost.vue";
import PropsValidation from "./components/PropsValidation.vue";
import PostComponent from "./components/PostComponent.vue";
import CustomInput from "./components/CustomInput.vue";
import UserName from "./components/UserName.vue";
import MyButton from "./components/MyButton.vue";
import BaseButton from "./components/baseButton.vue";
import SlotComponent from "./components/SlotComponent.vue";
import LoadingComponent from "./components/LoadingComponent.vue";
import MouseTracker from "./components/MouseTracker.vue";
import TransitionComponent from "./components/TransitionComponent.vue";
import TransitionList from "./components/TransitionList.vue";

// import Posts from "./components/Posts.vue";
const Posts = defineAsyncComponent({
  // loader: () => import("./components/Posts.vue"),
  loader: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(import("./components/Posts.vue"));
      }, 3000)
    });
  },
  loadingComponent: LoadingComponent,
  delay: 200,
  // errorComponent
});
const showPost = ref(false);

const message = ref("Hello Kelly Yoon");
const updateMessage = () => {
  message.value = "Updated Message From Parent";
};
provide("message", { message, updateMessage });

const firstName = ref("Kelly");
const lastName = ref("Yoon");
const showCounter = ref(true);
const counterRef = ref(null);
const postDetails = {
  title: "Ernest",
  age: 49,
};
const searchText = ref("Hello Kelly Yoon");
// const updateText = (text) => {
//   searchText.value = text;
// }

const post = reactive({
  id: 1,
  name: "randomName",
});

const onParentClick = () => {
  console.log("parent click");
};
const updateTitle = () => {
  post.name = "changed from parent";
};

const person = new Person("Claire", 11);

const postTitle = ref("Claire is cute");
// onBeforeUpdate(() => {
//   console.log("before Update");
// });
// onUpdated(() => {
//   console.log("on Update");
// });
onMounted(() => {
  //console.log(counterRef.value.increaseCounter());
  //console.log(counterRef.value.increaseCounter());
});
</script>
