import { BASE_PATH } from 'constants/index'


const model = [
  {
    to: null,
    label: 'Objects',
    descendants: [
      {
        to: `${BASE_PATH}api/objects/flag`,
        label: 'Flag'
      },
      {
        to: `${BASE_PATH}api/objects/grid`,
        label: 'Grid'
      },
      {
        to: `${BASE_PATH}api/objects/lists`,
        label: 'Lists'
      },
      {
        to: `${BASE_PATH}api/objects/section`,
        label: 'Section'
      },
      {
        to: `${BASE_PATH}api/objects/site-wrap`,
        label: 'Site Wrap'
      }
    ]
  },
  {
    to: null,
    label: 'Components',
    descendants: [
      {
        to: `${BASE_PATH}api/components/buttons`,
        label: 'Buttons'
      },
      {
        to: `${BASE_PATH}api/components/card`,
        label: 'Card'
      },
      {
        to: `${BASE_PATH}api/components/flyout`,
        label: 'Flyout'
      },
      {
        to: `${BASE_PATH}api/components/foldable`,
        label: 'Foldable'
      },
      {
        to: `${BASE_PATH}api/components/form`,
        label: 'Form'
      },
      {
        to: `${BASE_PATH}api/components/icons`,
        label: 'Icons'
      },
      {
        to: `${BASE_PATH}api/components/lists`,
        label: 'Lists'
      },
      {
        to: `${BASE_PATH}api/components/modal`,
        label: 'Modal dialog'
      },
      {
        to: `${BASE_PATH}api/components/navbar`,
        label: 'Navbar'
      },
      {
        to: `${BASE_PATH}api/components/pagination`,
        label: 'Pagination'
      },
      {
        to: `${BASE_PATH}api/components/pill`,
        label: 'Pill'
      },
      {
        to: `${BASE_PATH}api/components/progress-bar`,
        label: 'Progress Bar'
      },
      {
        to: `${BASE_PATH}api/components/table`,
        label: 'Table'
      },
      {
        to: `${BASE_PATH}api/components/tabs`,
        label: 'Tabs'
      },
      {
        to: `${BASE_PATH}api/components/toast`,
        label: 'Toast'
      },
      {
        to: `${BASE_PATH}api/components/tooltip`,
        label: 'Tooltip'
      },
      {
        to: `${BASE_PATH}api/components/utilities`,
        label: 'Utilities'
      }
    ]
  },
  {
    to: `${BASE_PATH}api/utility-classes`,
    label: 'Utility Classes',
    descendants: null
  },
  {
    to: `${BASE_PATH}api/sass-variables`,
    label: 'Global Sass Variables',
    descendants: null
  }
]

export default model
