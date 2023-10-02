<template>
  <nav class="navigation-menu" :class="navigationMenuClass" aria-label="Main">
    <span v-for="link in links" :key="link.text">
      <AppLink :to="link.to" class="link--decoration link--hover navigation-menu__link">
        {{ link.text }}
      </AppLink>
    </span>
  </nav>
</template>

<script setup>
import AppLink from '@/components/AppLink.vue'

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
}

.navigation-menu__link {
  padding: 5px 15px;
}
</style>
