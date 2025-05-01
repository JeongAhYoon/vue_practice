<template>
    <button class="btn" style='color: yellow; font-size: 30px' @click="onChildCilck">Sample Button</button>
    
</template>



<script setup>
const onChildCilck = () => {
    console.log('child click')
};
</script>