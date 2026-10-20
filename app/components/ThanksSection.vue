<script setup lang="ts">
const { t, locale } = useI18n()

// Static `src="/images/..."` attributes get the app.baseURL prefix at build time, but the
// qcescf logo's src is bound dynamically, so the prefix has to be applied by hand.
const { baseURL } = useRuntimeConfig().app
</script>

<template>
    <div v-reveal class="thanks-wrap">
        <div class="thanks">
            <div class="thanks__body">
                <div class="thanks__label">{{ t('thanks.label') }}</div>
                <i18n-t keypath="thanks.text" tag="p" class="thanks__text">
                    <template #port>
                        <strong>{{ t('thanks.port') }}</strong>
                    </template>
                    <template #cpbsl>
                        <strong>{{ t('thanks.cpbsl') }}</strong>
                    </template>
                    <template #qcescf>
                        <strong>{{ t('thanks.qcescf') }}</strong>
                    </template>
                    <template #issc>
                        <strong>{{ t('thanks.issc') }}</strong>
                    </template>
                </i18n-t>
            </div>
            <div class="thanks__logos">
                <img
                    src="/images/cpbsl.png"
                    alt="Corporation des pilotes du Bas Saint-Laurent"
                    class="thanks__logo thanks__logo--cpbsl"
                />
                <img
                    src="/images/port-quebec.svg"
                    alt="Port de Québec"
                    class="thanks__logo thanks__logo--port"
                />
                <img
                    :src="`${baseURL}images/qcescf-${locale === 'en' ? 'en' : 'fr'}.png`"
                    :alt="t('thanks.qcescf')"
                    class="thanks__logo thanks__logo--qcescf"
                />
                <img
                    src="/images/issc.png"
                    alt="International Sailors' Society Canada"
                    class="thanks__logo thanks__logo--issc"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.thanks-wrap {
    max-width: var(--content-width);
    margin: 56px auto 0;
    padding: 0 24px;
}

.thanks {
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    padding-top: 36px;
    padding-bottom: 36px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
}

.thanks__label {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-slate);
    margin-bottom: 10px;
}

.thanks__text {
    font-size: 16px;
    line-height: 1.65;
    color: var(--color-body);
    margin: 0;
    max-width: 46ch;
    text-wrap: pretty;
}

.thanks__text :deep(strong) {
    font-weight: 600;
    color: var(--color-ink);
}

.thanks__logos {
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
    justify-items: start;
    gap: 24px 28px;
    width: 100%;
    max-width: 400px;
}

@media (min-width: 768px) {
    .thanks {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .thanks__body {
        flex: 1 1 260px;
    }

    .thanks__logos {
        flex: 0 1 400px;
        justify-items: center;
    }
}

.thanks__logo {
    display: block;
    max-width: 100%;
}

.thanks__logo--port {
    width: 168px;
    height: auto;
}

.thanks__logo--cpbsl {
    width: 96px;
    height: auto;
}

.thanks__logo--qcescf {
    width: 160px;
    height: auto;
}

.thanks__logo--issc {
    width: 100%;
    height: auto;
}
</style>

<i18n lang="json">
{
    "fr": {
        "thanks": {
            "label": "Remerciements",
            "text": "Merci au {port}, à la {cpbsl}, à la {qcescf} et à l'{issc} pour leur soutien fidèle à la Maison du Marin.",
            "port": "Port de Québec",
            "cpbsl": "Corporation des pilotes du Bas Saint-Laurent",
            "qcescf": "Fondation de la communauté d'expression anglaise de Québec",
            "issc": "International Sailors' Society Canada"
        }
    },
    "en": {
        "thanks": {
            "label": "With thanks",
            "text": "Our thanks to the {port}, the {cpbsl}, the {qcescf} and {issc} for their steadfast support of the Seamen's Club.",
            "port": "Port of Québec",
            "cpbsl": "Corporation des pilotes du Bas Saint-Laurent",
            "qcescf": "Quebec City English-Speaking Community Foundation",
            "issc": "International Sailors' Society Canada"
        }
    }
}
</i18n>
