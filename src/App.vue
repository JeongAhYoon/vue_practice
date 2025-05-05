<template>
   <router-view name="Header"></router-view>

  <div class="container">
    <div class="row">
      <router-view name="LeftSideBar" class="col-md-2"></router-view>

      <div class="col-md-8">
        <router-view></router-view>
      </div>

      <router-view name="RightSideBar" class="col-md-2"></router-view>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<style scoped>
.link {
  font-size: 50px;
}
</style>
