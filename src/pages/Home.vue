<template>
<div>Home Page</div>
<div>Counter: {{ count }}</div>
<div>DoubleCount: {{ doubleCount }}</div>
<!-- <div>DoubleValue: {{ doubleValue }}</div> -->
<button @click="add()">Incremenet</button>
</template>

<script>
import { useCounterStore } from '@/store/countner';
import { mapActions, mapState, mapWritableState } from 'pinia';

//how to use option API for Piana

// export default {
//     computed: {
//         ...mapState(useCounterStore, ['count', 'doubleCount'])
//     }, 
//     methods: {
//         ...mapActions(useCounterStore, ['increment'])
//     }
// };

export default {
    computed: {
        // ...mapState(useCounterStore, {
        //     count: 'count',
        //     doubleCount: 'doubleCount',
        //     doubleValue: state => state.count + 1
        // })
        ...mapWritableState(useCounterStore, ['count', 'doubleCount'])
    }, 
    methods: {
        ...mapActions(useCounterStore, ['increment']),
        add() {
            this.count++;
        }
    }
};

</script>