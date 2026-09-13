<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 38 })
const { t } = useI18n()
</script>

<template>
  <div class="social-links">
    <a
      href="https://www.facebook.com/maisondumarinquebec/"
      target="_blank"
      rel="noopener"
      :aria-label="t('nav.facebook')"
      class="social-links__item"
      :style="{ width: `${size}px`, height: `${size}px` }"
    >
      <svg width="60%" height="60%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
      </svg>
    </a>
    <a
      href="#"
      data-placeholder="whatsapp"
      :aria-label="t('nav.whatsapp')"
      class="social-links__item"
      :style="{ width: `${size}px`, height: `${size}px` }"
    >
      <svg width="60%" height="60%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.19-.53.06-.25-.12-1.05-.38-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.49-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.58.25 1.04.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
      </svg>
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-links__item {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-border-soft);
  color: var(--color-slate);
  text-decoration: none;
  transition: background 140ms ease, color 140ms ease;
}

.social-links__item:hover {
  background: var(--color-blue);
  color: #ffffff;
}
</style>

<i18n lang="json">
{
  "fr": {
    "nav": {
      "facebook": "Facebook",
      "whatsapp": "WhatsApp (lien à compléter)"
    }
  },
  "en": {
    "nav": {
      "facebook": "Facebook",
      "whatsapp": "WhatsApp (link to be added)"
    }
  }
}
</i18n>
