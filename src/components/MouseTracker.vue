<template>
  <div>Mouse Postion is at: {{ x }}, {{ y }}</div>
</template>
<script setup>
import { useMouse } from '@/mouse';

const {x, y} = useMouse();


</script>
