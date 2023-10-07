<template>
  <sl-card class="person-detail-card">
    <img :src="`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`" :alt="name" />
    <div class="person-detail-card__content">
      <h1 class="person-detail-card__title">{{ name }}</h1>
      <dl class="person-detail-card__list">
        <div v-for="(value, key) in properties" :key="key" class="person-detail-card__item">
          <dt class="person-detail-card__term">{{ transformTerm(key) }}:</dt>
          <dd class="person-detail-card__descr">{{ value }}</dd>
        </div>
      </dl>
    </div>
  </sl-card>
</template>

<script setup>
import { transformTerm } from '@/utils/transformTerm.js'
import '@shoelace-style/shoelace/dist/components/card/card.js'

defineProps({
  id: String,
  name: String,
  properties: Object
})
</script>

<style scoped>
.person-detail-card {
  color: var(--palette-cod-gray);
}
.person-detail-card::part(body) {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.person-detail-card__list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.person-detail-card__item {
  display: flex;
  gap: 5px;
}

.person-detail-card__term {
  font-weight: 700;
}

@media (max-width: 600px) {
  .person-detail-card__title {
    font-size: 30px;
  }
}
</style>
