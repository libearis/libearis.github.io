<script setup>
import ProjectCard from "./ProjectCard.vue";
import { projects } from "../data/projects.js";
</script>

<template>
  <section id="projects" class="section container">
    <div v-reveal class="section-head">
      <p class="kicker">02 — Projects</p>
      <h2>Selected work</h2>
      <p class="muted">Ranked by complexity and scope. Each one exists to show an architectural idea well.</p>
      <p class="footnote">
        * These are small, representative snippets of what I've worked on over 3 years, built for
        showcase purposes only and not production-ready. The architecture in each one is a deliberate
        demonstration, not the most practical choice: every one of these apps could run perfectly well
        as a simple monolith.
      </p>
    </div>

    <!-- The first project in the list is shown full-width as the flagship. -->
    <div class="projects">
      <div
        v-for="(project, i) in projects"
        :key="project.repo"
        v-reveal="i"
        class="project-slot"
        :class="{ 'slot-flagship': i === 0 }"
      >
        <ProjectCard :project="project" :flagship="i === 0" />
      </div>
    </div>
  </section>
</template>
