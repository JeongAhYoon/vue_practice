<template>
    <div>
        <!-- <button><slot>Default Text</slot></button> -->
         <header><slot name="header"></slot></header>
         <nav>Navigation</nav>
         <main><slot></slot></main>
         <footer><slot name="footer"></slot></footer>
    </div>
</template>

<script setup>

</script>