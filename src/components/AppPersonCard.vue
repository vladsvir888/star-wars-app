<template>
  <sl-card class="person-card">
    <img
      slot="image"
      class="person-card__image"
      :src="`https://starwars-visualguide.com/assets/img/characters/${person.idx}.jpg`"
      :alt="person.name"
    />
    <h2 class="person-card__title">{{ person.name }}</h2>
    <div slot="footer">
      <AppLink
        :to="{ name: 'Person', params: { id: person.idx } }"
        class="link--decoration link--hover person-card__link"
      >
        More info
      </AppLink>
    </div>
  </sl-card>
</template>

<script setup>
import '@shoelace-style/shoelace/dist/components/card/card.js'
import AppLink from '@/components/AppLink.vue'

defineProps({
  person: Object
})
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
