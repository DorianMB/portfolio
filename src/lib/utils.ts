import { clsx, type ClassValue } from "clsx"
import { MotionValue, useInView, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// effect de scroll smooth
export function scrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Fonction pour le décompte des chiffres (partie stats)
export function useCountUp(end: number, duration: number = 2, start: number = 0) {
  const [count, setCount] = useState(start)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true })

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * (end - start) + start))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    if (isInView) {
      animationFrame = requestAnimationFrame(animate)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start, isInView])

  return { count, ref: nodeRef }
}


// Fonction pour générer un décalage Y avec scroll
export function getRandomNum(min: number, max: number, multi: number): number {
  const value = (Math.floor(Math.random() * (max - min + 1)) * multi);
  return value > 1 ? value : 1;
};

// Fonction pour générer des positions aléatoires
export function getRandomPosition(min: number, max: number): number {
  return ((Math.floor(Math.random() * (max - min + 1)) + min) / max) * 100;
}

// Fonction pour générer un décalage Y avec scroll
export function getScrollTransform(scrollY: MotionValue<number>, minScroll: number, maxScroll: number) {
  return useTransform(scrollY, [0,  maxScroll], [getRandomNum(minScroll, 0, 1), getRandomNum(0, maxScroll, 1)]);
}

// Fonction pour générer une rotation aléatoire
export function getRandomRotation(): number {
  return (Math.floor(Math.random() * (360 - 0 + 1)));
}