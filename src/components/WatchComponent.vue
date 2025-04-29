<template>
    <h2>Watch Component</h2>
    <div>
        <p>Ask a Yes/No Question</p>
        <input type="text" v-model="question" />
        <div>Answer: {{answer}}</div>
        <img :src="responseData.image" style="width: 200px" />
    </div>
</template>

<script setup>
import { ref,watch } from 'vue';
const question = ref('');
const answer = ref('Question generally contains ?')
const responseData = ref('');
watch(question, async (newQuesion, oldQuestion) => {
    if(newQuesion.indexOf('?') > -1) {
        answer.value = 'Thinking.....';
        responseData.value ='';
        try{
            const res = await fetch('https://yesno.wtf/api');
            const resJson = await res.json();
            responseData.value = resJson;
            answer.value = resJson.answer;
        } catch(err) {
                answer.value = 'Error!. Could not reach the API'
        }
    }

});
</script>