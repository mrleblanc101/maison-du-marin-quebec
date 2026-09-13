<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <div class="photo-banner">
        <div class="photo-banner__frame">
            <ImagePlaceholder
                src="/images/salon.jpg"
                alt="Salle commune de la Maison du Marin"
                :radius="4"
            />
        </div>
        <p class="photo-banner__caption">{{ t('photoCaption') }}</p>
    </div>
</template>

<style scoped>
.photo-banner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 56px 24px 0;
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

<i18n lang="json">
{
    "fr": {
        "photoCaption": "Une porte ouverte à quelques pas du quai, quelle que soit l'heure d'arrivée."
    },
    "en": {
        "photoCaption": "An open door steps from the pier, whatever time you come ashore."
    }
}
</i18n>
