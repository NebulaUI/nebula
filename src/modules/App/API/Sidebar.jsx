import React, { Component } from 'react'
import T from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { BareList, Section, Foldable, LinkList } from 'nebula-react'

import navigationModel from './navigationModel'

const buildNavItems = (items) => (
  <Foldable.Wrapper key={items.label} bordered>
    <Foldable.Header padding>
      <h4 aria-label="Click to expand">
        { items.label }
      </h4>
    </Foldable.Header>
    <Foldable.Body>
      <LinkList.Wrapper spacing="md">
        {
          items.descendants.map(item => (
            <LinkList.Link component={NavLink} to={item.to}>
              { item.label }
            </LinkList.Link>
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
            <Foldable.Wrapper open={this.state.open} onFoldableChange={this.handleChange} breakpoint="max-sm">
              <Foldable.Header padding>
                <h2 aria-label="Click to expand" className="u-hidden@sm u-soft-left-md u-soft-right-md">
                  API
                </h2>
              </Foldable.Header>
              <Foldable.Body>
                { navigationModel.map(buildNavItems)}
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
