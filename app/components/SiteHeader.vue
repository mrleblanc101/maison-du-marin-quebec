<script setup lang="ts">
const { t } = useI18n()
const headerVisible = useHeadroom()
</script>

<template>
    <div class="site-header-sticky">
        <div
            class="site-header"
            :class="{ 'site-header--hidden': !headerVisible }"
        >
            <div class="site-header__logo-wrap">
                <div class="site-header__logo-bg" />
                <img
                    src="/images/mdm-horizontal.svg"
                    alt="La Maison du Marin Québec — Seamen's Club"
                    class="site-header__logo"
                />
            </div>
            <div class="site-header__actions">
                <a :href="t('cta.href')" class="site-header__cta">
                    <Icon :name="t('cta.icon')" class="site-header__cta-icon" />
                    <span
                        class="site-header__cta-label site-header__cta-label--mobile"
                        >{{ t('cta.label.mobile') }}</span
                    >
                    <span
                        class="site-header__cta-label site-header__cta-label--desktop"
                        >{{ t('cta.label.desktop') }}</span
                    >
                </a>
                <LangSwitch />
            </div>
        </div>
    </div>
</template>

<style scoped>
/*
 * Sticky positioning lives on this wrapper, kept free of filter/transform.
 * On iOS Safari, position: sticky recalculates every scroll frame — combined
 * with an animated transform *and* a filter (drop-shadow) on the very same
 * element, that recalculation fights the transition and both become
 * expensive to recomposite, which is what caused the stutter. Splitting them
 * across two elements keeps sticky's per-frame work cheap, while the inner
 * element's filter+transform (which must stay together so the shadow tracks
 * the header as it hides) get their own promoted GPU layer instead.
 */
.site-header-sticky {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
}

.site-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 8px 12px;
    width: 100%;
    filter: drop-shadow(0 1px 0 var(--color-border))
        drop-shadow(0 2px 10px rgba(14, 51, 72, 0.07));
    background-color: var(--color-bg);
    transition: transform 320ms ease;
    will-change: transform;
    backface-visibility: hidden;
}

.site-header--hidden {
    transform: translateY(-90px);
}

@media (prefers-reduced-motion: reduce) {
    .site-header {
        transition: none;
    }
}

.site-header__logo-wrap {
    clip-path: polygon(0 0, 100% 0, calc(100% - 82px) 100%, 0 100%);
    padding: 10px 96px 10px 16px;
    flex: 0 1 auto;
    margin-bottom: -36px;
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
        "cta": {
            "label": { "mobile": "Donner", "desktop": "Faire un don" },
            "href": "#donation",
            "icon": "lucide:heart-handshake"
        }
    },
    "en": {
        "cta": {
            "label": { "mobile": "Transport", "desktop": "Request transport" },
            "href": "#shuttle",
            "icon": "lucide:car-taxi-front"
        }
    }
}
</i18n>
