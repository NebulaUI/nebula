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

    it('Adds dot notation when there are multiple capital letters', () => {
      expect(addDotNotation('<BareListWrapper />')).toBe('<Bare.List.Wrapper />')
    })

    it('Can take a dictionary with which to override the replacement', () => {
      const dictionary = {
        BareListWrapper: 'BareList.Wrapper',
        MyComponent: 'TestComponentHello'
      }
      expect(addDotNotation('<BareListWrapper />', dictionary))
        .toBe('<BareList.Wrapper />')
      expect(addDotNotation('<MyComponent />', dictionary))
        .toBe('<TestComponentHello />')
      expect(addDotNotation('<TestComponentHello />', dictionary))
        .toBe('<TestComponentHello />')
    })
  })
})
