import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { IPeople } from '@/types'
import { fetchData } from '@/utils/fetch'
import { API_BASE_URL } from '@/constants'

export const usePeopleStore = defineStore('peopleStore', () => {
  const allData = ref<Record<string, IPeople>>({})
  const data = ref<IPeople | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(true)
  const id = ref('1')
  const url = computed(() => `${API_BASE_URL}/people/?page=${id.value}`)

  watch(
    url,
    async () => {
      if (allData.value[id.value]) {
        data.value = allData.value[id.value]
        return
      }

      try {
        data.value = null
        loading.value = true
        data.value = await fetchData(url.value)

        if (data.value) {
          allData.value[id.value] = data.value
        }
      } catch (err) {
        if (err instanceof Error) {
          error.value = err
        }
      } finally {
        loading.value = false
      }
    },
    { immediate: true }
  )

  return {
    data,
    error,
    loading,
    id
  }
})
