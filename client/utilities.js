export function capitalize (word) {
  return word[0].toUpperCase() + word.split('').slice(1).join('')
}

export function singularOf (classification) {
  switch (classification) {
    case 'kingdoms':
      return 'kingdom'
    case 'phyla':
      return 'phylum'
    case 'classes':
      return 'class'
    case 'orders':
      return 'order'
    case 'families':
      return 'family'
    case 'genera':
      return 'genus'
    default:
      return classification
  }
}

export function findById (arr, id) {
  return arr.find((item) => item.id === id)
}

export function findByName (arr, name) {
  return arr.find((item) => item.name === name)
}
