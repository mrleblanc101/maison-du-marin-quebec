<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="shuttle">
    <div>
      <div class="shuttle__kicker">
        <span class="shuttle__kicker-rule" />
        <span class="shuttle__kicker-text">{{ t('shuttle.kicker') }}</span>
      </div>
      <h2 class="shuttle__title">{{ t('shuttle.title') }}</h2>
      <p class="shuttle__paragraph">{{ t('shuttle.p1') }}</p>
      <i18n-t keypath="shuttle.p2" tag="p" class="shuttle__paragraph shuttle__paragraph--last">
        <template #phone>
          <a href="tel:4186923376">{{ t('common.phone') }}</a>
        </template>
      </i18n-t>
    </div>
    <div class="shuttle__photo">
      <ImagePlaceholder label="Photo — la navette de la Maison du Marin" :radius="4" />
    </div>
  </div>
</template>

<style scoped>
.shuttle {
  max-width: 1120px;
  margin: 0 auto;
  padding: 60px 28px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 44px;
  align-items: center;
}

.shuttle__photo {
  position: relative;
  aspect-ratio: 3 / 2;
  width: 100%;
  min-height: 0;
  border-radius: 4px;
  overflow: hidden;
}

.shuttle__kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.shuttle__kicker-rule {
  width: 26px;
  height: 2px;
  background: var(--color-blue);
  display: block;
}

.shuttle__kicker-text {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-slate);
}

.shuttle__title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(28px, 3.4vw, 40px);
  line-height: 1.12;
  margin: 0 0 20px;
  color: var(--color-navy);
  text-wrap: pretty;
}

.shuttle__paragraph {
  font-size: 16.5px;
  line-height: 1.68;
  color: var(--color-body);
  margin: 0 0 14px;
  text-wrap: pretty;
}

.shuttle__paragraph--last {
  margin-bottom: 0;
}
</style>
