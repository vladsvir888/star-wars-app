export function getIdByRegex(str, regex) {
  const match = str.match(regex)

  return match ? match[0] : null
}
