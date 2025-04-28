<template>
  
<h3 :class="$attrs.class">Class Binding</h3>
<!-- <div :class="{active: isActive, 'text-danger': hasError}">Apply Active Class</div> -->
<!-- <div :class="classObject">Apply Active Class</div> -->
<!-- <div :class="[activeClass, errorClass]">Apply Active Class</div>  -->
<!-- <div :class="['active', 'text-danger']">Apply Active Class</div>  -->
<!-- <div :class="[isActive? activeClass: '', errorClass]">Apply Active Class</div>  -->
<!-- <div :class="[{active: isActive}, errorClass]">Apply Active Class</div>  -->
<div :class="[{[activeClass]: isActive}, errorClass]">Apply Active Class</div> 

</template>

<script setup>
import { reactive, ref, computed } from 'vue';
//defineProps();
const active = 'active'
const isActive = ref(true);
const hasError = ref(true);
// const classObject = reactive({
//     active: isActive,
//     'text-danger': hasError
// })

const classObject = computed(() => { 
    return {
    active: isActive.value && !hasError.value,
    'text-danger': hasError.value 
};
})

const activeClass = ref('active');
const errorClass = ref('text-danger');

</script>