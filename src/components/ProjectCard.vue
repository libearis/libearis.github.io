<script setup>
import BaseIcon from "./BaseIcon.vue";
import GetCodeMenu from "./GetCodeMenu.vue";

defineProps({
  project: { type: Object, required: true },
  flagship: { type: Boolean, default: false },
});
</script>

<template>
  <article class="card" :class="{ 'is-flagship': flagship }" :style="{ '--tone': project.accent }">
    <div class="card-main">
      <div class="card-top">
        <div class="card-icon"><BaseIcon :name="project.icon" :size="22" /></div>
        <div class="card-top-right">
          <span v-if="flagship" class="flagship-pill">★ Flagship project</span>
          <span class="lang"><i :style="{ background: project.language.color }"></i>{{ project.language.name }}</span>
        </div>
      </div>

      <h3>{{ project.name }}</h3>
      <p class="tagline">{{ project.tagline }}</p>
      <p v-html="project.summary"></p>
    </div>

    <div class="card-side">
      <ul class="tags">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>

      <div class="card-foot">
        <a v-if="project.badge.linked" href="#integration" class="badge-link">{{ project.badge.text }}</a>
        <span v-else class="badge-link muted-badge">{{ project.badge.text }}</span>
        <GetCodeMenu :project="project" />
      </div>
    </div>
  </article>
</template>
