import stripAttribute from '../stripAttribute'

describe('stripAttribute', () => {
  it('removes an attribute from a string', () => {
    const attribute = 'data-react-checksum'
    const string = '<div class="foo" data-react-checksum="-951640112">hello</div>'
    const expected = '<div class="foo">hello</div>'
    expect(stripAttribute(string, attribute)).toBe(expected)
  })
})
