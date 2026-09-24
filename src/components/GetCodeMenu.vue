<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import BaseIcon from "./BaseIcon.vue";
import { GITHUB_USER } from "../data/projects.js";
import { useToast } from "../composables/useToast.js";

const props = defineProps({
  project: { type: Object, required: true },
});

const open = ref(false);
const root = ref(null);
const toast = useToast();

const links = computed(() => {
  const { repo, branch } = props.project;
  const repoUrl = `https://github.com/${GITHUB_USER}/${repo}`;
  return {
    repo: repoUrl,
    zip: `${repoUrl}/archive/refs/heads/${branch}.zip`,
    clone: `${repoUrl}.git`,
    pages: `https://${GITHUB_USER}.github.io/${repo}/`,
  };
});

async function copyClone() {
  const text = links.value.clone;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  open.value = false;
  toast.show("Clone URL copied ✓");
}

function onDocClick(e) {
  if (root.value && !root.value.contains(e.target)) open.value = false;
}
function onKey(e) {
  if (e.key === "Escape") open.value = false;
}
onMounted(() => {
  document.addEventListener("click", onDocClick);
  document.addEventListener("keydown", onKey);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", onDocClick);
  document.removeEventListener("keydown", onKey);
});
</script>

<template>
  <div ref="root" class="get-code" :class="{ open }">
    <button class="code-btn" aria-haspopup="true" :aria-expanded="open" @click="open = !open">
      <BaseIcon name="code" :size="15" /> Get code
      <BaseIcon name="chevron" :size="14" class="chev" />
    </button>

    <div class="menu" role="menu">
      <a class="menu-item" role="menuitem" :href="links.repo" target="_blank" rel="noopener" @click="open = false">
        <span class="mi-icon"><BaseIcon name="github" /></span>
        <span><b>Open on GitHub</b><small>github.com/{{ GITHUB_USER }}/{{ project.repo }}</small></span>
      </a>
      <a class="menu-item" role="menuitem" :href="links.zip" @click="open = false">
        <span class="mi-icon"><BaseIcon name="zip" /></span>
        <span><b>Download ZIP</b><small>Source code · {{ project.branch }} branch</small></span>
      </a>
      <button class="menu-item" role="menuitem" @click="copyClone">
        <span class="mi-icon"><BaseIcon name="copy" /></span>
        <span><b>Copy git clone URL</b><small>{{ links.clone }}</small></span>
      </button>
      <a
        v-if="project.pages"
        class="menu-item" role="menuitem" :href="links.pages" target="_blank" rel="noopener"
      >
        <span class="mi-icon"><BaseIcon name="globe" /></span>
        <span><b>Live demo</b><small>{{ links.pages.replace("https://", "") }}</small></span>
      </a>
      <div v-else class="menu-item disabled" aria-disabled="true">
        <span class="mi-icon"><BaseIcon name="globe" /></span>
        <span><b>Live demo</b><small>Full-stack app: run it locally with Docker</small></span>
      </div>
    </div>
  </div>
</template>
