<template>
    <div><h2>CustomInput</h2></div>
    <div>
        <!-- <input type="text" v-model="value" /> -->
        Modifier ex: <input type="text" :value="title" @input="update"/>
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
// const value = computed({
//     get() {
//         return props.modelValue;
//     },
//     set(newValue) {
//         emit('update:modelValue', newValue);
//     }
// })
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    // modelValue: {
    //     type: String
    // },
    titleModifiers:{
        deafult: () => ({

        })
    }
});
const update = (event) => {
    let value = event.target.value;
    if(props.titleModifiers['no-hyphens']) {
        value = value.split('-').join('');  
    }
    emit('update:title', value);
};
const emit = defineEmits(['update:title', 'update:modelValue']);
</script>