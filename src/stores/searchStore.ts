import { debounce } from 'lodash-es'
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { IPeople } from '@/types'
import { fetchData } from '@/utils/fetch.js'
import { API_BASE_URL } from '@/constants'

export const useSearchStore = defineStore('searchStore', () => {
  const data = ref<IPeople | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(true)
  const searchText = ref('')
  const url = computed(() => `${API_BASE_URL}/people/?search=${searchText.value}`)

  const debouncedFetch = debounce(async () => {
    try {
      data.value = null
      loading.value = true
      data.value = await fetchData(url.value)
    } catch (err) {
      if (err instanceof Error) {
        error.value = err
      }
    } finally {
      loading.value = false
    }
  }, 750)

  watch(url, () => debouncedFetch(), { immediate: true })

  return {
    data,
    error,
    loading,
    searchText,
    debouncedFetch
  }
})
