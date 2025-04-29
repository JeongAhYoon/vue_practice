<template>
  <h2>Watch Component</h2>
  <div>
    <p>Ask a Yes/No Question</p>
    <input type="text" v-model="question" />
    <div>Answer: {{ answer }}</div>
    <img :src="responseData.image" style="width: 200px" />
  </div>

  <div>x: <input type="text" v-model="x" /></div>
  <div>y: <input type="text" v-model="y" /></div>
  <div> Count: <input type="text" v-model="obj1.count.value"/></div>
</template>

<script setup>
import { ref, watch, reactive } from "vue";
const question = ref("");
const answer = ref("Question generally contains ?");
const responseData = ref("");
watch(question, async (newQuesion, oldQuestion) => {
  if (newQuesion.indexOf("?") > -1) {
    answer.value = "Thinking.....";
    responseData.value = "";
    try {
      const res = await fetch("https://yesno.wtf/api");
      const resJson = await res.json();
      responseData.value = resJson;
      answer.value = resJson.answer;
    } catch (err) {
      answer.value = "Error!. Could not reach the API";
    }
  }
});
const x = ref(0);
const y = ref(0);
const obj = reactive({
    count: 0,
    name: 'Kelly'
});
const obj1 = reactive({
    count: {value: 0, name: ''}
});
// watch(() => obj.count, (newCount) => {
// console.log(`new count value is ${newCount}`)
// });

// watch(obj, (obj) => {
// console.log(`new count value is ${obj.count}`)
// });

// watch(() => obj1.count.value, (newCount, oldCount) => {
// console.log(`new count value is ${newCount} and previous number is ${oldCount}`)
// });
watch(() => obj1.count, (newCount, oldCount) => {
console.log(`new count value is ${newCount.value} and previous number is ${oldCount.value}`)
}, {deep:true}); // object를 value로 가지는 property의 변화를 감지하기 위해 이 옵션을 씀

watch(() => obj.count, (newCount, oldCount) => {
console.log(`new count value is ${newCount} and previous number is ${oldCount}`)
},{immediate: true}); // code run 하기전에 한번 바로 작동하고 보여줌줌

// watch(
//   () => x.value + y.value,
//   (sum) => {
//     console.log(`sum is ${sum}`);
//   }
// );
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`value of x, y is ${newX} and ${newY}`);
});
// watch(x, (newX) => {
//     console.log(`value of x is ${newX}`);
// })
// watch(y, (newY) => {
//     console.log(`value of y is ${newY}`);
// });
// watch([x,y], ([newX,newY]) => {
//     console.log(`value of x, y is ${newX} and ${newY}`);
// })
</script>
