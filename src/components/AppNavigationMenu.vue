<template>
  <nav class="navigation-menu" aria-label="Main">
    <span v-for="link in links" :key="link.text">
      <AppLink
        :to="link.to"
        class="link--decoration link--hover navigation-menu__link"
        :class="link.to.name === checkPersonPage ? 'router-link-active' : ''"
        @click="$emit('menu-close')"
      >
        {{ link.text }}
      </AppLink>
    </span>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AppLink from '@/components/AppLink.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const checkPersonPage = computed(() => {
  if (route.meta.isPerson) return 'People'
  return ''
})

defineEmits<{
  (e: 'menu-close'): void
}>()

const links = ref([
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
])
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
