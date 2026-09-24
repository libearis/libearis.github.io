<script setup>
import { ref } from "vue";
import BaseIcon from "./BaseIcon.vue";

const theme = ref(document.documentElement.dataset.theme || "dark");

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = theme.value;
  try { localStorage.setItem("theme", theme.value); } catch {}
}
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a href="#top" class="brand">
        <img src="https://avatars.githubusercontent.com/u/107662488?v=4" alt="" />
        <span>libearis</span>
      </a>
      <nav class="nav-links">
        <a href="#projects">Projects</a>
        <a href="#integration">Integration</a>
        <a href="#contact">Contact</a>
        <button class="theme-toggle" aria-label="Toggle color theme" @click="toggleTheme">
          <BaseIcon :name="theme === 'light' ? 'moon' : 'sun'" :size="18" />
        </button>
      </nav>
    </div>
  </header>
</template>
