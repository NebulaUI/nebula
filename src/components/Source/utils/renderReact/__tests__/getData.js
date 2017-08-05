import getData from '../getData'

describe('getData', () => {
  it('extracts the name and children of the element if is a React element', () => {
    const element = {
      type: 'div',
      props: { children: { type: 'test' } },
    }
    expect(getData(element)).toMatchObject({
      name: 'div',
      children: { type: 'test' },
    })
  })

  it('extrats the name if the type is an object', () => {
    const element1 = {
      type: { name: 'span' },
      props: {},
    }
    expect(getData(element1)).toMatchObject({ name: 'span' })

    const element2 = {
      type: { displayName: 'article' },
      props: {},
    }
    expect(getData(element2)).toMatchObject({ name: 'article' })
  })

  it('returns "Unknown" if it cannot find a name', () => {
    const element = {
      type: { cannotFind: 'test' },
      props: {},
    }
    expect(getData(element)).toMatchObject({ name: 'Unknown' })
  })

  it('handles text nodes"', () => {
    const element = 'hello from test'
    expect(getData(element)).toEqual({
      name: null,
      text: 'hello from test',
      children: null
    })
  })

  it('handles text nodes that are numbers"', () => {
    const element = 123
    expect(getData(element)).toEqual({
      name: null,
      text: '123',
      children: null
    })
  })

  it('returns default data settings if the element is "null"', () => {
    const element = null
    expect(getData(element)).toEqual({
      name: null,
      text: null,
      children: null
    })
  })
})
