type ObserverProps = {
  threshold?: number;
};

export function observer({ threshold = 0.2 }: ObserverProps) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        const animation = el.dataset.inview || "animate-fade-in";
        const animationDelay = el.dataset.delay || "[animation-delay-0ms]";
        const animationRepeat = el.dataset.repeat || "false";
        if (entry.isIntersecting) {
          el.classList.add(animation, animationDelay);
          el.classList.remove("opacity-0");
          if (animationRepeat === "false") obs.unobserve(el);
        } else if (animationRepeat === "true") {
          el.classList.remove(animation, animationDelay);
          el.classList.add("opacity-0");
        }
      }
    },
    { threshold },
  );

  return observer;
}
