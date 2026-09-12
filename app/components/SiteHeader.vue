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
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 20px;
  width: 100%;
  z-index: 1;
  top: 0;
  filter: drop-shadow(0 1px 0 var(--color-border)) drop-shadow(0 2px 10px rgba(14, 51, 72, 0.07));
}

.site-header__logo-wrap {
  clip-path: polygon(0 0, 100% 0, calc(100% - 82px) 100%, 0 100%);
  padding: 20px 96px 10px 28px;
  flex: 0 0 auto;
  position: absolute;
  left: 0;
  top: 0;
}

.site-header__logo-bg {
  position: absolute;
  z-index: -1;
  inset: 0;
  background-color: var(--color-bg);
  clip-path: polygon(0 0, 100% 0, calc(100% - 82px) 100%, 0 100%);
}

.site-header__logo {
  width: auto;
  max-width: 100%;
  height: 68px;
  display: block;
  mix-blend-mode: multiply;
}

.site-header__actions {
  display: flex;
  gap: 14px;
  padding: 10px 28px 10px 28px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  background-color: var(--color-bg);
}
</style>
