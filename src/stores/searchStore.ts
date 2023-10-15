import { debounce } from 'lodash-es'
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { IPeople } from '@/types'
import { fetchData } from '@/utils/fetch.js'
import { API_BASE_URL } from '@/constants'

export const useSearchStore = defineStore('searchStore', () => {
  const data = ref<IPeople | null>(null)
  const error = ref<Error | null>(null)
  const searchText = ref('')
  const url = computed(() => `${API_BASE_URL}/people/?search=${searchText.value}`)
  const debouncedFetch = debounce(async () => {
    data.value = null

    try {
      data.value = await fetchData(url.value)
    } catch (err) {
      if (err instanceof Error) {
        error.value = err
      }
    }
  }, 750)

  watch(url, () => debouncedFetch(), { immediate: true })

  return {
    data,
    error,
    searchText,
    url,
    debouncedFetch
  }
})
