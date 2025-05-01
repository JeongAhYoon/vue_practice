<template>
    <div><h2>CustomInput</h2></div>
    <!-- <div>
        <input type="text" :value="searchText" @input = "$event => $emit( 'updateText', $event.target.value)"/>
    </div> -->
    <div>
        <input type="text" :value="modelValue" @input = "$event => $emit( 'update:modelValue', $event.target.value)"/>
    </div>
</template>

<script setup>
// const props = defineProps({
//     searchText: {
//         type: String,
//         required: true
//     }
// });

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['update:modelValue']);
</script>