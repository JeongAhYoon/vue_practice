<template>
    <div><h2>CustomInput</h2></div>
    <div>
        <input type="text" v-model="value" />
    </div>
    <div>
        <!-- <input type="text" :value="title" @input = "$event => $emit( 'update:title', $event.target.value)"/>
    </div>
    <div>
        <input type="text" :value="title" @input = "$event => $emit( 'update:title', $event.target.value)"/> -->
    </div>
</template>

<script setup>
import { computed } from 'vue';

// const props = defineProps({
//     // searchText: {
//     //     type: String,
//     //     required: true
//     // }
//         modelValue: {
//         type: String
//     }
// });
const value = computed({
    get() {
        return props.title;
    },
    set(newValue) {
        emit('update:title', newValue);
    }
})
const props = defineProps({
    title: {
        type: String,
        required: true
    }
    // modelValue: {
    //     type: String
    // }
});

const emit = defineEmits(['update:title', 'update:modelValue']);
</script>