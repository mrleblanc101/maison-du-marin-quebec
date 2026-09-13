<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <div class="footer">
        <img
            src="/images/mdm-vertical.svg"
            alt="La Maison du Marin Québec — Seamen's Club"
            class="footer__logo"
        />
        <div class="footer__side">
            <SocialLinks :size="44" />
            <div class="footer__copyright">{{ t('footer.copyright') }}</div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    max-width: 1120px;
    margin: 0 auto;
    padding: 44px 24px 56px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 28px;
    flex-wrap: wrap;
}

.footer__logo {
    width: 120px;
    height: auto;
    display: block;
    mix-blend-mode: multiply;
}

.footer__side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 14px;
}

.footer__copyright {
    font-size: 12.5px;
    color: var(--color-footer-muted);
    text-align: right;
}
</style>

<i18n lang="json">
{
    "fr": {
        "footer": { "copyright": "© La Maison du Marin Québec" }
    },
    "en": {
        "footer": { "copyright": "© La Maison du Marin Québec" }
    }
}
</i18n>
