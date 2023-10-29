<template>
  <sl-card class="card-list">
    <div slot="header">
      <h2 class="card-list__title">{{ title }}</h2>
    </div>
    <ul v-if="data.length" class="card-list__list">
      <li v-for="item of data" :key="item.name">
        <AppLink
          v-if="isItemLink"
          :to="{ name: 'Person', params: { id: getIdByRegex(item.url, /\d+/) } }"
          class="link--decoration link--hover"
        >
          {{ item.name }}
        </AppLink>
        <span v-else>{{ item.name }}</span>
      </li>
    </ul>
    <p v-else class="card-list__text">There are no items...</p>
  </sl-card>
</template>

<script setup lang="ts">
import '@shoelace-style/shoelace/dist/components/card/card.js'
import type { ICardList } from '@/types'
import { getIdByRegex } from '@/utils/getIdByRegex'
import AppLink from '@/components/AppLink.vue'

defineProps<ICardList>()
</script>

<style scoped>
.card-list {
  color: var(--palette-cod-gray);
}

.card-list__list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style: circle;
  padding-left: 20px;
}
</style>
