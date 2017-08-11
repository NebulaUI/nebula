import React from 'react'
import renderHTML from '../'

describe('renderHTML', () => {
  it('renders a clean string of HTML indented appropriately', () => {
    expect(renderHTML(<div data-react-checksum="-1615080637" className="test">Hello</div>))
      .toBe('<div class="test">Hello</div>')

    expect(renderHTML(<img alt="test" src="foo" />))
      .toBe('<img alt="test" src="path-to/nebula.jpg">')

    expect(renderHTML(<ul><li>test</li></ul>))
      .toBe('<ul>\n  <li>test</li>\n</ul>')
  })
})
