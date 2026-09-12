<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string
    alt?: string
    label?: string
    radius?: number
  }>(),
  { radius: 0 }
)
</script>

<template>
  <div class="image-placeholder" :style="{ borderRadius: `${radius}px` }">
    <img v-if="src" :src="src" :alt="alt || ''" loading="lazy">
    <span v-else-if="label" class="image-placeholder__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.image-placeholder {
  position: absolute;
  inset: 0;
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

.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
