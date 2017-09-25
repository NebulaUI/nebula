import React, { Component } from 'react'
import T from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Section, Foldable, LinkList } from 'nebula-react'

import navigationModel from './navigationModel'

const buildNavItems = (items, index, collection, pathname) => (
  <Foldable.Wrapper
    key={items.label}
    defaultOpen={pathname.includes(items.label.toLowerCase()) ? 'open' : 'closed'}
    bordered
    style={{
      borderTopWidth: index === 0 ? 0 : '1px',
      borderBottomWidth: index === collection.length - 1 ? 0 : '1px'
    }}
  >
    <Foldable.Header padding>
      <h4 aria-label="Click to expand" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        { items.label }
      </h4>
    </Foldable.Header>
    <Foldable.Body>
      <LinkList.Wrapper spacing="md">
        {
          items.descendants.map(item => (
            <LinkList.Item key={item.label}>
              <LinkList.Link component={NavLink} to={item.to}>
                { item.label }
              </LinkList.Link>
            </LinkList.Item>
        ))
        }
      </LinkList.Wrapper>
    </Foldable.Body>
  </Foldable.Wrapper>
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
                <h2 aria-label="Click to expand" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
                  API
                </h2>
              </Foldable.Header>
              <Foldable.Body>
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
