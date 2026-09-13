<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <div class="mission">
        <div class="mission__photo">
            <ImagePlaceholder
                src="/images/mission.png"
                alt="Équipage et bénévoles de la Maison du Marin"
                :radius="4"
            />
        </div>
        <div>
            <div class="mission__surtitle">
                <span class="mission__surtitle-rule" />
                <span class="mission__surtitle-text">{{
                    t('mission.surtitle')
                }}</span>
            </div>
            <h2 class="mission__title">{{ t('mission.title') }}</h2>
            <p class="mission__paragraph">{{ t('mission.p1') }}</p>
            <p class="mission__paragraph mission__paragraph--last">
                {{ t('mission.p2') }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.mission {
    max-width: var(--content-width);
    margin: 0 auto;
    padding: 60px 24px 0;
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

.mission__surtitle {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
}

.mission__surtitle-rule {
    width: 26px;
    height: 2px;
    background: var(--color-blue);
    display: block;
}

.mission__surtitle-text {
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

<i18n lang="json">
{
    "fr": {
        "mission": {
            "surtitle": "Notre mission",
            "title": "Bien plus qu'une simple pause",
            "p1": "Organisme à but non lucratif, la Maison du Marin répond aux besoins physiques, émotionnels et spirituels de tous les acteurs du Port. L'objectif : offrir un environnement accueillant qui fait office de véritable chez-soi.",
            "p2": "Membres d'équipage, partenaires commerciaux ou visiteurs — tous y sont chaleureusement accueillis. C'est une communauté portuaire où chacun se sent intégré et soutenu."
        }
    },
    "en": {
        "mission": {
            "surtitle": "Our mission",
            "title": "Far more than a place to rest",
            "p1": "As a not-for-profit, the Seamen's Club meets the physical, emotional and spiritual needs of everyone working at the Port. The goal: a welcoming environment that truly feels like home.",
            "p2": "Crew members, business partners and visitors alike are warmly received. It is a port community where everyone feels included and supported."
        }
    }
}
</i18n>
