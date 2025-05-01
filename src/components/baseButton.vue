

<template>
   <div> <MyButton v-bind="$attrs" />
    <div>Fallthrough attributes: {{$attrs}}</div>
   </div>
   <div>Kelly</div>
</template>

<!-- <script>
export default {
    inheritAttrs: false
};
</script> -->


<script setup>
import { useAttrs } from 'vue';
import MyButton from './MyButton.vue';
const attrs = useAttrs();
console.log(attrs);
</script>