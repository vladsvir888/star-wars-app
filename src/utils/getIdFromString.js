export function getIdFromString(str, regex) {
  const match = str.match(regex)

  return match ? match[0] : null
}
