<script setup>
import ContactMenu from "./ContactMenu.vue";
import BaseIcon from "./BaseIcon.vue";
import { CV_URL } from "../data/contact.js";
</script>

<template>
  <section id="contact" class="section container">
    <div v-reveal class="contact">
      <p class="kicker">Open to new opportunities</p>
      <h2>Looking for my next challenge</h2>
      <p class="muted">
        I'm looking for a role on a fast-paced, competitive team where I can take on complex backend
        and full-stack work, and keep raising the bar. If that sounds like your team, let's talk.
      </p>
      <div class="contact-cta">
        <ContactMenu />
        <a :href="CV_URL" target="_blank" rel="noopener" class="btn btn-ghost">
          <BaseIcon name="file-text" /> Download CV
        </a>
      </div>
    </div>
  </section>
</template>
