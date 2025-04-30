<template>
    <div>Single Post Component</div>
    <h2>{{ title }}</h2>
    <h2>{{ age }}</h2>
</template>

<script setup>

//const props = defineProps(['title','postTitle']);
const props1 = defineProps(['title', 'age']);
//const {title, age} = props1;
//console.log(props1.postDetails);

</script>