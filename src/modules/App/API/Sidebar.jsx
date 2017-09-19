import React, { Component } from 'react'
import T from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { BareList, Section, Foldable } from 'nebula-react'

import navigationModel from './navigationModel'

const buildNavItems = item => (
  <BareList.Item key={item.to || item.label}>
    {
      item.to ? (
        <NavLink to={item.to}>
          { item.label }
        </NavLink>
      ) : (
        item.label
      )
    }
    { item.descendants && (
      <BareList.Wrapper style={{ fontWeight: 'normal' }}>
        { item.descendants.map(buildNavItems) }
      </BareList.Wrapper>
    )}
  </BareList.Item>
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
          <div style={{ padding: '0 1rem' }}>
            <Foldable.Wrapper open={this.state.open} onFoldableChange={this.handleChange} breakpoint="max-sm">
              <Foldable.Header padding>
                <h2 aria-label="Click to expand">
                  API
                </h2>
              </Foldable.Header>
              <Foldable.Body>
                <BareList.Wrapper className="u-flush-bottom" spacing="md" style={{ fontWeight: 'bold' }}>
                  { navigationModel.map(buildNavItems)}
                </BareList.Wrapper>
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
