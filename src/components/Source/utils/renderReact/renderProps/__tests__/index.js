import renderProps from '../'

describe('renderProps', () => {
  it('renders props with boolean values', () => {
    const props = { test: true }
    expect(renderProps(props)).toBe(' test')
  })

  it('renders props with string values', () => {
    const props = { className: 'testClass' }
    expect(renderProps(props)).toBe(' className="testClass"')
  })

  it('renders props with array values', () => {
    const props = { className: ['test', 'foo'] }
    expect(renderProps(props)).toBe(' className={[\'test\', \'foo\']}')
  })

  it('truncates array prop values with lengths longer than four', () => {
    const props = { className: ['1', '2', '3', '4', '5'] }
    expect(renderProps(props)).toBe(' className={[\'1\', \'2\', \'3\', \'4\', …]}')
  })

  it('renders props with object values', () => {
    const props = {
      className: {
        test: true,
        foo: 'baz'
      }
    }
    expect(renderProps(props)).toBe(' className={{ test: \'true\', foo: \'baz\' }}')
  })

  it('truncates object prop values with more than four keys', () => {
    const props = {
      className: {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e'
      }
    }
    expect(renderProps(props)).toBe(' className={{ 1: \'a\', 2: \'b\', 3: \'c\', 4: \'d\', … }}')
  })

  it('renders prop values that are named functions', () => {
    const props = {
      className() {
        return 'test'
      }
    }
    expect(renderProps(props)).toBe(' className={className()}')
  })

  it('renders props values that are numbers', () => {
    const props = {
      className: 1
    }
    expect(renderProps(props)).toBe(' className={1}')
  })

  it('filters out private props', () => {
    const props = {
      _className: 'remove-me',
      alt: 'keep-me'
    }
    expect(renderProps(props)).toBe(' alt="keep-me"')
  })

  it('filters out default props', () => {
    const defaultProps = {
      className: 'remove-me'
    }
    const props = {
      className: 'remove-me',
      alt: 'keep-me'
    }
    expect(renderProps(props, defaultProps)).toBe(' alt="keep-me"')
  })
})
