<template>
  <div>FirstName:
    <input type="text" placeholder="firstName" :value="firstName" @input="$event = $emit('update:firstName',$event.target.value)"/>
     LastName: <input type="text" placeholder="lastName" :value="lastName" @input="$event = $emit('update:lastName',$event.target.value)"/>
  </div>
</template>

<script setup>

const props = defineProps({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    }
});

const emit = defineEmits(['update:firstName','update:lastName']);
</script>