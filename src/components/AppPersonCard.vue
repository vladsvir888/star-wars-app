<template>
  <sl-card class="person-card">
    <img slot="image" class="person-card__image" :src="`/images/people/${id}.jpg`" :alt="name" />
    <h2 class="person-card__title">{{ name }}</h2>
    <div slot="footer">
      <AppLink
        :to="{ name: 'Person', params: { id } }"
        class="link--decoration link--hover person-card__link"
      >
        More info
      </AppLink>
    </div>
  </sl-card>
</template>

<script setup lang="ts">
import '@shoelace-style/shoelace/dist/components/card/card.js'
import type { IPersonCard } from '@/types'
import AppLink from '@/components/AppLink.vue'

defineProps<IPersonCard>()
</script>

<style scoped>
.person-card {
  width: 100%;
  color: var(--palette-cod-gray);
}

.person-card__link {
  font-size: 18px;
}
</style>
