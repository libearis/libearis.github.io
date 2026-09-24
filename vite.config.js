import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// libearis.github.io is a user site, so it is served from the domain root.
export default defineConfig({
  plugins: [vue()],
  base: "/",
});
