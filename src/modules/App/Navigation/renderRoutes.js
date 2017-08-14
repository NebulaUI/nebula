import Item from './Item'
import Dropdown from './Dropdown'

const renderRoutes = (rs, path) => rs.map(route => (
  route.descendants && route.descendants.length
    ? Dropdown({ path, renderRoutes, ...route })
    : Item(route)
))

export default renderRoutes
