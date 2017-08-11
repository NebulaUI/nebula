import removeFunctionCallParens from '../removeFunctionCallParens'

describe('removeFunctionCallParens', () => {
  it('removes parens from function calls in jsx', () => {
    const input = '<Navbar.Link component={NavLink()} to="/nebul()a/space-time">'
    const expected = '<Navbar.Link component={NavLink} to="/nebul()a/space-time">'
    expect(removeFunctionCallParens(input)).toBe(expected)
  })
})
