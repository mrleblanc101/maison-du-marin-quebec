<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const { t } = useI18n()

const modules = [Autoplay, FreeMode]
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
    <div class="gallery__rail-wrap">
      <Swiper
        class="gallery__swiper"
        :modules="modules"
        slides-per-view="auto"
        :space-between="12"
        :loop="true"
        :free-mode="true"
        :grab-cursor="true"
        :speed="5000"
        :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }"
      >
        <SwiperSlide v-for="n in [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]" :key="n" class="gallery__tile">
          <ImagePlaceholder :label="`${t('gallery.item')} ${n}`" :radius="4" />
        </SwiperSlide>
      </Swiper>
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

.gallery__rail-wrap {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.gallery__swiper {
  height: 300px;
  padding: 0 28px;
}

.gallery__tile {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 4px;
  -webkit-user-select: none;
  user-select: none;
}

.gallery__swiper :deep(img) {
  pointer-events: none;
}
</style>
