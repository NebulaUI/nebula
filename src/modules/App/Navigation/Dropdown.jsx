import React, { Component } from 'react'
import T from 'prop-types'
import { Navbar, Icon } from 'nebula-react'
import classNames from 'classnames'

class Dropdown extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.path !== prevProps.path) {
      this.node.close()
    }
  }
  render() {
    const { renderRoutes, to, icon, label, descendants, path } = this.props
    return (
      <Navbar.Dropdown.Wrapper ref={(n) => { this.node = n }} clickOutsideToClose>
        <Navbar.Dropdown.Toggle
          className={classNames({ 'is-active': path.includes(to) })}
        >
          { icon && (
            <Icon iconPosition="left" verticalAlign="middle" icon={icon} style={{ maxHeight: '100%' }}>
              { label }
            </Icon>
          )}
          { !icon && label }
        </Navbar.Dropdown.Toggle>
        <Navbar.Dropdown.Content>
          { renderRoutes(descendants) }
        </Navbar.Dropdown.Content>
      </Navbar.Dropdown.Wrapper>
    )
  }
}

Dropdown.propTypes = {
  renderRoutes: T.func.isRequired,
  to: T.string.isRequired,
  label: T.string.isRequired,
  path: T.string.isRequired,
  descendants: T.arrayOf(T.shape({})).isRequired,
  icon: T.any // eslint-disable-line
}

export default Dropdown
