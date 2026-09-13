<script setup lang="ts">
const { t } = useI18n()

const SITE_URL = 'https://mrleblanc101.github.io/maison-du-marin-quebec'
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`

// Auto-generated <html lang>, canonical link, and hreflang alternates for
// every configured locale (fr at `/`, en at `/en`, per i18n.baseUrl above).
const localeHead = useLocaleHead({ lang: true, seo: true })
useHead(localeHead)

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.description'),
  ogType: 'website',
  ogSiteName: () => t('seo.orgName'),
  ogImage: OG_IMAGE,
  ogImageWidth: 1200,
  ogImageHeight: 800,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.title'),
  twitterDescription: () => t('seo.description'),
  twitterImage: OG_IMAGE
})

useHead({
  meta: [{ name: 'theme-color', content: '#0e3348' }]
})
</script>

<template>
    <NuxtPage />
</template>

<i18n lang="json">
{
  "fr": {
    "seo": {
      "orgName": "La Maison du Marin Québec",
      "title": "La Maison du Marin Québec — Où se rassemblent les marins du monde entier.",
      "description": "Au cœur des installations portuaires, la Maison du Marin est un lieu chaleureux conçu pour accueillir tous les marins en escale au Port de Québec."
    }
  },
  "en": {
    "seo": {
      "orgName": "Québec Seamen's Club",
      "title": "Québec Seamen's Club — Where seafarers from around the world come together.",
      "description": "At the heart of the port facilities, the Seamen's Club is a warm place built to welcome every sailor calling at the Port of Québec."
    }
  }
}
</i18n>
