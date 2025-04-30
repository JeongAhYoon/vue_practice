<template>
  <div>
    <counter v-if="showCounter" ref="counterRef"></counter>
    <div
      :style="{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }"
    >
      <button @click.prevent="(event) => (showCounter = !showCounter)">
        Toggle Counter
      </button>
    </div>
    <!-- <TemplateSyntax />
<ComputedComponent />
<ClassComponent class="foo bar"/>
<StyleComponent class="foo bar"/>
<ConditionalComponent />
<ListRendering />
<EventHandling />
<FormInput />
<WatchComponent />
<WatchEffectComponent /> -->
    <div style="margin-top: 15rem"></div>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onMounted, onUpdated, ref } from "vue";
const showCounter = ref(true);
const counterRef = ref(null);
// onBeforeUpdate(() => {
//   console.log("before Update");
// });
// onUpdated(() => {
//   console.log("on Update");
// });
onMounted(() => {
  console.log(counterRef.value.increaseCounter());
  console.log(counterRef.value.increaseCounter());
})
</script>
