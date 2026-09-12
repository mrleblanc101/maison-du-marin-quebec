<script setup lang="ts">
const { t } = useI18n()

const tileCount = 6
const railRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)

const TILE_SIZE = 300
const GAP = 12
const loopWidth = tileCount * (TILE_SIZE + GAP)

let raf = 0
let hover = false
let drag: { x: number; left: number; moved: boolean } | null = null

function wrap() {
  const rail = railRef.value
  if (!rail) return
  if (rail.scrollLeft >= loopWidth) rail.scrollLeft -= loopWidth
  else if (rail.scrollLeft < 0) rail.scrollLeft += loopWidth
}

function step() {
  const rail = railRef.value
  if (rail && !hover && !drag) {
    rail.scrollLeft += 0.5
    wrap()
  }
  raf = requestAnimationFrame(step)
}

function onEnter() {
  hover = true
}

function onLeave() {
  hover = false
}

function onPointerDown(e: PointerEvent) {
  const rail = railRef.value
  if (e.button !== 0 || !rail) return
  drag = { x: e.clientX, left: rail.scrollLeft, moved: false }
  rail.setPointerCapture(e.pointerId)
}

function onPointerMove(e: PointerEvent) {
  const rail = railRef.value
  if (!drag || !rail) return
  const dx = e.clientX - drag.x
  if (!drag.moved && Math.abs(dx) > 3) {
    drag.moved = true
    isDragging.value = true
  }
  if (drag.moved) {
    rail.scrollLeft = drag.left - dx
    wrap()
    drag.x = e.clientX
    drag.left = rail.scrollLeft
  }
}

function onPointerUp() {
  drag = null
  isDragging.value = false
}

function onDragStart(e: DragEvent) {
  e.preventDefault()
}

onMounted(() => {
  raf = requestAnimationFrame(step)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div class="gallery">
    <div class="gallery__header">
      <div>
        <div class="gallery__kicker">
          <span class="gallery__kicker-rule" />
          <span class="gallery__kicker-text">{{ t('gallery.kicker') }}</span>
        </div>
        <h2 class="gallery__title">{{ t('gallery.title') }}</h2>
      </div>
    </div>
    <div
      ref="railRef"
      class="gallery__rail"
      :class="{ 'gallery__rail--dragging': isDragging }"
      @pointerenter="onEnter"
      @pointerleave="onLeave"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @dragstart="onDragStart"
    >
      <div class="gallery__track">
        <div
          v-for="n in tileCount * 2"
          :key="n"
          class="gallery__tile"
          :aria-hidden="n > tileCount"
        >
          <ImagePlaceholder :label="`${t('gallery.item')} ${((n - 1) % tileCount) + 1}`" :radius="4" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  max-width: 1120px;
  margin: 0 auto;
  padding: 60px 28px 0;
}

.gallery__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.gallery__kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.gallery__kicker-rule {
  width: 26px;
  height: 2px;
  background: var(--color-blue);
  display: block;
}

.gallery__kicker-text {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-slate);
}

.gallery__title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(28px, 3.4vw, 40px);
  line-height: 1.1;
  margin: 0;
  color: var(--color-navy);
}

.gallery__rail {
  height: 300px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow-x: auto;
  overflow-y: hidden;
  cursor: grab;
  touch-action: pan-y;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.gallery__rail::-webkit-scrollbar {
  display: none;
}

.gallery__rail--dragging {
  cursor: grabbing;
}

.gallery__rail--dragging :deep(img) {
  pointer-events: none;
}

.gallery__track {
  display: flex;
  gap: 12px;
  padding: 0 28px;
  box-sizing: border-box;
  width: max-content;
}

.gallery__tile {
  position: relative;
  flex: 0 0 300px;
  width: 300px;
  min-width: 0;
  height: 300px;
  overflow: hidden;
  border-radius: 4px;
  -webkit-user-select: none;
  user-select: none;
}
</style>
