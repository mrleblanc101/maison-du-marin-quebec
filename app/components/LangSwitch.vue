<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>

<template>
  <div class="lang-switch">
    <button
      type="button"
      class="lang-switch__btn"
      :class="{ 'lang-switch__btn--active': locale === 'fr' }"
      @click="setLocale('fr')"
    >
      FR
    </button>
    <button
      type="button"
      class="lang-switch__btn"
      :class="{ 'lang-switch__btn--active': locale === 'en' }"
      @click="setLocale('en')"
    >
      EN
    </button>
  </div>
</template>

<style scoped>
.lang-switch {
  display: flex;
  gap: 4px;
  padding: 4px;
  background: var(--color-border-soft);
  border-radius: 999px;
}

.lang-switch__btn {
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 5px 13px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--color-slate);
  transition: background 140ms ease, color 140ms ease;
}

.lang-switch__btn--active {
  background: var(--color-blue);
  color: #ffffff;
}
</style>
