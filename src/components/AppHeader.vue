<template>
  <header class="header">
    <div class="container header__container">
      <span v-if="checkRoute">
        <AppLink :to="{ name: 'Home' }" class="header__logo">
          Star Wars <span class="visually-hidden">Home</span>
        </AppLink>
      </span>
      <p v-else class="header__logo">Star Wars</p>
      <AppNavigationMenu class="header__navigation-menu" />
      <AppSocials class="header__socials" />
      <AppIconButton @click="isMenuOpen = true" name="list" class="header__burger" label="Menu" />
    </div>
    <AppMenu :is-menu-open="isMenuOpen" @menu-close="isMenuOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppSocials from '@/components/AppSocials.vue'
import AppIconButton from '@/components/AppIconButton.vue'
import AppMenu from '@/components/AppMenu.vue'
import AppNavigationMenu from '@/components/AppNavigationMenu.vue'
import AppLink from '@/components/AppLink.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const checkRoute = computed(() => {
  return route.path !== '/'
})
const isMenuOpen = ref(false)
</script>

<style scoped>
.header {
  padding: 15px 0 30px;
}

.header__container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px 40px;
}

.header__logo {
  font-size: 30px;
  font-weight: 700;
  color: var(--palette-white);
}

.header__burger {
  display: none;
  margin-left: auto;
  font-size: 35px;
  color: currentColor;
}

.header__burger::part(base) {
  padding: 0;
}

@media (max-width: 767px) {
  .header__menu,
  .header__navigation-menu,
  .header__socials {
    display: none;
  }

  .header__burger {
    display: block;
  }
}
</style>
