export function getIdByRegex(str: string, regex: RegExp): string | null {
  const match = str.match(regex)

  return match ? match[0] : null
}
