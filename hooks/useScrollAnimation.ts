import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        target.classList.add('visible');
        observer.unobserve(target);
      }
    }, {
      threshold: 0.15,
      ...options,
    });

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [options]);

  return ref;
};
