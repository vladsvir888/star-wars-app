export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url)
  return await response.json()
}

export async function fetchDataWithPromiseAll<T>(urls: string[]): Promise<T[]> {
  const responses = await Promise.all(urls.map((url) => fetch(url)))
  return await Promise.all(responses.map((response) => response.json()))
}
