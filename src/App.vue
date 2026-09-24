<script setup>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import IntegrationSection from "./components/IntegrationSection.vue";
import ContactSection from "./components/ContactSection.vue";
import ToastMessage from "./components/ToastMessage.vue";

const year = new Date().getFullYear();
</script>

<template>
  <div class="bg-grid" aria-hidden="true"></div>
  <div class="bg-glow" aria-hidden="true"></div>

  <NavBar />

  <main id="top">
    <HeroSection />
    <ProjectsSection />
    <IntegrationSection />
    <ContactSection />
  </main>

  <footer class="footer container">
    <p>© {{ year }} libearis · Built with Vue 3 + Vite · Hosted on GitHub Pages</p>
  </footer>

  <ToastMessage />
</template>
