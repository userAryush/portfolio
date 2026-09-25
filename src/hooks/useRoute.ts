import { useEffect, useRef, useState } from 'react'

export const routes = ['home', 'work', 'about', 'cv', 'contact'] as const
export type Route = typeof routes[number]

const getRoute = (): Route => {
  const route = window.location.hash.slice(1) as Route
  return routes.includes(route) ? route : 'home'
}

export function useRoute() {
  const [activePage, setActivePage] = useState<Route>(getRoute)
  const pendingRoute = useRef<Route | null>(null)
  const navigationTimer = useRef<number | null>(null)

  const navigate = (route: Route) => {
    setActivePage(route)
    pendingRoute.current = route
    if (navigationTimer.current !== null) {
      window.clearTimeout(navigationTimer.current)
    }
    navigationTimer.current = window.setTimeout(() => {
      pendingRoute.current = null
      navigationTimer.current = null
    }, 900)
    if (window.location.hash !== `#${route}`) {
      window.location.hash = route
    }
  }

  useEffect(() => {
    const updateRoute = () => {
      const route = getRoute()
      pendingRoute.current = route
      setActivePage(route)
    }
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  useEffect(() => {
    const sections = routes
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
    const updateFromScroll = () => {
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 86
      const anchor = headerHeight + 12
      const activationPoint = headerHeight + window.innerHeight * 0.2
      const pendingSection = sections.find((section) => section.id === pendingRoute.current)

      if (pendingSection) {
        const bounds = pendingSection.getBoundingClientRect()
        const reachedDestination = bounds.top <= anchor && bounds.bottom > anchor
        if (!reachedDestination) return
        pendingRoute.current = null
      }

      const currentSection = sections
        .filter((section) => {
          const bounds = section.getBoundingClientRect()
          return bounds.top <= activationPoint && bounds.bottom > activationPoint
        })
        .at(-1)
      if (currentSection) setActivePage(currentSection.id as Route)
    }

    updateFromScroll()
    window.addEventListener('scroll', updateFromScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateFromScroll)
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current)
      }
    }
  }, [])

  return { activePage, navigate }
}
