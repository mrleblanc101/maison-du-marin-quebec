<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        src?: string
        alt?: string
        label?: string
        radius?: number
        /**
         * 'fill' (default): absolutely fills a positioned, pre-sized parent, cropping
         * the image to match (used inside aspect-ratio boxes).
         * 'natural': sits in normal flow at its own height, width following the
         * image's intrinsic aspect ratio — no cropping, no ratio bookkeeping needed.
         */
        fit?: 'fill' | 'natural'
        /**
         * 'natural' mode has no reserved width — until the image decodes, it's
         * 0px wide (unknown intrinsic size), which breaks anything measuring
         * layout early (e.g. Swiper's loop mode sizing itself off 0-width
         * slides). Pass 'eager' there so the browser starts decoding
         * immediately instead of waiting for scroll proximity.
         */
        loading?: 'lazy' | 'eager'
    }>(),
    { radius: 0, fit: 'fill', loading: 'lazy' },
)

// Static `src="/images/..."` attributes get the app.baseURL prefix rewritten
// in automatically at build time, but this binds `src` dynamically, so the
// prefix has to be applied by hand.
const config = useRuntimeConfig()
const resolvedSrc = computed(() => {
    if (!props.src) return undefined
    const base = config.app.baseURL.replace(/\/$/, '')
    return `${base}${props.src}`
})
</script>

<template>
    <div
        class="image-placeholder"
        :class="`image-placeholder--${fit}`"
        :style="{ borderRadius: `${radius}px` }"
    >
        <img v-if="resolvedSrc" :src="resolvedSrc" :alt="alt || ''" :loading="loading" />
        <span v-else-if="label" class="image-placeholder__label">{{
            label
        }}</span>
    </div>
</template>

<style scoped>
.image-placeholder {
    overflow: hidden;
    background:
        repeating-linear-gradient(
            45deg,
            rgba(71, 106, 129, 0.06),
            rgba(71, 106, 129, 0.06) 10px,
            rgba(71, 106, 129, 0.1) 10px,
            rgba(71, 106, 129, 0.1) 20px
        ),
        #dfd6c6;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-placeholder--fill {
    position: absolute;
    inset: 0;
}

.image-placeholder--natural {
    height: 100%;
    width: max-content;
}

.image-placeholder--fill img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.image-placeholder--natural img {
    height: 100%;
    width: auto;
    display: block;
}

.image-placeholder__label {
    font-family: var(--font-sans);
    font-size: 13px;
    color: var(--color-slate);
    text-align: center;
    padding: 8px 16px;
}
</style>
