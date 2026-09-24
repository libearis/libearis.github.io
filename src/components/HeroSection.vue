<script setup>
import BaseIcon from "./BaseIcon.vue";
import { CV_URL } from "../data/contact.js";
</script>

<template>
  <section class="hero container">
    <img v-reveal class="hero-avatar" src="/avatar.jpg" alt="Danny Liven" />
    <p v-reveal class="eyebrow"><span class="dot"></span> Open to new opportunities</p>
    <h1 v-reveal="1">
      Building systems where<br />
      <span class="gradient-text">architecture is a choice,</span><br />
      not a default.
    </h1>
    <p v-reveal="2" class="lead">
      Hi, I'm <strong>Danny Liven</strong>, a software engineer with <strong>3 years of experience</strong>.
      I'm backend-focused, with <strong>.NET</strong> as my main expertise, and comfortable across the full
      stack with Vue and Angular. I care about picking the right architecture for the job, from
      microservices to modular monoliths with Clean Architecture.
    </p>
    <div v-reveal="3" class="hero-cta">
      <a href="#projects" class="btn btn-primary">See projects <BaseIcon name="arrow-down" /></a>
      <a :href="CV_URL" target="_blank" rel="noopener" class="btn btn-ghost">
        <BaseIcon name="file-text" /> View CV
      </a>
      <a href="https://github.com/libearis" target="_blank" rel="noopener" class="btn btn-ghost">
        <BaseIcon name="github" /> GitHub
      </a>
    </div>
  </section>
</template>
