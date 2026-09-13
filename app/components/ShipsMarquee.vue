<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const { t } = useI18n()

const modules = [Autoplay, FreeMode]
</script>

<template>
    <div v-reveal class="gallery">
        <div class="gallery__header">
            <div>
                <div class="gallery__surtitle">
                    <span class="gallery__surtitle-rule" />
                    <span class="gallery__surtitle-text">{{
                        t('gallery.surtitle')
                    }}</span>
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
                :observer="true"
                :observe-parents="true"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }"
            >
                <SwiperSlide
                    v-for="(n, i) in [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]"
                    :key="i"
                    class="gallery__tile"
                >
                    <ImagePlaceholder
                        :src="`/images/marquee/bateau-${n}.webp`"
                        :alt="`${t('gallery.item')} ${n}`"
                        :radius="4"
                        fit="natural"
                        loading="eager"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<style scoped>
.gallery {
    max-width: var(--content-width);
    margin: 0 auto;
    padding: 60px 24px 0;
}

.gallery__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.gallery__surtitle {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
}

.gallery__surtitle-rule {
    width: 26px;
    height: 2px;
    background: var(--color-blue);
    display: block;
}

.gallery__surtitle-text {
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
    padding: 0 24px;
}

.gallery__tile {
    position: relative;
    height: 300px;
    width: auto;
    /* Width otherwise comes purely from the photo's decoded intrinsic size,
       so the slide is genuinely 0px wide until it loads. Swiper measures
       slide width at init — with every slide reporting 0px it concludes it
       needs far more than are present to fill one view, and logs the loop
       warning (observer/observeParents below fix the resulting layout once
       images do load, but by then the warning already fired). A sane
       minimum means Swiper never sees a 0px slide in the first place. */
    min-width: 220px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 4px;
    -webkit-user-select: none;
    user-select: none;
    margin-right: 12px;
}

.gallery__swiper :deep(img) {
    pointer-events: none;
}
</style>

<i18n lang="json">
{
    "fr": {
        "gallery": {
            "surtitle": "En images",
            "title": "Les bateaux en visite",
            "item": "Publication"
        }
    },
    "en": {
        "gallery": {
            "surtitle": "In pictures",
            "title": "Ships calling at the port",
            "item": "Post"
        }
    }
}
</i18n>
