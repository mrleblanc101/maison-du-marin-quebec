<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <div id="shuttle" class="shuttle">
        <div>
            <div class="shuttle__surtitle">
                <span class="shuttle__surtitle-rule" />
                <span class="shuttle__surtitle-text">{{
                    t('shuttle.surtitle')
                }}</span>
            </div>
            <h2 class="shuttle__title">{{ t('shuttle.title') }}</h2>
            <p class="shuttle__paragraph">{{ t('shuttle.p1') }}</p>
            <i18n-t
                keypath="shuttle.p2"
                tag="p"
                class="shuttle__paragraph shuttle__paragraph--last"
            >
                <template #phone>
                    <a href="tel:4186923376">{{ t('common.phone') }}</a>
                </template>
            </i18n-t>
        </div>
        <div class="shuttle__photo">
            <ImagePlaceholder
                src="/images/transport.jpg"
                alt="La navette de la Maison du Marin"
                :radius="4"
            />
        </div>
    </div>
</template>

<style scoped>
.shuttle {
    max-width: 1120px;
    margin: 0 auto;
    padding: 60px 24px 0;
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

.shuttle__surtitle {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
}

.shuttle__surtitle-rule {
    width: 26px;
    height: 2px;
    background: var(--color-blue);
    display: block;
}

.shuttle__surtitle-text {
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

<i18n lang="json">
{
    "fr": {
        "shuttle": {
            "surtitle": "Service de transport",
            "title": "La navette qui vous sort du quai",
            "p1": "Le territoire portuaire n'est pas fait pour les piétons. La navette de la Maison du Marin, conduite par nos bénévoles, vous emmène du navire à la Maison du Marin et vers la ville : épicerie, pharmacie, commerces et Vieux-Québec.",
            "p2": "Réservez à l'accueil ou par téléphone au {phone}. Les disponibilités varient selon les bénévoles en service."
        },
        "common": { "phone": "418 692-3376" }
    },
    "en": {
        "shuttle": {
            "surtitle": "Transport service",
            "title": "The shuttle that gets you off the pier",
            "p1": "Port grounds are no place to walk. The Seamen's Club shuttle, driven by our volunteers, takes you from the ship to the club and into town: grocery store, pharmacy, shops and Old Québec.",
            "p2": "Book at the front desk or by phone at {phone}. Availability depends on the volunteers on duty."
        },
        "common": { "phone": "418 692-3376" }
    }
}
</i18n>
