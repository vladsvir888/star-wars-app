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
  const loading = ref(true)
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

    try {
      data.value = null
      dataVehicles.value = null
      dataStarships.value = null
      loading.value = true
      data.value = await fetchData(url.value)

      if (data.value) {
        dataVehicles.value = await fetchDataWithPromiseAll(data.value.vehicles)
        dataStarships.value = await fetchDataWithPromiseAll(data.value.starships)

        allData.value[id.value] = {
          person: data.value,
          starships: dataStarships.value,
          vehicles: dataVehicles.value
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        error.value = err
      }
    } finally {
      loading.value = false
    }
  })

  return {
    data,
    error,
    loading,
    id,
    setId,
    dataStarships,
    dataVehicles
  }
})
