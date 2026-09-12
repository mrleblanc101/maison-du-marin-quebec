<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'fr' }
})
</script>

<template>
  <div class="page">
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <HeroSection />
    <InfoStrip />
    <PhotoBanner />
    <ServicesSection />
    <MissionSection />
    <ShuttleSection />
    <DonationSection />
    <ShipsMarquee />
    <ThanksSection />
    <SiteFooter />
  </div>
</template>

<style scoped>
.page {
  font-family: var(--font-sans);
  color: var(--color-ink);
  background: var(--color-bg);
  min-height: 100%;
}
</style>
