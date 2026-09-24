<script setup>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import IntegrationSection from "./components/IntegrationSection.vue";
import ContactSection from "./components/ContactSection.vue";
import ToastMessage from "./components/ToastMessage.vue";
import DemoModal from "./components/DemoModal.vue";

const year = new Date().getFullYear();
</script>

<template>

  <NavBar />

  <main id="top">
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <IntegrationSection />
    <ContactSection />
  </main>

  <footer class="footer container">
    <p>© {{ year }} Danny Liven · Hosted on GitHub Pages</p>
  </footer>

  <ToastMessage />
  <DemoModal />
</template>
