<template>
    <div>
        <h3>Conditional Rendering</h3>
    </div>
    <div>
        <button @click="isAweSome = !isAweSome">Toggle</button>
    </div>
    <div v-if="isAweSome">Vue is awesome</div>
    <div v-else>Oh no! it is not awesome</div>
    <div v-show="isAweSome">V-Show</div>
    <div v-if="type === 1">One</div>
    <div v-else-if="type ===2">Two</div>
    <div v-else-if="type ===3">Three</div>
    <div v-else>else</div>
<template v-if="showPara">
    <h4>Paragraph Heading</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, asperiores laboriosam, aliquid, deserunt fugiat saepe rem nihil provident laudantium eveniet optio assumenda veritatis pariatur dicta. Eveniet, a esse. Provident, quis.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus soluta pariatur dolor perferendis atque nulla asperiores facere accusamus. Reiciendis suscipit ab voluptates quod. Iste aut itaque iusto excepturi doloremque dolor!
    </p>
</template>
</template>

<script setup>
import { ref } from 'vue';
const isAweSome = ref(true);
const type = ref(1);
const showPara = ref(true);
setInterval(() => {
type.value++;
}, 3000)
</script>