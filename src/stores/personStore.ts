import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { IPerson, ICraft } from '@/types'
import { API_BASE_URL } from '@/constants'
import { fetchData, fetchDataWithPromiseAll } from '@/utils/fetch.js'

export const usePersonStore = defineStore('personStore', () => {
  const route = useRoute()
  const allData = ref<
    Record<
      string,
      {
        person: IPerson
        starships: ICraft[]
        vehicles: ICraft[]
      }
    >
  >({})
  const data = ref<IPerson | null>(null)
  const error = ref<Error | null>(null)
  const dataStarships = ref<ICraft[] | null>(null)
  const dataVehicles = ref<ICraft[] | null>(null)
  const id = ref('')
  const setId = () => (id.value = route.params.id as string)
  const url = computed(() => `${API_BASE_URL}/people/${id.value}`)

  watch(url, async () => {
    if (allData.value[id.value]) {
      data.value = allData.value[id.value].person
      dataStarships.value = allData.value[id.value].starships
      dataVehicles.value = allData.value[id.value].vehicles
      return
    }

    data.value = null
    dataStarships.value = null
    dataVehicles.value = null

    try {
      data.value = await fetchData(url.value)

      if (data.value) {
        dataStarships.value = await fetchDataWithPromiseAll(data.value.starships)
        dataVehicles.value = await fetchDataWithPromiseAll(data.value.vehicles)
      }

      allData.value[id.value] = {
        person: data.value as IPerson,
        starships: dataStarships.value as ICraft[],
        vehicles: dataVehicles.value as ICraft[]
      }
    } catch (err) {
      if (err instanceof Error) {
        error.value = err
      }
    }
  })

  return {
    data,
    error,
    id,
    setId,
    dataStarships,
    dataVehicles
  }
})
