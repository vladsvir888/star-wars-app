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
        <AppCardList v-if="dataVehicles" :data="dataVehicles" title="Vehicles" />
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
        <AppCardList v-if="dataStarships" :data="dataStarships" title="Starships" />
        <AppSpinner v-else />
      </div>
      <AppSpinner v-else />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch, useFetchWithPromiseAll } from '@/composables/fetch.js'
import { API_BASE_URL, API_TEXT_ERROR } from '@/constants'
import AppPersonDetailCard from '@/components/AppPersonDetailCard.vue'
import AppCardList from '@/components/AppCardList.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import AppAlert from '@/components/AppAlert.vue'

const route = useRoute()
const id = ref(route.params.id)
const url = computed(() => `${API_BASE_URL}/people/${id.value}`)
const { data, error } = await useFetch(url)
let dataStarships = ref(null)
let errorStarships = ref(null)
let dataVehicles = ref(null)
let errorVehicles = ref(null)

watch(data, async () => {
  const { data: newDataStarships, error: newErrorStarships } = await useFetchWithPromiseAll(
    data.value.starships
  )
  dataStarships.value = newDataStarships.value
  errorStarships.value = newErrorStarships.value

  const { data: newDataVehicles, error: newErrorVehicles } = await useFetchWithPromiseAll(
    data.value.vehicles
  )
  dataVehicles.value = newDataVehicles.value
  errorVehicles.value = newErrorVehicles.value
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
