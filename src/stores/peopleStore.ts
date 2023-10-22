import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { IPeople } from '@/types'
import { fetchData } from '@/utils/fetch'
import { API_BASE_URL } from '@/constants'

export const usePeopleStore = defineStore('peopleStore', () => {
  const allData = ref<Record<string, IPeople>>({})
  const data = ref<IPeople | null>(null)
  const error = ref<Error | null>(null)
  const id = ref('1')
  const url = computed(() => `${API_BASE_URL}/people/?page=${id.value}`)

  watch(
    url,
    async () => {
      if (allData.value[id.value]) {
        data.value = allData.value[id.value]
        return
      }

      data.value = null

      try {
        data.value = await fetchData(url.value)
        allData.value[id.value] = data.value as IPeople
      } catch (err) {
        if (err instanceof Error) {
          error.value = err
        }
      }
    },
    { immediate: true }
  )

  return {
    data,
    error,
    id
  }
})
