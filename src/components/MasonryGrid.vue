<template>
  <div ref="container" class="project-grid">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { onBeforeUnmount, onMounted, onUpdated, useTemplateRef } from 'vue'

  const container = useTemplateRef<HTMLDivElement>('container')
  const gap = 16
  const topPadding = 8
  let observer: ResizeObserver | undefined
  let frame: number | undefined

  function layout () {
    frame = undefined
    const element = container.value
    if (!element || element.clientWidth === 0) return

    const columns = Number(getComputedStyle(element).getPropertyValue('--masonry-columns')) || 1
    const cardWidth = (element.clientWidth - gap * (columns - 1)) / columns
    const cards = Array.from(element.children).filter((child): child is HTMLElement => child instanceof HTMLElement)
    const heights = Array.from({ length: columns }, () => topPadding)

    element.classList.add('is-positioned')
    for (const card of cards) {
      card.style.width = `${cardWidth}px`
    }

    const cardHeights = cards.map(card => card.getBoundingClientRect().height)
    for (const [index, card] of cards.entries()) {
      const column = heights.indexOf(Math.min(...heights))
      card.style.left = `${column * (cardWidth + gap)}px`
      card.style.top = `${heights[column]}px`
      heights[column] = heights[column]! + cardHeights[index]! + gap
    }

    element.style.height = `${cards.length > 0 ? Math.max(...heights) - gap : topPadding}px`
  }

  function scheduleLayout () {
    if (frame === undefined) frame = requestAnimationFrame(layout)
  }

  function observeCards () {
    observer?.disconnect()
    if (!container.value) return
    observer?.observe(container.value)
    for (const card of container.value.children) {
      observer?.observe(card)
    }
    scheduleLayout()
  }

  onMounted(() => {
    observer = new ResizeObserver(scheduleLayout)
    observeCards()
  })
  onUpdated(observeCards)
  onBeforeUnmount(() => {
    observer?.disconnect()
    if (frame !== undefined) cancelAnimationFrame(frame)
  })
</script>
