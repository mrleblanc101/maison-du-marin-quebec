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
        <p class="hero__paragraph">
            {{ t('hero.p1') }}<br>
            {{ t('hero.p2') }}
        </p>
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
  /* Distance from the hero's edge to hero__content's left edge (it's
     centered with a 1120px max-width) — the scrim's gradient is anchored
     to this so it always lines up with the content, not the section. */
  --hero-content-start: max(0px, (100vw - 1120px) / 2);
}

.hero__scrim {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    95deg,
    rgba(6, 28, 41, 0.94) 0,
    rgba(6, 28, 41, 0.94) var(--hero-content-start),
    rgba(6, 28, 41, 0.9) calc(var(--hero-content-start) + 560px),
    rgba(6, 28, 41, 0.8) calc(var(--hero-content-start) + 700px),
    rgba(6, 28, 41, 0.34) calc(var(--hero-content-start) + 1100px),
    rgba(6, 28, 41, 0.1) 100%
  );
}

.hero__content-wrap {
  position: relative;
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.hero__content {
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 24px;
}

.hero__content > * {
  max-width: 640px;
  width: 100%;
  min-width: 0;
  @media (min-width: 768px) {
    width: 66%;
  }
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
  font-size: clamp(44px, 6.4vw, 80px);
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
  text-wrap: balance;
}

.hero__paragraph {
  font-size: 16.5px;
  line-height: 1.68;
  color: #ffffff;
  margin: 0 0 14px;
  text-wrap: balance;
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
      "p2": "Au plaisir de vous accueillir."
    }
  },
  "en": {
    "hero": {
      "surtitle": "Pier 26 · Port of Québec",
      "title": "Seamen's Club",
      "subtitle": "Where seafarers from around the world come together.",
      "p1": "At the heart of the port facilities, the Seamen's Club is a warm place built to welcome every sailor calling at the Port of Québec. Open 365 days a year, run by dedicated volunteers.",
      "p2": "We look forward to welcoming you."
    }
  }
}
</i18n>
