<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const otherLocale = computed(() => (locale.value === 'fr' ? 'en' : 'fr'))
</script>

<template>
    <div class="lang-switch">
        <NuxtLink
            :to="switchLocalePath(otherLocale)"
            class="lang-switch__mobile-btn"
        >
            {{ otherLocale.toUpperCase() }}
        </NuxtLink>
        <div class="lang-switch__toggle">
            <NuxtLink
                :to="switchLocalePath('fr')"
                class="lang-switch__btn"
                :class="{ 'lang-switch__btn--active': locale === 'fr' }"
            >
                FR
            </NuxtLink>
            <NuxtLink
                :to="switchLocalePath('en')"
                class="lang-switch__btn"
                :class="{ 'lang-switch__btn--active': locale === 'en' }"
            >
                EN
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.lang-switch__mobile-btn {
    display: inline-block;
    font: inherit;
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.08em;
    padding: 8px 14px;
    border-radius: 999px;
    text-decoration: none;
    background: var(--color-border-soft);
    color: var(--color-slate);
    transition:
        background 140ms ease,
        color 140ms ease;
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
    display: inline-block;
    font: inherit;
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.08em;
    padding: 5px 13px;
    border-radius: 999px;
    text-decoration: none;
    background: transparent;
    color: var(--color-slate);
    transition:
        background 140ms ease,
        color 140ms ease;
}

.lang-switch__btn--active {
    background: var(--color-blue);
    color: #ffffff;
}
</style>
