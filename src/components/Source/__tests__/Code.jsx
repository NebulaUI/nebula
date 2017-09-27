import React from 'react'
import { shallow, mount } from 'enzyme'

import highlight from '../utils/highlight'
import Code from '../Code'

jest.mock('../utils/highlight')

describe('<Code />', () => {
  it('calls highlightSource when mounts and updates with the code node', () => {
    const mockFn = jest.fn()
    highlight.mockImplementation(mockFn)
    const $ = mount(<Code>_</Code>)
    expect(mockFn).toHaveBeenCalledTimes(1)

    $.setProps({
      componentName: 'test'
    })
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('renders <pre> with appropriate className', () => {
    const props = {
      language: 'javascript'
    }
    const $ = shallow(<Code {...props}>_</Code>)
    expect($.find('pre').prop('className')).toBe('language-javascript line-numbers')
  })

  it('renders the children as HTML by default', () => {
    const $ = shallow(<Code>_</Code>)
    expect($.find('pre').prop('className')).toBe('language-html line-numbers')
    expect($.find('code').prop('className')).toBe('language-html')
  })

  it('renders a component when language is JSX', () => {
    const props = {
      componentName: 'Flag',
      language: 'jsx',
      extraString: 'import { baz } from \'foo\'\n',
      nebulaImportOverride: 'Flag, Foo'
    }
    const TestChild = () => <div>test</div>
    const $ = shallow(<Code {...props}><TestChild /></Code>)
    expect($.find('pre').prop('className')).toBe('language-jsx line-numbers')
    expect($.find('code').prop('className')).toBe('language-jsx')
    expect($.find('code').html()).toMatch(
`import React from &#x27;react&#x27;
import { Flag, Foo } from &#x27;nebula-react&#x27;
import { baz } from &#x27;foo&#x27;

const ExampleFlag = () =&gt; (
[object Object]
)

export default ExampleFlag`
    )
  })
})
