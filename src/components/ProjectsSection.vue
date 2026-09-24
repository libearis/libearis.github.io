<script setup>
import ProjectCard from "./ProjectCard.vue";
import { projects } from "../data/projects.js";
</script>

<template>
  <section id="projects" class="section container">
    <div v-reveal class="section-head">
      <p class="kicker">01 — Projects</p>
      <h2>Selected work</h2>
      <p class="muted">Each project exists to show one architectural idea well, not to pile on features.</p>
    </div>

    <div class="projects">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.repo"
        v-reveal="i"
        :project="project"
      />
    </div>
  </section>
</template>
