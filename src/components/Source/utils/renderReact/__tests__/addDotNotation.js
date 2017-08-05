import addDotNotation from '../addDotNotation'

describe('addDotNotation', () => {
  describe('Adds dot notation to Nebula-React Components', () => {
    it('Adds the Dot to an opening tag', () => {
      expect(addDotNotation('<SiteWrap>')).toBe('<Site.Wrap>')
    })

    it('Adds the Dot to a closing tag', () => {
      expect(addDotNotation('</SiteWrap>')).toBe('</Site.Wrap>')
    })

    it('Adds the Dot to a closing tag', () => {
      expect(addDotNotation('<SiteWrap />')).toBe('<Site.Wrap />')
    })

    it('Adds the Dot when the tag has props', () => {
      expect(addDotNotation('<SiteWrap reverse />')).toBe('<Site.Wrap reverse />')
    })
  })
})
