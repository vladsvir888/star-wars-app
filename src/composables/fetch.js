import { ref, watchEffect, toValue } from 'vue'

export async function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  watchEffect(async () => {
    data.value = null
    error.value = null

    const urlValue = toValue(url)

    try {
      const response = await fetch(urlValue)
      data.value = await response.json()
    } catch (err) {
      error.value = err
    }
  })

  return { data, error }
}

export async function useFetchWithPromiseAll(urls) {
  const data = ref(null)
  const error = ref(null)

  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)))
    data.value = await Promise.all(responses.map((response) => response.json()))
  } catch (err) {
    error.value = err
  }

  return { data, error }
}
