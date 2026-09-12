<script setup lang="ts">
const { t, tm, rt } = useI18n()
</script>

<template>
  <div class="donation-wrap">
    <div class="donation">
      <div>
        <div class="donation__kicker">{{ t('donation.kicker') }}</div>
        <h2 class="donation__title">{{ t('donation.title') }}</h2>
        <p class="donation__paragraph">{{ t('donation.p1') }}</p>
        <p class="donation__paragraph donation__paragraph--last">{{ t('donation.p2') }}</p>
      </div>
      <div class="donation__cards">
        <div class="donation__card">
          <div class="donation__card-label">{{ t('donation.onsite.label') }}</div>
          <div class="donation__card-text">{{ t('donation.onsite.text') }}</div>
        </div>
        <div class="donation__card">
          <div class="donation__card-label">{{ t('donation.mail.label') }}</div>
          <div class="donation__card-text">
            <template v-for="(line, i) in tm('donation.mail.lines')" :key="i">
              {{ rt(line) }}<br v-if="i < tm('donation.mail.lines').length - 1">
            </template>
          </div>
        </div>
        <div class="donation__card">
          <div class="donation__card-label">{{ t('donation.phone.label') }}</div>
          <div class="donation__card-text">
            <a href="tel:4186923376" class="donation__phone-link">{{ t('common.phone') }}</a>
            {{ t('donation.phone.text') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.donation-wrap {
  max-width: 1120px;
  margin: 60px auto 0;
  padding: 0 28px;
}

.donation {
  background: var(--color-blue);
  border-radius: 6px;
  padding: clamp(30px, 4vw, 52px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 36px;
  align-items: start;
}

.donation__kicker {
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
</style>
