<template>
  <sl-card class="card-list">
    <div slot="header">
      <h2 class="card-list__title">{{ title }}</h2>
    </div>
    <ul v-if="data" class="card-list__list">
      <li v-for="(value, key) of data" :key="key">
        <AppLink
          v-if="isItemLink"
          :to="{ name: 'Person', params: { id: getIdByRegex(data.url, /\d+/) } }"
          class="link--decoration link--hover"
          >{{ data.name }}</AppLink
        >
        <span v-else>{{ data.name }}</span>
      </li>
    </ul>
    <p v-else class="card-list__text">There are no items...</p>
  </sl-card>
</template>

<script setup lang="ts">
import type { ICardList } from '@/types'
import { getIdByRegex } from '@/utils/getIdByRegex'
import '@shoelace-style/shoelace/dist/components/card/card.js'
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
