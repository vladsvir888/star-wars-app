<template>
  <section class="person">
    <div class="container">
      <AppAlert
        v-if="error"
        variant="danger"
        :closable="true"
        icon="exclamation-octagon"
        :text="API_TEXT_ERROR"
      />
      <div v-else-if="data" class="person__grid">
        <AppPersonDetailCard
          :id="id"
          :properties="{
            name: data.name,
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color,
            birth_year: data.birth_year,
            gender: data.gender
          }"
        />
        <AppAlert
          v-if="error"
          variant="danger"
          :closable="true"
          icon="exclamation-octagon"
          :text="API_TEXT_ERROR"
        />
        <AppCardList v-if="dataVehicles" :data="dataVehicles" title="Vehicles" type="Vehicles" />
        <AppSpinner v-else />

        <AppAlert
          v-if="error"
          variant="danger"
          :closable="true"
          icon="exclamation-octagon"
          :text="API_TEXT_ERROR"
        />
        <AppCardList
          v-if="dataStarships"
          :data="dataStarships"
          title="Starships"
          type="Starships"
        />
        <AppSpinner v-else />
      </div>
      <AppSpinner v-else />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IPerson, ICraft } from '@/types'
import { ref, computed, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { fetchData, fetchDataWithPromiseAll } from '@/utils/fetch.js'
import { API_BASE_URL, API_TEXT_ERROR } from '@/constants'
import AppPersonDetailCard from '@/components/AppPersonDetailCard.vue'
import AppCardList from '@/components/AppCardList.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import AppAlert from '@/components/AppAlert.vue'

const route = useRoute()
const data = ref<IPerson | null>(null)
const error = ref<Error | null>(null)
const dataStarships = ref<ICraft[] | null>(null)
const errorStarships = ref<Error | null>(null)
const dataVehicles = ref<ICraft[] | null>(null)
const errorVehicles = ref<Error | null>(null)
const id = ref(route.params.id)
const url = computed(() => `${API_BASE_URL}/people/${id.value}`)

watchEffect(async () => {
  data.value = null

  try {
    data.value = await fetchData(url.value)
  } catch (err) {
    if (err instanceof Error) {
      error.value = err
    }
  }
})

watch(data, async () => {
  dataStarships.value = null
  dataVehicles.value = null

  try {
    if (data.value !== null) {
      dataStarships.value = await fetchDataWithPromiseAll(data.value.starships)
      dataVehicles.value = await fetchDataWithPromiseAll(data.value.vehicles)
    }
  } catch (err) {
    if (err instanceof Error) {
      errorStarships.value = err
      errorVehicles.value = err
    }
  }
})
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
