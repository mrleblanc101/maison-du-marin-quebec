<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="mission">
    <div class="mission__photo">
      <ImagePlaceholder label="Photo — équipage, bénévoles, salle commune" :radius="4" />
    </div>
    <div>
      <div class="mission__kicker">
        <span class="mission__kicker-rule" />
        <span class="mission__kicker-text">{{ t('mission.kicker') }}</span>
      </div>
      <h2 class="mission__title">{{ t('mission.title') }}</h2>
      <p class="mission__paragraph">{{ t('mission.p1') }}</p>
      <p class="mission__paragraph mission__paragraph--last">{{ t('mission.p2') }}</p>
    </div>
  </div>
</template>

<style scoped>
.mission {
  max-width: 1120px;
  margin: 0 auto;
  padding: 60px 28px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 44px;
  align-items: center;
}

.mission__photo {
  position: relative;
  aspect-ratio: 3 / 2;
  width: 100%;
  min-height: 0;
  border-radius: 4px;
  overflow: hidden;
}

.mission__kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.mission__kicker-rule {
  width: 26px;
  height: 2px;
  background: var(--color-blue);
  display: block;
}

.mission__kicker-text {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-slate);
}

.mission__title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(28px, 3.4vw, 40px);
  line-height: 1.12;
  margin: 0 0 20px;
  color: var(--color-navy);
  text-wrap: pretty;
}

.mission__paragraph {
  font-size: 16.5px;
  line-height: 1.68;
  color: var(--color-body);
  margin: 0 0 14px;
  text-wrap: pretty;
}

.mission__paragraph--last {
  margin-bottom: 0;
}
</style>
