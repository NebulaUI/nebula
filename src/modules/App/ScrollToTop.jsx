import React, { Component } from 'react'
import T from 'prop-types'

import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return <div>{ this.props.children }</div>
  }
}

ScrollToTop.propTypes = {
  location: T.shape({
    pathname: T.string
  }),
  children: T.node.isRequired
}

export default withRouter(ScrollToTop)
