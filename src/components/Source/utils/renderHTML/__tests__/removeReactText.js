import removeReactText from '../removeReactText'

describe('removeReactText', () => {
  it('removes React text comments from a string', () => {
    const str = '<div class="c-card"><!-- react-text: 8 -->Grid item 3<!--react-text --><br /><!-- react-text: 10 -->Multiple<!-- /react-text --><br /><!-- react-text: 12 --> lines<!-- /react-text --></div>'
    const result = '<div class="c-card">\nGrid item 3\n<br />\nMultiple\n<br />\n lines\n</div>'
    expect(removeReactText(str)).toBe(result)
  })

  it('removes React empty comments from a string', () => {
    const str = '<div class="c-card"><!-- react-empty: 8 --></div>'
    const result = '<div class="c-card">\n</div>'
    expect(removeReactText(str)).toBe(result)
  })
})
