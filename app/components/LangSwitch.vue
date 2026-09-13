<script setup lang="ts">
const { locale, setLocale } = useI18n()

const otherLocale = computed(() => (locale.value === 'fr' ? 'en' : 'fr'))
</script>

<template>
  <div class="lang-switch">
    <button
      type="button"
      class="lang-switch__mobile-btn"
      @click="setLocale(otherLocale)"
    >
      {{ otherLocale.toUpperCase() }}
    </button>
    <div class="lang-switch__toggle">
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
  </div>
</template>

<style scoped>
.lang-switch__mobile-btn {
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 8px 14px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: var(--color-border-soft);
  color: var(--color-slate);
  transition: background 140ms ease, color 140ms ease;
}

.lang-switch__mobile-btn:hover {
  background: var(--color-blue);
  color: #ffffff;
}

.lang-switch__toggle {
  display: none;
}

@media (min-width: 640px) {
  .lang-switch__mobile-btn {
    display: none;
  }

  .lang-switch__toggle {
    display: flex;
    gap: 4px;
    padding: 4px;
    background: var(--color-border-soft);
    border-radius: 999px;
  }
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
