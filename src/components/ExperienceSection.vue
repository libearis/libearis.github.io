<script setup>
import { ref, computed } from "vue";
import BaseIcon from "./BaseIcon.vue";
import { slides } from "../data/experience.js";
import { CV_URL } from "../data/contact.js";

const index = ref(0);
const last = slides.length - 1;
const trackStyle = computed(() => ({ transform: `translateX(-${index.value * 100}%)` }));

function go(i) {
  index.value = Math.max(0, Math.min(last, i));
}

// Swipe support for touch and mouse drag.
let startX = null;
function onDown(e) { startX = e.clientX; }
function onUp(e) {
  if (startX === null) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 50) go(index.value + (dx < 0 ? 1 : -1));
  startX = null;
}
function onKey(e) {
  if (e.key === "ArrowRight") go(index.value + 1);
  if (e.key === "ArrowLeft") go(index.value - 1);
}
</script>

<template>
  <section id="experience" class="section container">
    <div v-reveal class="section-head exp-head">
      <div>
        <p class="kicker">01 — Professional experience</p>
        <h2>3 years of building real systems</h2>
        <p class="muted">Software Engineer at PT Indocyber Global Teknologi, onsite and remote.</p>
      </div>
      <a :href="CV_URL" target="_blank" rel="noopener" class="btn btn-ghost">
        <BaseIcon name="file-text" /> View full CV (PDF)
      </a>
    </div>

    <div v-reveal class="slider" tabindex="0" aria-roledescription="carousel" @keydown="onKey">
      <div class="slider-tabs" role="tablist">
        <button
          v-for="(s, i) in slides"
          :key="s.key"
          role="tab"
          :aria-selected="index === i"
          :class="{ active: index === i }"
          @click="go(i)"
        >
          <span class="tab-num">{{ i + 1 }}</span> {{ s.label }}
        </button>
      </div>

      <div class="slider-viewport" @pointerdown="onDown" @pointerup="onUp" @pointerleave="startX = null">
        <div class="slider-track" :style="trackStyle">
          <article
            v-for="(s, i) in slides"
            :key="s.key"
            class="slide"
            role="tabpanel"
            :aria-hidden="index !== i"
            :inert="index !== i || undefined"
          >
            <h3>{{ s.title }}</h3>
            <p class="slide-intro">{{ s.intro }}</p>

            <div v-if="s.items" class="slide-grid">
              <div v-for="item in s.items" :key="item.title" class="slide-item">
                <span class="si-icon"><BaseIcon :name="item.icon" :size="18" /></span>
                <div>
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.body }}</p>
                </div>
              </div>
            </div>

            <div v-else class="stack-groups">
              <div v-for="g in s.groups" :key="g.name" class="stack-group">
                <h4>{{ g.name }}</h4>
                <ul class="chips">
                  <li v-for="t in g.items" :key="t">{{ t }}</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="slider-nav">
        <button class="nav-btn" aria-label="Previous slide" :disabled="index === 0" @click="go(index - 1)">
          <BaseIcon name="arrow-left" :size="18" />
        </button>
        <div class="dots">
          <span v-for="(s, i) in slides" :key="s.key" :class="{ on: index === i }"></span>
        </div>
        <button class="nav-btn" aria-label="Next slide" :disabled="index === last" @click="go(index + 1)">
          <BaseIcon name="arrow-right" :size="18" />
        </button>
      </div>
    </div>
  </section>
</template>
