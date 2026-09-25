import { useLayoutEffect, type RefObject } from 'react'
import { gsap, registerGsapPlugins, ScrollTrigger } from '../utils/gsapHelper'

export function useGsapAnimations(appRef: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !appRef.current) return

    registerGsapPlugins()
    const context = gsap.context(() => {
      gsap.from('.hero-copy > :not(h1)', {
        duration: 1,
        ease: 'power3.out',
        opacity: 0,
        stagger: 0.12,
        y: 42,
      })

      const headlineLetters = gsap.utils.toArray<HTMLElement>('.hero-letter')
      const headlineMiddle = (headlineLetters.length - 1) / 2
      const getUDepth = (index: number) => {
        const distance = Math.abs(index - headlineMiddle) / headlineMiddle
        return 1 - distance * distance
      }
      const animateHeadlineWave = (direction: 1 | -1) => {
        gsap.killTweensOf(headlineLetters)
        gsap.fromTo(
          headlineLetters,
          { opacity: 0, y: (index) => direction * 64 * getUDepth(index as number) },
          {
            duration: 1.1,
            ease: 'sine.out',
            opacity: 1,
            stagger: { each: 0.045, from: direction === 1 ? 'start' : 'end' },
            y: 0,
          },
        )
      }

      ScrollTrigger.create({
        onEnter: () => animateHeadlineWave(1),
        onEnterBack: () => animateHeadlineWave(-1),
        start: 'top 80%',
        trigger: '.hero-section',
      })

      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        gsap.from(card, {
          duration: 0.9,
          ease: 'power3.out',
          opacity: 0,
          scrollTrigger: { start: 'top 82%', toggleActions: 'play reverse play reverse', trigger: card },
          y: 60,
        })
      })

      gsap.utils.toArray<HTMLElement>('.skill-card').forEach((card, index) => {
        gsap.from(card, {
          delay: (index % 3) * 0.08,
          duration: 0.85,
          ease: 'power3.out',
          opacity: 0,
          scrollTrigger: { start: 'top 85%', toggleActions: 'play reverse play reverse', trigger: card },
          y: 40,
        })
      })

      gsap.utils.toArray<HTMLElement>('.academic-card, .cert-card').forEach((card, index) => {
        gsap.from(card, {
          delay: (index % 2) * 0.1,
          duration: 0.85,
          ease: 'power3.out',
          opacity: 0,
          scrollTrigger: { start: 'top 85%', toggleActions: 'play reverse play reverse', trigger: card },
          y: 40,
        })
      })

      gsap.from('.contact-section > *', {
        duration: 0.9,
        ease: 'power3.out',
        opacity: 0,
        scrollTrigger: { start: 'top 75%', toggleActions: 'play reverse play reverse', trigger: '.contact-section' },
        stagger: 0.1,
        y: 38,
      })
    }, appRef)

    return () => context.revert()
  }, [appRef])
}
