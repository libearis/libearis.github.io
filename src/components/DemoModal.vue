<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import BaseIcon from "./BaseIcon.vue";
import { useDemo } from "../composables/useDemo.js";

const { current, close } = useDemo();
const video = ref(null);
const closeBtn = ref(null);

watch(current, async (project) => {
  document.body.style.overflow = project ? "hidden" : "";
  if (!project) return;
  await nextTick();
  closeBtn.value?.focus();
  video.value?.play().catch(() => {});
});

function onKey(e) {
  if (e.key === "Escape" && current.value) close();
}
onMounted(() => document.addEventListener("keydown", onKey));
onBeforeUnmount(() => document.removeEventListener("keydown", onKey));
</script>

<template>
  <Transition name="demo">
    <div
      v-if="current"
      class="demo-backdrop"
      role="dialog"
      aria-modal="true"
      :aria-label="`${current.name} demo video`"
      @click.self="close"
    >
      <div class="demo-panel">
        <div class="demo-head">
          <div>
            <h3>{{ current.name }}</h3>
            <p>{{ current.demo.seconds }}-second walkthrough · running locally</p>
          </div>
          <button ref="closeBtn" class="demo-close" aria-label="Close demo" @click="close">
            <BaseIcon name="x" :size="18" />
          </button>
        </div>
        <video
          ref="video"
          class="demo-video"
          :src="current.demo.video"
          :poster="current.demo.poster"
          controls
          muted
          playsinline
          preload="metadata"
        ></video>
      </div>
    </div>
  </Transition>
</template>
