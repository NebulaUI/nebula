import React, { Component } from 'react'
import T from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Section, Foldable, LinkList } from 'nebula-react'

import navigationModel from './navigationModel'

const buildNavItems = (item, index, collection, pathname) => (
  item.descendants ? (
    <Foldable.Wrapper
      key={item.label}
      defaultOpen={pathname.includes(item.label.toLowerCase()) ? 'open' : 'closed'}
      bordered
      style={{
        borderTopWidth: index === 0 ? 0 : '1px',
        borderBottomWidth: index === collection.length - 1 ? 0 : '1px'
      }}
    >
      <Foldable.Header padding style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
        <h4 aria-label="Click to expand" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
          { item.label }
        </h4>
      </Foldable.Header>
      <Foldable.Body transition>
        <LinkList.Wrapper spacing="md">
          {
            item.descendants.map(descendant => (
              <LinkList.Item key={descendant.label}>
                <LinkList.Link
                  component={NavLink}
                  to={descendant.to}
                  className="c-sidebar__link"
                >
                  { descendant.label }
                </LinkList.Link>
              </LinkList.Item>
          ))
          }
        </LinkList.Wrapper>
      </Foldable.Body>
    </Foldable.Wrapper>
  ) : (
    <NavLink
      to={item.to}
      key={item.label}
      className="c-sidebar__link-title"
      activeClassName="c-sidebar__link-title--is-active"
    >
      <h4
        aria-label="Click to expand"
        className="u-flush-bottom"
        style={{
          padding: '0.5rem',
          borderBottom: index === collection.length - 1 ? '' : '1px solid #d7d7d7'
        }}
      >
        {item.label}
      </h4>
    </NavLink>
  )
)

class Sidebar extends Component {
  state = {
    open: 'closed'
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.close()
    }
  }

  close = () => this.setState({ open: 'closed' })

  handleChange = () => {
    this.setState({
      open: this.state.open === 'closed' ? 'open' : 'closed'
    })
  }

  render() {
    return (
      <nav className="c-sidebar">
        <Section tag="div" size="md@sm">
          <div>
            <Foldable.Wrapper open={this.state.open} onChange={this.handleChange} breakpoint="max-sm">
              <Foldable.Header padding>
                <h2 aria-label="Click to expand" className="u-hidden@sm" style={{ paddingLeft: '0.25rem', paddingRight: '0.25rem' }}>
                  API
                </h2>
              </Foldable.Header>
              <Foldable.Body transition>
                { navigationModel.map((item, index, collection) =>
                  buildNavItems(item, index, collection, this.props.location.pathname)
                )}
              </Foldable.Body>
            </Foldable.Wrapper>
          </div>
        </Section>
      </nav>
    )
  }
}

Sidebar.propTypes = {
  location: T.shape({
    pathname: T.string.isRequired
  }).isRequired
}

export default withRouter(Sidebar)
