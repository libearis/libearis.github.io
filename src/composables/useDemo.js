import { ref } from "vue";

// The project whose demo video is open in the popup, or null.
const current = ref(null);

export function useDemo() {
  return {
    current,
    show: (project) => (current.value = project),
    close: () => (current.value = null),
  };
}
