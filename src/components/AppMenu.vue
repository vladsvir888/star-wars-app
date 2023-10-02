<template>
  <sl-drawer :open="isMenuOpen" @sl-request-close="closeMenu" label="Menu" class="menu">
    <AppNavigationMenu navigation-menu-class="menu__navigation-menu" />
    <AppSocials socials-class="menu__socials" />
  </sl-drawer>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js'
import AppSocials from '@/components/AppSocials.vue'
import AppNavigationMenu from '@/components/AppNavigationMenu.vue'

defineProps({
  isMenuOpen: Boolean
})
const emit = defineEmits(['menu-close'])
const route = useRoute()
const closeMenu = () => emit('menu-close')

watch(() => route.path, closeMenu)
</script>

<style scoped>
.menu {
  display: none;
}
.menu::part(title) {
  color: var(--palette-cod-gray);
  font-weight: 700;
}

@media (max-width: 767px) {
  .menu {
    display: block;
  }
}

@media (max-width: 600px) {
  .menu {
    --size: 100%;
  }
}
</style>

<style>
.menu__socials .socials__social-link {
  color: var(--palette-cod-gray);
}

.menu__navigation-menu {
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 40px;
  color: var(--palette-cod-gray);
}

.menu__navigation-menu .navigation-menu__link {
  padding: 0;
  font-size: 20px;
}
</style>
