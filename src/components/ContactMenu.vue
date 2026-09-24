<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import BaseIcon from "./BaseIcon.vue";
import { getEmail, EMAIL_SUBJECT } from "../data/contact.js";
import { useToast } from "../composables/useToast.js";

const open = ref(false);
const root = ref(null);
const toast = useToast();

function openGmail() {
  const url =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${encodeURIComponent(getEmail())}&su=${encodeURIComponent(EMAIL_SUBJECT)}`;
  window.open(url, "_blank", "noopener");
  open.value = false;
}

function openMailApp() {
  window.location.href = `mailto:${getEmail()}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
  open.value = false;
}

async function copyEmail() {
  const text = getEmail();
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
  toast.show("Email address copied ✓");
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
  <div ref="root" class="get-code contact-menu" :class="{ open }">
    <button class="btn btn-primary" aria-haspopup="true" :aria-expanded="open" @click="open = !open">
      <BaseIcon name="mail" /> Contact me
      <BaseIcon name="chevron" :size="14" class="chev" />
    </button>

    <div class="menu menu-down" role="menu">
      <button class="menu-item" role="menuitem" @click="openGmail">
        <span class="mi-icon"><BaseIcon name="mail" /></span>
        <span><b>Write in Gmail</b><small>Opens a new message in your browser</small></span>
      </button>
      <button class="menu-item" role="menuitem" @click="openMailApp">
        <span class="mi-icon"><BaseIcon name="send" /></span>
        <span><b>Use my mail app</b><small>Outlook, Apple Mail, and others</small></span>
      </button>
      <button class="menu-item" role="menuitem" @click="copyEmail">
        <span class="mi-icon"><BaseIcon name="copy" /></span>
        <span><b>Copy email address</b><small>Paste it wherever you like</small></span>
      </button>
    </div>
  </div>
</template>
