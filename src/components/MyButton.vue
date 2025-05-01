<template>
    <div><button class="btn" style='color: yellow; font-size: 30px' @click="onChildCilck">Sample Button</button><div>whatis it</div></div>
    
</template>
<script setup>
const onChildCilck = () => {
    console.log('child click')
};
</script>