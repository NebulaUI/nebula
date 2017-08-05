import remove from '../removeSelfClosingTags'

describe('removeSelfClosingTags', () => {
  it('removes the closing portion of the self closing tag', () => {
    expect(remove('<img />')).toBe('<img>')
    expect(remove('<img src test />')).toBe('<img src test>')
    expect(remove('<img />')).toBe('<img>')
    expect(remove('<div><img src="path-to/img.jpg" alt="Test" /></div>')).toBe('<div><img src="path-to/img.jpg" alt="Test"></div>')
  })
})
