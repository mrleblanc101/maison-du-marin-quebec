<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="site-header">
    <div class="site-header__logo-wrap">
      <div class="site-header__logo-bg" />
      <img
        src="/images/mdm-horizontal.svg"
        alt="La Maison du Marin Québec — Seamen's Club"
        class="site-header__logo"
      >
    </div>
    <div class="site-header__actions">
      <a :href="t('cta.href')" class="site-header__cta">
        <Icon :name="t('cta.icon')" class="site-header__cta-icon" />
        <span class="site-header__cta-label site-header__cta-label--mobile">{{ t('cta.label.mobile') }}</span>
        <span class="site-header__cta-label site-header__cta-label--desktop">{{ t('cta.label.desktop') }}</span>
      </a>
      <LangSwitch />
    </div>
  </div>
</template>

<style scoped>
.site-header {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px 12px;
  width: 100%;
  z-index: 1;
  top: 0;
  filter: drop-shadow(0 1px 0 var(--color-border)) drop-shadow(0 2px 10px rgba(14, 51, 72, 0.07));
  background-color: var(--color-bg);
}

.site-header__logo-wrap {
  clip-path: polygon(0 0, 100% 0, calc(100% - 82px) 100%, 0 100%);
  padding: 10px 96px 10px 16px;
  flex: 0 1 auto;
  margin-bottom: -100px;
  margin-right: -96px;
  background-color: var(--color-bg);
}

.site-header__logo-bg {
  position: absolute;
  z-index: -1;
  inset: 0;
  background-color: var(--color-bg);
  clip-path: polygon(0 0, 100% 0, calc(100% - 82px) 100%, 0 100%);
}

.site-header__logo {
  width: 140px;
  max-width: 100%;
  display: block;
  mix-blend-mode: multiply;
}

.site-header__actions {
    position: relative;
  display: flex;
  gap: 8px;
  padding: 10px 16px 10px 0;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
}

@media (min-width: 640px) {
  .site-header__actions {
    gap: 14px;
  }
}

.site-header__cta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background: var(--color-blue);
  padding: 8px 18px;
  border-radius: 999px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 140ms ease;
}

.site-header__cta-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin: -1px;
}

.site-header__cta-label--desktop {
  display: none;
}

@media (min-width: 640px) {
  .site-header__cta-label--mobile {
    display: none;
  }

  .site-header__cta-label--desktop {
    display: inline;
  }
}

.site-header__cta:hover {
  background: var(--color-navy);
  color: #ffffff;
}
</style>

<i18n lang="json">
{
  "fr": {
    "cta": { "label": { "mobile": "Donner", "desktop": "Faire un don" }, "href": "#donation", "icon": "lucide:heart-handshake" }
  },
  "en": {
    "cta": { "label": { "mobile": "Transport", "desktop": "Request a ride" }, "href": "#shuttle", "icon": "lucide:car-taxi-front" }
  }
}
</i18n>
