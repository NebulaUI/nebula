import { upperCaseFirst } from '../'

describe('upperCaseFirst', () => {
  it('returns the string with the first character in uppercase', () => {
    expect(upperCaseFirst('foo')).toBe('Foo')
  })
})
