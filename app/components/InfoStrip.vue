<script setup lang="ts">
const { t, tm, rt } = useI18n()
</script>

<template>
  <div class="info-strip-wrap">
    <div class="info-strip">
      <div class="info-strip__cell">
        <div class="info-strip__label">{{ t('info.address.label') }}</div>
        <div class="info-strip__text">
          <template v-for="(line, i) in tm('info.address.lines')" :key="i">
            {{ rt(line) }}<br v-if="i < tm('info.address.lines').length - 1">
          </template>
        </div>
      </div>
      <div class="info-strip__cell">
        <div class="info-strip__label">{{ t('info.hours.label') }}</div>
        <div class="info-strip__text">
          {{ t('info.hours.line1') }}<br>
          <i18n-t keypath="info.hours.text" tag="span">
            <template #link>
              <a href="https://www.facebook.com/maisondumarinquebec/">{{ t('info.hours.linkText') }}</a>
            </template>
          </i18n-t>
        </div>
      </div>
      <div class="info-strip__cell">
        <div class="info-strip__label">{{ t('info.volunteering.label') }}</div>
        <div class="info-strip__text">
          {{ t('info.volunteering.text') }}<br>
          <a href="tel:4186923376">{{ t('common.phone') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-strip-wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 28px 0;
}

.info-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: var(--color-border);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.info-strip__cell {
  background: var(--color-bg);
  padding: 24px 22px;
}

.info-strip__label {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-slate);
  margin-bottom: 10px;
}

.info-strip__text {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-ink);
}

@media (max-width: 759px) {
  .info-strip {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
