import React from 'react'
import renderReact from '../'

describe('renderReact', () => {
  it('renders the react component to a string using the pretty library', () => {
    const input = <div>test</div>

    expect(renderReact(input)).toBe(`<div>\r\n  test\r\n</div>`)
  })

  it('adds dot notation to components', () => {
    const FlagBody = () => <div />
    const node = <FlagBody />
    expect(renderReact(node)).toBe('<Flag.Body />')
  })

  it('strips unwanted content from component', () => {
    const TestComponent = () => {}
    const node = (
      <div>
        <img src="http://test.com/test.jpg" alt="" />
        <div>null</div>
        <div component='{TestComponent()}' />
      </div>
    )
    expect(renderReact(node)).not.toContain('null')
    expect(renderReact(node)).not.toContain('http://test.com/test.jpg')
    expect(renderReact(node)).toContain('src={nebula}')
    expect(renderReact(node)).not.toContain('{TestComponent()}')
    expect(renderReact(node)).toContain('{TestComponent}')
  })

  it('can optionally override the component name', () => {
    const Flag = () => <div />
    const FlagComponent = () => <div />
    const override = {
      FlagComponent: 'TestComponent'
    }
    const node = <Flag><FlagComponent /></Flag>
    expect(renderReact(node, override)).toBe(`<Flag>\r\n  <TestComponent />\r\n</Flag>`)
  })
})
