import { capitalize, singularOf } from './utilities'

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
