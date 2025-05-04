<script setup >
import HeaderComponent from './components/HeaderComponent.vue';

</script>

<template>
<HeaderComponent/>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>


<style scoped>
.link {
  font-size: 50px;
}
</style>
