<template>
    <!-- <div v-bind:id="dynamicId"> -->
        <!-- <div :id="dynamicId"> -->
            <div v-bind="objectOfAttrs" :[titleAttr]="titleValue">
                <div> {{1+1}}</div>
                <div></div>
        Template Code
    </div>
    <div v-html="message"></div>
    <div @[eventName]="chagneTitle()">{{message ? 'yes' : 'no'}}</div>
    <div>{{Math.random()}}</div>
    <!-- <div>{{window.document}}</div> -->
</template>

<script setup>
const message = '<h1>Hello world</h1>';
const dynamicId = 'my-id';
const objectOfAttrs = {
    id: dynamicId,
    class: 'container'
};
const eventName = 'mouseover';
const titleAttr = 'title';
const titleValue = 'This is title';
const chagneTitle = () => {
    alert("Hello world");
};
</script>