<script setup>
import BaseIcon from "./BaseIcon.vue";
import { stack } from "../data/projects.js";
</script>

<template>
  <section class="hero container">
    <p v-reveal class="eyebrow"><span class="dot"></span> Available for collaboration</p>
    <h1 v-reveal="1">
      Building systems where<br />
      <span class="gradient-text">architecture is a choice,</span><br />
      not a default.
    </h1>
    <p v-reveal="2" class="lead">
      Hi, I'm <strong>libearis</strong>, a software engineer who likes backend-heavy work:
      modular monoliths, CQRS, the Outbox pattern, and gRPC used only where it actually fits.
      Below are three projects, including two that talk to each other.
    </p>
    <div v-reveal="3" class="hero-cta">
      <a href="#projects" class="btn btn-primary">See projects <BaseIcon name="arrow-down" /></a>
      <a href="https://github.com/libearis" target="_blank" rel="noopener" class="btn btn-ghost">
        <BaseIcon name="github" /> github.com/libearis
      </a>
    </div>

    <ul v-reveal="3" class="stack-strip" aria-label="Technologies">
      <li v-for="tech in stack" :key="tech">{{ tech }}</li>
    </ul>
  </section>
</template>
