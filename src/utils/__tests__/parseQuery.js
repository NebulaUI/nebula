import { parseQuery } from '../'

describe('parseQuery', () => {
  it('removes the preceding "?" from a query string and parses it', () => {
    expect(parseQuery('?foo=bar')).toEqual({
      foo: 'bar'
    })

    expect(parseQuery('test=true')).toEqual({
      test: 'true'
    })
  })
})
