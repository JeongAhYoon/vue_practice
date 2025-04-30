import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//import Counter from './components/Counter.vue'
import TemplateSyntax from './components/TemplateSyntax.vue';
import ComputedComponent from './components/ComputedComponent.vue';
import ClassComponent from './components/ClassComponent.vue';
import StyleComponent from './components/StyleComponent.vue';
import ConditionalComponent from './components/ConditionalComponent.vue'
import ListRendering from './components/ListRendering.vue';
import EventHandling from './components/EventHandling.vue';
import FormInput from './components/FormInput.vue';
import WatchComponent from './components/WatchComponent.vue';
import WatchEffectComponent from './components/WatchEffectComponent.vue';
//globally.. access anywhere in the app
//we can chain
const app = createApp(App);
app.component('TemplateSyntax', TemplateSyntax);
app.component('ComputedComponent', ComputedComponent);
app.component('ClassComponent', ClassComponent);
app.component('StyleComponent', StyleComponent);
app.component('ConditionalComponent', ConditionalComponent);
app.component('ListRendering', ListRendering);
app.component('EventHandling', EventHandling);
app.component('FormInput', FormInput);
app.component('WatchComponent', WatchComponent);
app.component('WatchEffectComponent', WatchEffectComponent);
app.mount('#app');

