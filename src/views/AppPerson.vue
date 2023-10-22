<template>
  <section class="person">
    <div class="container">
      <AppAlert
        v-if="personStore.error"
        variant="danger"
        :closable="true"
        icon="exclamation-octagon"
        :text="API_TEXT_ERROR"
      />
      <div v-else-if="personStore.data" class="person__grid">
        <AppPersonDetailCard
          :id="personStore.id"
          :properties="{
            name: personStore.data.name,
            height: personStore.data.height,
            mass: personStore.data.mass,
            hair_color: personStore.data.hair_color,
            skin_color: personStore.data.skin_color,
            eye_color: personStore.data.eye_color,
            birth_year: personStore.data.birth_year,
            gender: personStore.data.gender
          }"
        />
        <AppCardList
          v-if="personStore.dataVehicles"
          :data="personStore.dataVehicles"
          title="Vehicles"
          type="Vehicles"
        />
        <AppCardList
          v-if="personStore.dataStarships"
          :data="personStore.dataStarships"
          title="Starships"
          type="Starships"
        />
      </div>
      <AppSpinner v-else />
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePersonStore } from '@/stores/personStore'
import { API_TEXT_ERROR } from '@/constants'
import AppPersonDetailCard from '@/components/AppPersonDetailCard.vue'
import AppCardList from '@/components/AppCardList.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import AppAlert from '@/components/AppAlert.vue'

const personStore = usePersonStore()
personStore.setId()
</script>

<style scoped>
.person__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.person__grid > :first-child {
  grid-column: span 2;
}

@media (max-width: 600px) {
  .person__grid {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
}
</style>
