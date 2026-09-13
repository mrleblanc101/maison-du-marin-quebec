<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="hero">
    <ImagePlaceholder src="/images/hero.png" alt="La Maison du Marin, quai 26" />
    <div class="hero__scrim" />
    <div class="hero__content-wrap">
      <div class="hero__content">
        <div class="hero__surtitle">
          <span class="hero__surtitle-rule" />
          <span class="hero__surtitle-text">{{ t('hero.surtitle') }}</span>
        </div>
        <h1 class="hero__title">{{ t('hero.title') }}</h1>
        <p class="hero__subtitle">{{ t('hero.subtitle') }}</p>
        <p class="hero__paragraph">{{ t('hero.p1') }}</p>
        <p class="hero__paragraph">{{ t('hero.p2') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 420px;
  overflow: hidden;
  background: var(--color-navy);
  display: flex;
  align-items: center;
}

.hero__scrim {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    95deg,
    rgba(6, 28, 41, 0.94) 0px,
    rgba(6, 28, 41, 0.9) 560px,
    rgba(6, 28, 41, 0.8) 700px,
    rgba(6, 28, 41, 0.34) 1100px,
    rgba(6, 28, 41, 0.1) 100%
  );
}

.hero__content-wrap {
  position: relative;
  pointer-events: none;
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.hero__content {
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 28px;
}

.hero__content > * {
  max-width: 640px;
  min-width: 0;
}

.hero__surtitle {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.hero__surtitle-rule {
  width: 26px;
  height: 2px;
  background: #4fb6e8;
  display: block;
}

.hero__surtitle-text {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 600;
  color: #bfe4f7;
}

.hero__title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(48px, 6.4vw, 80px);
  line-height: 1.02;
  margin: 0 0 18px;
  letter-spacing: -0.015em;
  color: #ffffff;
}

.hero__subtitle {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(21px, 2.5vw, 28px);
  line-height: 1.35;
  color: #8fd3f4;
  margin: 0 0 22px;
  text-wrap: pretty;
}

.hero__paragraph {
  font-size: 16.5px;
  line-height: 1.68;
  color: #ffffff;
  margin: 0 0 14px;
  text-wrap: pretty;
}

.hero__paragraph:last-child {
  margin-bottom: 0;
}
</style>

<i18n lang="json">
{
  "fr": {
    "hero": {
      "surtitle": "Quai 26 · Port de Québec",
      "title": "Maison du Marin",
      "subtitle": "Où se rassemblent les marins du monde entier.",
      "p1": "Au cœur des installations portuaires, la Maison du Marin est un lieu chaleureux conçu pour accueillir tous les marins en escale au Port de Québec. Ouverte 365 jours par année, animée par des bénévoles dévoués.",
      "p2": "Que votre escale soit brève ou prolongée, c'est votre havre de bien-être à terre. Au plaisir de vous accueillir."
    }
  },
  "en": {
    "hero": {
      "surtitle": "Pier 26 · Port of Québec",
      "title": "Seamen's Club",
      "subtitle": "Where seafarers from around the world come together.",
      "p1": "At the heart of the port facilities, the Seamen's Club is a warm place built to welcome every sailor calling at the Port of Québec. Open 365 days a year, run by dedicated volunteers.",
      "p2": "Whether your call is short or long, this is your home away from home ashore. We look forward to welcoming you."
    }
  }
}
</i18n>
