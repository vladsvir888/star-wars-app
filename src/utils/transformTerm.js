export function transformTerm(term) {
  return term
    .split('_')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}
