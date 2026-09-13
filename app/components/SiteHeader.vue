<script setup lang="ts"></script>

<template>
  <div class="site-header">
    <div class="site-header__logo-wrap">
      <div class="site-header__logo-bg" />
      <img
        src="/images/mdm-horizontal.svg"
        alt="La Maison du Marin Québec — Seamen's Club"
        class="site-header__logo"
      >
    </div>
    <div class="site-header__actions">
      <SocialLinks />
      <LangSwitch />
    </div>
  </div>
</template>

<style scoped>
.site-header {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px 12px;
  width: 100%;
  z-index: 1;
  top: 0;
  filter: drop-shadow(0 1px 0 var(--color-border)) drop-shadow(0 2px 10px rgba(14, 51, 72, 0.07));
  background-color: var(--color-bg);
}

.site-header__logo-wrap {
  clip-path: polygon(0 0, 100% 0, calc(100% - 82px) 100%, 0 100%);
  padding: 10px 96px 10px 20px;
  flex: 0 1 auto;
  margin-bottom: -30px;
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
  gap: 14px;
  padding: 10px 20px;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
}
</style>
