<template>
    <div>
        <!-- <button><slot>Default Text</slot></button> -->
         <header><slot name="header" message="This is header"></slot></header>
         <nav>Navigation</nav>
         <main><slot message="This is main"></slot></main>
         <footer><slot name="footer" message="This is footer"></slot></footer>
         <!-- <slot :text="message"></slot> -->
    </div>
</template>

<script setup>
const message = "Hi Kelly!";
</script>