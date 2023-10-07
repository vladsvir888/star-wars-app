<template>
  <section class="person">
    <div class="container">
      <AppAlert
        v-if="error"
        :alert="{
          variant: 'danger',
          closable: true,
          icon: 'exclamation-octagon',
          text: API_TEXT_ERROR
        }"
      />
      <div v-else-if="data" class="person__grid">
        <AppPersonDetailCard
          :name="data.name"
          :id="id"
          :properties="{
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            birth_year: data.birth_year,
            gender: data.gender
          }"
        />
        <AppAlert
          v-if="errorVehicles"
          :alert="{
            variant: 'danger',
            closable: true,
            icon: 'exclamation-octagon',
            text: API_TEXT_ERROR
          }"
        />
        <AppCardList v-if="dataVehicles" :data="dataVehicles" title="Vehicles" type="Vehicles" />
        <AppSpinner v-else />

        <AppAlert
          v-if="errorStarships"
          :alert="{
            variant: 'danger',
            closable: true,
            icon: 'exclamation-octagon',
            text: API_TEXT_ERROR
          }"
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

<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { fetchData, fetchDataWithPromiseAll } from '@/utils/fetch.js'
import { API_BASE_URL, API_TEXT_ERROR } from '@/constants'
import AppPersonDetailCard from '@/components/AppPersonDetailCard.vue'
import AppCardList from '@/components/AppCardList.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import AppAlert from '@/components/AppAlert.vue'

const route = useRoute()
const data = ref(null)
const error = ref(null)
const dataStarships = ref(null)
const errorStarships = ref(null)
const dataVehicles = ref(null)
const errorVehicles = ref(null)
const id = ref(route.params.id)
const url = computed(() => `${API_BASE_URL}/people/${id.value}`)

watchEffect(async () => {
  data.value = null

  try {
    data.value = await fetchData(url.value)
  } catch (err) {
    error.value = err
  }
})

watch(data, async () => {
  dataStarships.value = null
  dataVehicles.value = null

  try {
    dataStarships.value = await fetchDataWithPromiseAll(data.value.starships)
    dataVehicles.value = await fetchDataWithPromiseAll(data.value.vehicles)
  } catch (err) {
    errorStarships.value = err
    errorVehicles.value = err
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
