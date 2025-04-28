import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue'
import TemplateSyntax from './components/TemplateSyntax.vue';
import ComputedComponent from './components/ComputedComponent.vue';
import ClassComponent from './components/ClassComponent.vue';

const app = createApp(App);
app.component('Counter', Counter);
app.component('TemplateSyntax', TemplateSyntax);
app.component('ComputedComponent', ComputedComponent);
app.component('ClassComponent', ClassComponent);
app.mount('#app');

