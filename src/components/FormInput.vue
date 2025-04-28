<template>
    <h3>FormInput component</h3>
    <div>
        <input type="text" :value="text" @input="(event) => (text=event.target.value)"/>
        <div>{{text}}</div>
    </div>
    <div>
        <input type="text" v-model="textWithModel"/>
        <div>{{textWithModel}}</div>
    </div>

    <div style="white-space: pre-line;">
        <textarea v-model="message"/>
        <div>{{message}}</div>
    </div>

    <div>
        <input type="checkbox" v-model="checked" true-value="yes" false-value="No"/>
        <div>{{checked}}</div>
    </div>

    <div>
        <input type="checkbox" value="Claire's mom" v-model="kelly"> Claire's Mom</input>
        <input type="checkbox" value="Claire's mommy" v-model="kelly"> Claire's Mommy</input>
        <input type="checkbox" value="Claire's mother" v-model="kelly"> "Claire's Mother</input>
        <div>{{kelly}}</div>
    </div>

    <div>
        <input type="radio" value="one" v-model="picked"> 1</input>
        <input type="radio" value="two" v-model="picked"/> 2</input>
        <input type="radio" value="three" v-model="picked"/> 3</input>
        <div>{{picked}}</div>
    </div>

    <div>
        <div>Selected Value: {{selected}}</div>
        <select v-model="selected">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
       
    </div>
</template>


<script setup>
import { ref } from 'vue';

const text = ref('Kelly');
const textWithModel = ref('Claire');
const message = ref('Ernest');
const checked = ref(true);
const kelly = ref([]);
const picked = ref('');
const selected = ref('A');
</script>