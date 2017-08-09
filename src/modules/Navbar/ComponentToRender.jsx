import React from 'react'
import T from 'prop-types'
import { Navbar } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({
  sticky,
  content1,
  content2: { right, keepAtTop, resetLineHeight }
}) => (
  <Navbar.Wrapper {...removeFalsy({ sticky })}>
    <Navbar.Overlay aria-hidden="true" tabIndex="0" />
    <Navbar.Inner role="navigation">
      <Navbar.Toggle.Wrapper aria-hidden="true" tabIndex="0">
        <Navbar.Toggle.Bars />
      </Navbar.Toggle.Wrapper>
      <Navbar.Logo to="/nebula">
        Logo Text
      </Navbar.Logo>
      <Navbar.Content {...removeFalsy({ right: content1.right })}>
        <Navbar.Item>
          <Navbar.Link to="/nebula/spacetime">
            Spacetime
          </Navbar.Link>
        </Navbar.Item>
        <Navbar.Dropdown.Wrapper>
          <Navbar.Dropdown.Toggle className="is-active">
            Galaxies
          </Navbar.Dropdown.Toggle>
          <Navbar.Dropdown.Content>
            <Navbar.Item>
              <Navbar.Link to="/nebula/galaxies/milky-way">
                Milky Way
              </Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
              <Navbar.Link className="is-active" to="/nebula/galaxies/andromeda">
                Andromeda
              </Navbar.Link>
            </Navbar.Item>
          </Navbar.Dropdown.Content>
        </Navbar.Dropdown.Wrapper>
        <Navbar.Item>
          <Navbar.Link to="/nebula/pulsars">
            Pulsars
          </Navbar.Link>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content {...removeFalsy({ right, keepAtTop })}>
        <Navbar.Item node="div" {...removeFalsy({ resetLineHeight })}>
          <button className="c-btn c-btn--sm c-btn--alpha">
            Call to action
          </button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar.Inner>
  </Navbar.Wrapper>
)

ComponentToRender.propTypes = {
  sticky: T.bool,
  content1: T.shape({ right: T.bool }),
  content2: T.shape({
    right: T.bool,
    keepAtTop: T.bool,
    resetLineHeight: T.bool
  })
}

export default ComponentToRender
