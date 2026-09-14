<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <div class="hero">
        <ImagePlaceholder
            class="hero__image"
            src="/images/hero.jpg"
            alt="La Maison du Marin, quai 26"
        />
        <div class="hero__content-wrap">
            <div class="hero__content">
                <div v-reveal="{ delay: 0 }" class="hero__surtitle">
                    <span class="hero__surtitle-rule" />
                    <span class="hero__surtitle-text">{{
                        t('hero.surtitle')
                    }}</span>
                </div>
                <h1 v-reveal="{ delay: 120 }" class="hero__title">
                    {{ t('hero.title') }}
                </h1>
                <p v-reveal="{ delay: 240 }" class="hero__subtitle">
                    {{ t('hero.subtitle') }}
                </p>
                <p v-reveal="{ delay: 360 }" class="hero__paragraph">
                    {{ t('hero.p1') }}<br />
                    {{ t('hero.p2') }}
                </p>
                <SocialLinks v-reveal="{ delay: 480 }" class="hero__social" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero {
    position: relative;
    width: 100%;
    min-height: 60vh;
    overflow: hidden;
    background: var(--color-navy);
    display: flex;
}

.hero__image :deep(img) {
    object-position: 80% 90%;
}

.hero__content-wrap {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: var(--content-width);
    margin: 0 auto;
    width: 100%;
    padding: 80px 24px;
    z-index: 0;
}

.hero__content-wrap::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    width: calc((100vw - var(--content-width)) / 2);
    pointer-events: none;
    background: rgba(6, 28, 41, 0.85);
}

.hero__content-wrap::after {
    z-index: -1;
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    max-width: var(--content-width);
    width: 120%;
    background: linear-gradient(
        90deg,
        rgba(6, 28, 41, 0.85) 0%,
        rgba(6, 28, 41, 0.82) 43.75%,
        rgba(6, 28, 41, 0.72) 54.6875%,
        rgba(6, 28, 41, 0.3) 85.9375%,
        rgba(6, 28, 41, 0) 100%
    );
}

.hero__content {
    margin: auto 0;
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

.hero__social {
    margin-top: 22px;
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
