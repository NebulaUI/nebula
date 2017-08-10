import removeNull from '../removeNull'

describe('removeNull', () => {
  it('removes occurences of "null" in between element tags', () => {
    const initial = '<div>null null null null</div>'
    const expected = '<div></div>'
    expect(removeNull(initial)).toBe(expected)
  })

  it('removes a single occurence', () => {
    const initial = '<div>null</div>'
    const expected = '<div></div>'
    expect(removeNull(initial)).toBe(expected)
  })

  it('removes a single occurence even with whitespace', () => {
    const initial = '<div> null </div>'
    const expected = '<div></div>'
    expect(removeNull(initial)).toBe(expected)
  })

  it('doesn\'t remove other text', () => {
    const initial = '<div>hello</div>'
    const expected = '<div>hello</div>'
    expect(removeNull(initial)).toBe(expected)
  })
})
