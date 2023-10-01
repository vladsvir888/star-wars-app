<template>
  <sl-card class="person-card">
    <!-- todo: add image -->
    <h2 class="person-card__title">{{ person.name }}</h2>
    <div slot="footer">
      <AppButton class="person-card__button">More info</AppButton>
    </div>
  </sl-card>
</template>

<script setup>
import '@shoelace-style/shoelace/dist/components/card/card.js'
import AppButton from '@/components/AppButton.vue'

defineProps({
  person: Object
})
</script>

<style scoped>
.person-card {
  width: 100%;
  color: var(--palette-cod-gray);
}
</style>
