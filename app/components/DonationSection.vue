<script setup lang="ts">
const { t, tm, rt } = useI18n()
</script>

<template>
    <div id="donation" v-reveal class="donation-wrap">
        <div class="donation">
            <div class="donation__intro">
                <div class="donation__surtitle">
                    {{ t('donation.surtitle') }}
                </div>
                <h2 class="donation__title">{{ t('donation.title') }}</h2>
                <p class="donation__paragraph">{{ t('donation.p1') }}</p>
                <p class="donation__paragraph donation__paragraph--last">
                    {{ t('donation.p2') }}
                </p>
                <div class="donation__card">
                    <div class="donation__card-label">
                        {{ t('donation.phone.label') }}
                    </div>
                    <i18n-t
                        keypath="donation.phone.text"
                        tag="div"
                        class="donation__card-text"
                    >
                        <template #phone>
                            <a
                                href="tel:4186923376"
                                class="donation__phone-link"
                                >{{ t('common.phone') }}</a
                            >
                        </template>
                    </i18n-t>
                </div>
            </div>
            <div class="donation__cards">
                <div v-reveal="{ delay: 0 }" class="donation__card">
                    <div class="donation__card-label">
                        {{ t('donation.onsite.label') }}
                    </div>
                    <div class="donation__card-text">
                        {{ t('donation.onsite.text') }}
                    </div>
                </div>
                <div v-reveal="{ delay: 120 }" class="donation__card">
                    <div class="donation__card-label">
                        {{ t('donation.mail.label') }}
                    </div>
                    <div class="donation__card-text">
                        <template
                            v-for="(line, i) in tm('donation.mail.lines')"
                            :key="i"
                        >
                            {{ rt(line)
                            }}<br
                                v-if="i < tm('donation.mail.lines').length - 1"
                            />
                        </template>
                    </div>
                </div>
                <div v-reveal="{ delay: 240 }" class="donation__card">
                    <div class="donation__card-label">
                        {{ t('donation.online.label') }}
                    </div>
                    <div class="donation__card-text">
                        {{ t('donation.online.text') }}
                    </div>
                    <a
                        :href="t('donation.online.href')"
                        target="_blank"
                        rel="noopener"
                        class="donation__online-btn"
                    >
                        {{ t('donation.online.cta') }}
                        <Icon
                            name="lucide:external-link"
                            class="donation__online-icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.donation-wrap {
    max-width: var(--content-width);
    margin: 60px auto 0;
    padding: 0 24px;
}

.donation {
    background: var(--color-blue);
    border-radius: 6px;
    padding: clamp(30px, 4vw, 52px);
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 36px;
    align-items: start;
}

@media (min-width: 768px) {
    .donation {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

.donation__surtitle {
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 700;
    color: #bfe4f7;
    margin-bottom: 14px;
}

.donation__title {
    font-family: var(--font-serif);
    font-weight: 500;
    font-size: clamp(28px, 3.6vw, 42px);
    line-height: 1.1;
    margin: 0 0 16px;
    color: #ffffff;
    text-wrap: pretty;
}

.donation__paragraph {
    font-size: 16px;
    line-height: 1.65;
    color: #ffffff;
    margin: 0 0 10px;
    max-width: 46ch;
    text-wrap: pretty;
}

.donation__paragraph--last {
    margin-bottom: 0;
}

.donation__intro .donation__card {
    background: none;
    padding: 0;
    margin-top: 20px;
}

.donation__intro .donation__card-label {
    color: #bfe4f7;
}

.donation__intro .donation__card-text {
    color: #ffffff;
}

.donation__intro .donation__phone-link {
    color: #ffffff;
    border-bottom-color: rgba(255, 255, 255, 0.5);
}

.donation__cards {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.donation__card {
    background: #ffffff;
    border-radius: 4px;
    padding: 18px 20px;
}

.donation__card-label {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-blue);
    margin-bottom: 6px;
}

.donation__card-text {
    font-size: 15px;
    line-height: 1.55;
    color: var(--color-ink);
}

.donation__phone-link {
    color: var(--color-ink);
    text-decoration: none;
    border-bottom: 1px solid #9fcfe8;
}

.donation__online-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
    background: var(--color-blue);
    padding: 8px 16px;
    border-radius: 999px;
    text-decoration: none;
    white-space: nowrap;
    transition: background 140ms ease;
}

.donation__online-btn:hover {
    background: var(--color-navy);
    color: #ffffff;
}

.donation__online-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}
</style>

<i18n lang="json">
{
    "fr": {
        "donation": {
            "surtitle": "Soutenir la Maison du Marin",
            "title": "Faire un don",
            "p1": "La Maison du Marin prospère grâce à la générosité de ses donateurs, de ses bénévoles et de partenaires engagés.",
            "p2": "Chaque don soutient directement les activités et l'accueil des équipages.",
            "online": {
                "label": "En ligne",
                "text": "Faites un don sécurisé en quelques clics grâce à CanaDon.",
                "cta": "Faire un don en ligne",
                "href": "https://www.canadahelps.org/fr/organismesdebienfaisance/la-maison-du-marin-de-quebec-quebec-seamens-institute/"
            },
            "onsite": {
                "label": "Sur place",
                "text": "Boîte de dons à l'accueil de la Maison du Marin, quai 26."
            },
            "mail": {
                "label": "Par la poste",
                "lines": [
                    "Chèque libellé à la Maison du Marin",
                    "Quai 26, Port de Québec, CP 80, Succ. Haute-Ville, Québec (QC) G1R 4M8"
                ]
            },
            "phone": {
                "label": "Nous parler",
                "text": "Pour les dons majeurs, dons de vêtements, commandites et partenariats, contactez-nous au {phone}."
            }
        },
        "common": { "phone": "418 692-3376" }
    },
    "en": {
        "donation": {
            "surtitle": "Support the Seamen's Club",
            "title": "Make a donation",
            "p1": "The Seamen's Club thrives on the generosity of its donors, volunteers and committed partners.",
            "p2": "Every gift directly supports its activities and the welcome extended to crews.",
            "online": {
                "label": "Online",
                "text": "Give securely in just a few clicks through CanadaHelps.",
                "cta": "Donate online",
                "href": "https://www.canadahelps.org/en/charities/la-maison-du-marin-de-quebec-quebec-seamens-institute/"
            },
            "onsite": {
                "label": "On site",
                "text": "Donation box at the Seamen's Club front desk, Pier 26."
            },
            "mail": {
                "label": "By mail",
                "lines": [
                    "Cheque payable to Maison du Marin",
                    "Pier 26, Port of Québec, PO Box 80, Haute-Ville Stn, Québec QC G1R 4M8"
                ]
            },
            "phone": {
                "label": "Talk to us",
                "text": "For major donation, clothing donations, sponsorships and partnerships, contact us at {phone}."
            }
        },
        "common": { "phone": "418 692-3376" }
    }
}
</i18n>
