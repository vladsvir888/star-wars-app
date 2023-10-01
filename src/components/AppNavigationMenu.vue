<template>
  <nav class="navigation-menu" :class="navigationMenuClass" aria-label="Main">
    <RouterLink v-for="link in links" :key="link.text" :to="link.to" class="navigation-menu__link">
      {{ link.text }}
    </RouterLink>
  </nav>
</template>

<script setup>
defineProps({
  navigationMenuClass: String
})

const links = [
  {
    text: 'Home',
    to: {
      name: 'Home'
    }
  },
  {
    text: 'People',
    to: {
      name: 'People'
    }
  },
  {
    text: 'Search',
    to: {
      name: 'Search'
    }
  }
]
</script>

<style scoped>
.navigation-menu {
  display: flex;
  margin-right: auto;
  font-weight: 700;
}

.navigation-menu__link {
  padding: 5px 15px;
  transition: color var(--transition300ms);
}

.navigation-menu__link:where(.router-link-active) {
  color: var(--sl-color-primary-600);
}

.navigation-menu__link:hover {
  color: var(--sl-color-primary-600);
}
</style>
