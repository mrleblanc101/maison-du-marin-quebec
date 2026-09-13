<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <div class="thanks-wrap">
        <div class="thanks">
            <div>
                <div class="thanks__label">{{ t('thanks.label') }}</div>
                <i18n-t keypath="thanks.text" tag="p" class="thanks__text">
                    <template #port>
                        <strong>{{ t('thanks.port') }}</strong>
                    </template>
                    <template #cpbsl>
                        <strong>{{ t('thanks.cpbsl') }}</strong>
                    </template>
                </i18n-t>
            </div>
            <div class="thanks__logos">
                <img
                    src="/images/port-quebec.svg"
                    alt="Port de Québec"
                    class="thanks__logo thanks__logo--port"
                />
                <img
                    src="/images/cpbsl.png"
                    alt="Corporation des pilotes du Bas Saint-Laurent"
                    class="thanks__logo thanks__logo--cpbsl"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.thanks-wrap {
    max-width: 1120px;
    margin: 56px auto 0;
    padding: 0 24px;
}

.thanks {
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    padding-top: 36px;
    padding-bottom: 36px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 32px;
    align-items: center;
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
    display: flex;
    align-items: center;
    gap: 36px;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.thanks__logo {
    display: block;
}

.thanks__logo--port {
    width: 168px;
    height: auto;
}

.thanks__logo--cpbsl {
    width: 96px;
    height: auto;
}
</style>

<i18n lang="json">
{
    "fr": {
        "thanks": {
            "label": "Remerciements",
            "text": "Merci au {port} et à la {cpbsl} pour leur soutien fidèle à la Maison du Marin.",
            "port": "Port de Québec",
            "cpbsl": "Corporation des pilotes du Bas Saint-Laurent"
        }
    },
    "en": {
        "thanks": {
            "label": "With thanks",
            "text": "Our thanks to the {port} and the {cpbsl} for their steadfast support of the Seamen's Club.",
            "port": "Port of Québec",
            "cpbsl": "Corporation des pilotes du Bas Saint-Laurent"
        }
    }
}
</i18n>
