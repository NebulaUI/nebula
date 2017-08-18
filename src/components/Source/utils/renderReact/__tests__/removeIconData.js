import removeIconData from '../removeIconData'
/* eslint-disable quotes */
describe('removeIconData()', () => {
  it('removes icon data from svg icon embeds', () => {
    const testStr = `<Icon verticalAlign="sub" width="24px" height="24px" right icon={{ id: 'lightbulb', viewBox: '0 0 47.001 47.001', content: '<symbol viewBox="0 0 47.001 47.001" id="lightbulb"><path d="M23.5" /></symbol>', node: '[object SVGSymbolElement]' }}>`
    expect(removeIconData(testStr)).toBe(`<Icon verticalAlign="sub" width="24px" height="24px" right icon={lightbulb}>`)
  })
})
