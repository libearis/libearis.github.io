<script setup>
import BaseIcon from "./BaseIcon.vue";
import GetCodeMenu from "./GetCodeMenu.vue";

defineProps({
  project: { type: Object, required: true },
});

// Spotlight border follows the cursor.
function onPointerMove(e) {
  const card = e.currentTarget;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - r.left}px`);
  card.style.setProperty("--my", `${e.clientY - r.top}px`);
}
</script>

<template>
  <article class="card" :style="{ '--accent': project.accent }" @pointermove="onPointerMove">
    <div class="card-top">
      <div class="card-icon"><BaseIcon :name="project.icon" :size="22" /></div>
      <span class="lang"><i :style="{ background: project.language.color }"></i>{{ project.language.name }}</span>
    </div>

    <h3>{{ project.name }}</h3>
    <p class="tagline">{{ project.tagline }}</p>
    <p v-html="project.summary"></p>

    <ul class="tags">
      <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
    </ul>

    <div class="card-foot">
      <a
        v-if="project.badge.linked"
        href="#integration"
        class="badge-link"
      >{{ project.badge.text }}</a>
      <span v-else class="badge-link muted-badge">{{ project.badge.text }}</span>
      <GetCodeMenu :project="project" />
    </div>
  </article>
</template>
