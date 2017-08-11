import React from 'react'
import renderNode from '../renderNode'

describe('renderNode', () => {
  it('renders out a string representation of the node', () => {
    const node = <div className="test" />
    expect(renderNode(node)).toBe('<div className="test" />')
  })

  it('renders text nodes', () => {
    const node = 'hello test'
    expect(renderNode(node)).toBe('hello test')
  })

  it('adds dot notation to components', () => {
    const FlagBody = () => <div />
    const node = <FlagBody />
    expect(renderNode(node)).toBe('<Flag.Body />')
  })

  it('strips unwanted content from component', () => {
    /* eslint-disable jsx-quotes */
    const node = (
      <div>
        <img src="http://test.com/test.jpg" alt="" />
        <div>null</div>
        <div component='{TestComponent()}' />
      </div>
    )
    /* eslint-enable */
    expect(renderNode(node)).not.toContain('null')
    expect(renderNode(node)).not.toContain('http://test.com/test.jpg')
    expect(renderNode(node)).toContain('src={nebula}')
    expect(renderNode(node)).not.toContain('{TestComponent()}')
    expect(renderNode(node)).toContain('{TestComponent}')
  })

  it('can optionally override the component name', () => {
    const Flag = () => <div />
    const FlagComponent = () => <div />
    const override = {
      FlagComponent: 'TestComponent'
    }
    const node = <Flag><FlagComponent /></Flag>
    expect(renderNode(node, override)).toBe('<Flag>\r\n<TestComponent />\r\n</Flag>')
  })

  it('renders children', () => {
    const node = (
      <div>test</div>
    )
    expect(renderNode(node)).toBe('<div>\r\ntest\r\n</div>')
  })

  it('replaces base64 strings', () => {
    const node = <img alt="test" src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASU" />
    expect(renderNode(node)).toBe('<img alt="test" src={nebula} />')
  })
})
