<template>
    <h3 :class="$attrs.class"> Style Binding</h3>
    <div :style="{color: activeColor, fontSize: fontSize + 'px'}">Applying Styles</div>
    <div :style="styleObject">Style By Object</div>
    <div :style="styleObjectWithRefValue">Style By Object and Ref</div>
    <div :style="styleObjectComputed">Style By Object with computed</div>
    <div :style="[baseStyles, styles2]">Style With Array</div>
    <div :style="{display: ['-webkit-box', '-ms-flexbox', 'flex']}">Flex property</div>
</template>

<script setup>
import {reactive, ref, computed} from 'vue';
const activeColor = ref('red');
const fontSize = ref(30);
const styleObject = reactive({
    color: 'green',
    fontSize: '25px'
});
const styleObjectWithRefValue = reactive({
    color: activeColor.value,
    fontSize: fontSize.value + 'px'
});

const baseStyles = reactive({
    color:'pink',
    fontSize:'30px'
});
const styles2 = reactive({
    border: '1px solid blue',
    color:'cyan'

})
const styleObjectComputed = computed(() => {return {
    color: activeColor.value,
    fontSize: fontSize.value + 'px'
}});

setTimeout(() => {
    activeColor.value = 'blue';
}, 5000);


</script>