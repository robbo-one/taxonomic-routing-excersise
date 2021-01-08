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
  }
}
