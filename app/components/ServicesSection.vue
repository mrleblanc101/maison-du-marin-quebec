<script setup lang="ts">
const { t, tm, rt } = useI18n()
</script>

<template>
    <div class="services">
        <h2 class="services__title">{{ t('services.title') }}</h2>
        <p class="services__subtitle">{{ t('services.subtitle') }}</p>
        <div class="services__grid">
            <div
                v-for="(item, i) in tm('services.items')"
                :key="i"
                class="services__card"
            >
                <span class="services__number">{{
                    String(i + 1).padStart(2, '0')
                }}</span>
                <h3 class="services__card-title">{{ rt(item.title) }}</h3>
                <p class="services__card-text">{{ rt(item.text) }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.services {
    max-width: 1120px;
    margin: 0 auto;
    padding: 56px 24px 0;
}

.services__title {
    font-family: var(--font-serif);
    font-weight: 500;
    font-size: clamp(28px, 3.4vw, 40px);
    line-height: 1.1;
    margin: 0 0 8px;
    color: var(--color-navy);
}

.services__subtitle {
    font-size: 15.5px;
    color: var(--color-slate);
    margin: 0 0 28px;
}

.services__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
}

.services__card {
    background: #ffffff;
    border: 1px solid var(--color-border-card);
    border-radius: 4px;
    padding: 24px 22px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.services__number {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-blue);
}

.services__card-title {
    font-size: 19px;
    font-weight: 600;
    margin: 0;
    color: var(--color-navy);
}

.services__card-text {
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--color-muted);
    margin: 0;
}

@media (min-width: 640px) {
    .services__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .services__grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
</style>

<i18n lang="json">
{
    "fr": {
        "services": {
            "title": "Services offerts",
            "subtitle": "Gratuits, sur place, pour tous les équipages en escale.",
            "items": [
                {
                    "title": "Espace communautaire",
                    "text": "Un salon avec billard, piano et fauteuils, pour se détendre et rencontrer d'autres équipages."
                },
                {
                    "title": "Cabine Wi-Fi",
                    "text": "Une cabine dédiée pour un appel privé et une connexion fiable à tout moment."
                },
                {
                    "title": "Dépanneur",
                    "text": "L'essentiel du quotidien, sans quitter le territoire portuaire."
                },
                {
                    "title": "Comptoir de vêtements",
                    "text": "Des morceaux adaptés au climat parfois rigoureux qui vous attend à terre."
                }
            ]
        }
    },
    "en": {
        "services": {
            "title": "Services on site",
            "subtitle": "Free, on site, for every crew in port.",
            "items": [
                {
                    "title": "Community lounge",
                    "text": "A living room with pool table, piano and armchairs — unwind and meet other crews."
                },
                {
                    "title": "Wi-Fi booth",
                    "text": "A private booth for calls home and a reliable connection any time."
                },
                {
                    "title": "Convenience store",
                    "text": "Everyday essentials, without leaving port grounds."
                },
                {
                    "title": "Clothing counter",
                    "text": "Warm gear suited to the sometimes harsh weather waiting for you ashore."
                }
            ]
        }
    }
}
</i18n>
