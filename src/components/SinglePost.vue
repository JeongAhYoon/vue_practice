<template>
    <div>Single Post Component</div>
    <h2 ref="titleRef">{{ title }}</h2>
    <h2 ref="titleRef">{{ name1 }}</h2>
    <h2>{{ post.name }}</h2>
</template>

<script setup>
import { ref, computed } from 'vue';
//const props = defineProps(['title','postTitle']);
const props = defineProps(['title', 'age', 'post']);
//const {title, age} = props1;
//console.log(props1.postDetails);
//Props one way.(read-only)
const name = ref(props.title);
const name1 = computed( () => props.title.trim().toLowerCase());
const titleRef = ref(null);
name.value = 'Claire';
console.log(name.value);
props.post.name = 'Kelly modified';

</script>