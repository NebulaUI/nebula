import filterDefaultProps from '../filterDefaultProps'

describe('filterDefaultProps', () => {
  it('filters out default props', () => {
    const props = {
      className: 'remove-me',
      src: 'keep',
      alt: 'keep-me',
      baz: 'remove'
    }
    const defaultProps = {
      className: 'o-flag',
      baz: 'remove'
    }

    expect(filterDefaultProps(props, defaultProps)).toEqual({
      alt: 'keep-me',
      src: 'keep'
    })
  })

  it('filters out private props', () => {
    const props = {
      className: 'keep-me',
      _alt: 'remove-me'
    }
    expect(filterDefaultProps(props, {})).toEqual({ className: 'keep-me' })
  })
})
