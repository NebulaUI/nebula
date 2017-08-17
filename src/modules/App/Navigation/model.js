import { basePath } from 'utils/constants'

const model = [
  {
    to: `${basePath}core-concepts`,
    label: 'Core concepts'
  },
  {
    to: `${basePath}objects`,
    label: 'Objects',
    descendants: [
      {
        to: `${basePath}objects/site-wrap`,
        label: 'Site Wrap'
      },
      {
        to: `${basePath}objects/section`,
        label: 'Section'
      },
      {
        to: `${basePath}objects/lists`,
        label: 'Lists'
      },
      {
        to: `${basePath}objects/flag`,
        label: 'Flag'
      },
      {
        to: `${basePath}objects/grid`,
        label: 'Grid'
      }
    ]
  },
  {
    to: `${basePath}components`,
    label: 'Components',
    descendants: [
      {
        to: `${basePath}components/card`,
        label: 'Card'
      },
      {
        to: `${basePath}components/navbar`,
        label: 'Navbar'
      },
      {
        to: `${basePath}components/tabs`,
        label: 'Tabs'
      }
    ]
  }
]

export default model
