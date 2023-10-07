export async function fetchData(url) {
  const response = await fetch(url)
  return await response.json()
}

export async function fetchDataWithPromiseAll(urls) {
  const responses = await Promise.all(urls.map((url) => fetch(url)))
  return await Promise.all(responses.map((response) => response.json()))
}
