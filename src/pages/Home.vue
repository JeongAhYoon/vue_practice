<template>
  <div>Home Page</div>
  <div>Counter: {{ count }}</div>
  <div>DoubleCount: {{ doubleCount }}</div>
  <!-- <div>DoubleValue: {{ doubleValue }}</div> -->
  <div>Name: {{ name }}</div>
  <div>doubleCountPlusOne: {{(doubleCountPlusOne(100))}} </div>
  <div>User with 1: {{ getUserById(1).name }}</div>
  <button @click="add()">Incremenet</button>
  <button @click="counter.$reset()">Reset</button>
</template>

<!-- <script>
import { useCounterStore } from "@/store/countner";
import { mapActions, mapState, mapWritableState } from "pinia";

//how to use option API for Piana

// export default {
//     computed: {
//         ...mapState(useCounterStore, ['count', 'doubleCount'])
//     },
//     methods: {
//         ...mapActions(useCounterStore, ['increment'])
//     }
// };

// export default {
//     computed: {
//         // ...mapState(useCounterStore, {
//         //     count: 'count',
//         //     doubleCount: 'doubleCount',
//         //     doubleValue: state => state.count + 1
//         // })
//         ...mapWritableState(useCounterStore, ['count', 'doubleCount','name'])
//     },
//     mounted() {
//         this.$subscribe((mutation, state) => {
//             console.log(mutation),
//             console.log(state)
//         });
//     },

//     methods: {
//         ...mapActions(useCounterStore, ['increment', '$reset', '$patch', '$subscribe']), //subscribe: store에서 state가 바뀔떄마다 자동으로 실행되는 콜백을 등록하는 메서드
//         add() {
//             this.$patch({
//                 count: this.count + 1,
//                 name: Math.random() + 'asdf'

//             });// multple mutations in one mutation.. we use $patch
//             // this.count++;
//             // this.name = Math.random() + 'asdf';
//         }
//     }
// };
</script> -->

<script setup>
import { useCounterStore } from '@/store/countner';
import { mapActions, mapState, mapWritableState, storeToRefs } from 'pinia';

const counter = useCounterStore();
const {count, doubleCount, name, doubleCountPlusOne, getUserById} = storeToRefs(counter);
// composition API does not have $reset()
//$subscrie
counter.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state);
})


function add() {

        counter.count++;
        counter.name = Math.random() + 'asdf';
};


</script>
