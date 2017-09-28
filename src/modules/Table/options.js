import { TABLE_COLLAPSE_BREAKPOINTS, TABLE_SPACING } from 'constants/index'
import { upperCaseFirst } from 'utils'

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'spacing',
      label: 'Spacing',
      options: TABLE_SPACING.map(s => ({
        value: s,
        label: upperCaseFirst(s)
      }))
    },
    {
      type: 'radio',
      stateKey: 'breakpoint',
      label: 'Breakpoint (Stacks below)',
      options: [...TABLE_COLLAPSE_BREAKPOINTS, 'none'].map(bp => ({
        value: bp,
        label: upperCaseFirst(bp)
      }))
    },
    {
      type: 'checkbox',
      stateKey: 'sortName',
      label: 'Ability to sort by Name'
    },
    {
      type: 'checkbox',
      stateKey: 'sortCity',
      label: 'Ability to sort by City'
    },
    {
      type: 'checkbox',
      stateKey: 'sortDOB',
      label: 'Ability to sort by DOB'
    },
    {
      type: 'checkbox',
      stateKey: 'footer',
      label: 'Render Footer'
    },
    {
      type: 'checkbox',
      stateKey: 'rowHighlight',
      label: 'Hover row highlight'
    }
  ]
}]

export default options
