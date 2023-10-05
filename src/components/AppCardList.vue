<template>
  <sl-card class="card-list">
    <div slot="header">
      <h2 class="card-list__title">{{ title }}</h2>
    </div>
    <ul v-if="data.length" class="card-list__list">
      <li v-for="item of data" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
    <p v-else class="card-list__text">There are no items for this category...</p>
  </sl-card>
</template>

<script setup>
import '@shoelace-style/shoelace/dist/components/card/card.js'

defineProps({
  data: Array,
  title: String
})
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
