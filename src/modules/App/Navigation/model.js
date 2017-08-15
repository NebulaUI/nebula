import { basePath } from 'utils/constants'

const model = [
  {
    to: `${basePath}objects`,
    label: 'Objects',
    descendants: [
      {
        to: `${basePath}objects/bare-list`,
        label: 'Bare List'
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
        to: `${basePath}components/navbar`,
        label: 'Navbar'
      },
      {
        to: `${basePath}components/card`,
        label: 'Card'
      }
    ]
  }
]

export default model
