<template>
  <div>
    <counter v-if="showCounter"></counter>
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
import { onBeforeUpdate, onUpdated, ref } from "vue";
const showCounter = ref(true);

// onBeforeUpdate(() => {
//   console.log("before Update");
// });
// onUpdated(() => {
//   console.log("on Update");
// });
</script>
