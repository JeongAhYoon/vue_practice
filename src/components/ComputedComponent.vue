<template>
    <h3>Computed Proverty</h3>
    <div>Employees Present: {{isEmployeesPresent}}</div>
    <div>Full Name: {{fullName}}</div>
</template>

<!-- <script>
export default {
data() {
    return {
        employees: ['emp1', 'emp2']
    };
},
computed: {
    isEmployeesPresent() {
        return employees.length > 0 ? 'Yes' : 'No';
    }
}

}
</script> -->

<script setup>
import { computed, reactive, ref } from 'vue';



const employees = reactive(['emp1', 'emp2']);
const isEmployeesPresent = computed(() => { return employees.length > 0 ? 'Yes' : 'No';}); 
//computed value is readonly
//you can't do isEmplyeePresent.value = 'new value'; would give you an error       
const firstName = ref('Kelly');
const lastName = ref('Yoon');    
//const fullName = computed(() => {return `${firstName.value}  ${lastName.value}`;})
const fullName = computed({
    get() {
        return `${firstName.value}  ${lastName.value}`;
    },
    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ');
    }
});
fullName.value = 'Hi Claire';
</script>