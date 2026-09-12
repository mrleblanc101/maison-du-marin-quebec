<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="photo-banner">
    <div class="photo-banner__frame">
      <ImagePlaceholder label="Photo — salle commune" :radius="4" />
    </div>
    <p class="photo-banner__caption">{{ t('photoCaption') }}</p>
  </div>
</template>

<style scoped>
.photo-banner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 56px 28px 0;
}

.photo-banner__frame {
  position: relative;
  aspect-ratio: 2.35 / 1;
  width: 100%;
  min-height: 0;
  border-radius: 4px;
  overflow: hidden;
}

.photo-banner__caption {
  font-size: 13.5px;
  color: var(--color-slate);
  margin: 12px 0 0;
}
</style>
