import { createApp } from "vue";
import App from "./App.vue";
import { vReveal } from "./composables/reveal.js";
import "./assets/main.css";

createApp(App).directive("reveal", vReveal).mount("#app");
