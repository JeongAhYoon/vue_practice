<template>
    <div>
        <h3>Event Handling</h3>
    </div>
    <div>
        <button v-on:click="$event => count++">Counter</button>
        <div>Counter: {{count}}</div>
    </div>
    <div>
        <button @click="($event) => incrementCounter('Kelly', $event)">Counter</button>
        <div>Counter: {{count}}</div>
    </div>
    <div @click.capture="onParentClick">
        <a href="http://www.google.com" @click.stop="onLickClick"> Click here</a>
    </div>
</template>

<script setup>
import {ref} from 'vue';
const count = ref(0);
const incrementCounter = (name, event) => {
    count.value++;
    console.log(name);
    console.log(event.target.tagName);
};
const onLickClick = (event) => {
   event.preventDefault();
    console.log("Clicked");
};
const onParentClick = () => {
    console.log("Parent");
};
</script>