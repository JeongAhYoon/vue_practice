<template>
  <div class="text-center">
    <div>Counter Component</div>
    <div>
        <button @click.prevent="decreaseCounter()">-</button>
        <span>{{ counter }}</span>
        <button @click.prevent="increaseCounter()">+</button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increaseCounter() {
            this.counter++;
        },
        decreaseCounter() {
            this.counter--;
        }
    }
}
</script>

<style scoped>
.text-center {
    text-align: center;
}
</style>
