"use client"

import { useCallback, useEffect, useState, type FocusEvent } from "react"

export function useHeroCarousel(itemCount: number, paused = false) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [interactionPaused, setInteractionPaused] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [loadedIndexes, setLoadedIndexes] = useState<Set<number>>(
    () => new Set(itemCount > 1 ? [0, 1] : [0]),
  )

  const goToIndex = useCallback((nextIndex: number) => {
    if (itemCount <= 0) return
    const normalizedIndex = (nextIndex + itemCount) % itemCount
    setActiveIndex(normalizedIndex)
    setLoadedIndexes((current) => {
      const next = new Set(current)
      next.add(normalizedIndex)
      next.add((normalizedIndex + 1) % itemCount)
      return next
    })
  }, [itemCount])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)
    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden)
    document.addEventListener("visibilitychange", updateVisibility)
    return () => document.removeEventListener("visibilitychange", updateVisibility)
  }, [])

  useEffect(() => {
    if (
      itemCount <= 1 ||
      paused ||
      interactionPaused ||
      reducedMotion ||
      !pageVisible
    ) return

    const timer = window.setInterval(() => {
      goToIndex(activeIndex + 1)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [activeIndex, goToIndex, interactionPaused, itemCount, pageVisible, paused, reducedMotion])

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setInteractionPaused(false)
    }
  }

  return {
    activeIndex,
    goToIndex,
    loadedIndexes,
    interactionProps: {
      onMouseEnter: () => setInteractionPaused(true),
      onMouseLeave: () => setInteractionPaused(false),
      onFocusCapture: () => setInteractionPaused(true),
      onBlurCapture: handleBlur,
    },
  }
}
