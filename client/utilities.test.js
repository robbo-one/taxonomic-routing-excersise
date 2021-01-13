import { capitalize, singularOf, findById, findByName } from './utilities'

describe('capitalize', () => {
  it('capitalises a word', () => {
    const capitalised = capitalize('testword')
    expect(capitalised).toBe('Testword')
  })
})

describe('singularOf', () => {
  it('returns "kingdom" when classification is "kingdoms"', () => {
    const singular = singularOf('kingdoms')
    expect(singular).toBe('kingdom')
  })
  it('returns "phylum" when classification is "phyla"', () => {
    const singular = singularOf('phyla')
    expect(singular).toBe('phylum')
  })
  it('returns "class" when classification is "classes"', () => {
    const singular = singularOf('classes')
    expect(singular).toBe('class')
  })
  it('returns "order" when classification is "orders"', () => {
    const singular = singularOf('orders')
    expect(singular).toBe('order')
  })
  it('returns "family" when classification is "families"', () => {
    const singular = singularOf('families')
    expect(singular).toBe('family')
  })
  it('returns "genus" when classification is "genera"', () => {
    const singular = singularOf('genera')
    expect(singular).toBe('genus')
  })
  it('returns original input if classification not found', () => {
    const singular = singularOf('randomclassification')
    expect(singular).toBe('randomclassification')
  })
})

describe('findById', () => {
  const species = [{
    id: 1,
    name: 'test species 1'
  }, {
    id: 2,
    name: 'test species 2'
  }, {
    id: 3,
    name: 'test species 3'
  }]

  it('returns item with matching id', () => {
    const foundSpecies = findById(species, 2)
    expect(foundSpecies).toBe(species[1])
  })
  it('returns undefined if no match found', () => {
    const foundSpecies = findById(species, 4)
    expect(foundSpecies).toBeUndefined()
  })
})

describe('findByName', () => {
  const species = [{
    id: 1,
    name: 'test species 1'
  }, {
    id: 2,
    name: 'test species 2'
  }, {
    id: 3,
    name: 'test species 3'
  }]

  it('returns item with matching name', () => {
    const foundSpecies = findByName(species, 'test species 3')
    expect(foundSpecies).toBe(species[2])
  })
  it('returns undefined if no match found', () => {
    const foundSpecies = findByName(species, 4)
    expect(foundSpecies).toBeUndefined()
  })
})
