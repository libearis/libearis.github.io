// v-reveal: fades an element in the first time it scrolls into view.
// Optional value is a stagger index, e.g. v-reveal="2".
const observer =
  typeof IntersectionObserver !== "undefined"
    ? new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.12 }
      )
    : null;

export const vReveal = {
  mounted(el, binding) {
    el.classList.add("reveal");
    const step = Number(binding.value) || 0;
    el.style.transitionDelay = `${Math.min(step, 3) * 70}ms`;
    if (observer) observer.observe(el);
    else el.classList.add("in");
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
