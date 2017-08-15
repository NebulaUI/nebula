import { basePath } from 'utils/constants'

const model = [
  {
    to: `${basePath}objects`,
    label: 'Objects',
    descendants: [
      {
        to: `${basePath}objects/flag`,
        label: 'Flag'
      },
      {
        to: `${basePath}objects/bare-list`,
        label: 'Bare List'
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
      }
    ]
  }
]

export default model
