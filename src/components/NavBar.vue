<script setup>
import { ref } from "vue";
import BaseIcon from "./BaseIcon.vue";

const theme = ref(document.documentElement.dataset.theme || "light");

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
        <span>Danny Liven</span>
      </a>
      <nav class="nav-links">
        <a href="#experience">Experience</a>
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
