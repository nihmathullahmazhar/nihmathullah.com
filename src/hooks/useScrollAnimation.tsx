import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Wrapper component for easy use
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getTransformStyle = () => {
    const baseTransform = {
      up: 'translateY(40px)',
      down: 'translateY(-40px)',
      left: 'translateX(40px)',
      right: 'translateX(-40px)',
      fade: 'translateY(0)',
    };

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate(0)' : baseTransform[direction],
      transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
    };
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>} 
      className={className}
      style={getTransformStyle()}
    >
      {children}
    </section>
  );
};

export default useScrollAnimation;
