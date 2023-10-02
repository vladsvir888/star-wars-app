<template>
  <sl-card class="person-card">
    <!-- WTF: API has no images? -->
    <img
      slot="image"
      class="person-card__image"
      :src="`https://starwars-visualguide.com/assets/img/characters/${person.index}.jpg`"
      :alt="person.name"
    />
    <h2 class="person-card__title">{{ person.name }}</h2>
    <div slot="footer">
      <!-- todo: add link -->
    </div>
  </sl-card>
</template>

<script setup>
import '@shoelace-style/shoelace/dist/components/card/card.js'

defineProps({
  person: Object
})
</script>

<style scoped>
.person-card {
  width: 100%;
  color: var(--palette-cod-gray);
}

.person-card__image {
  height: 400px;
  object-fit: cover;
}
</style>
