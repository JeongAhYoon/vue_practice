<template>
<ul class="link">
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/about">About</router-link></li>
  <li><router-link to="/aboutasdf">Broken Link</router-link></li>
</ul>

<div>
<router-view></router-view>
</div>
</template>


<style scoped>
.link {
  font-size: 50px;
}
</style>
