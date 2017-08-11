import React from 'react'
import T from 'prop-types'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({
  sticky,
  reactRouter,
  reverseSourceOrder,
  logoIncluded,
  navItems,
  secondaryContent
}) => {
  const dropdownAlignment = navItems.dropdownAlignment === 'south-west'
  const buildNavLink = (to, children, className) =>
    reactRouter ? (
      <Navbar.Link component={NavLink} to={to}>
        { children }
      </Navbar.Link>
    ) : (
      <Navbar.Link to={to} {...removeFalsy({ className })}>
        { children }
      </Navbar.Link>
    )
  const NavItems = (
    <Navbar.Content {...removeFalsy({ right: navItems.right })}>
      <Navbar.Item>
        {buildNavLink('/nebula/space-time', 'Space Time')}
      </Navbar.Item>
      <Navbar.Dropdown.Wrapper>
        <Navbar.Dropdown.Toggle className="is-active">
          Galaxies
        </Navbar.Dropdown.Toggle>
        <Navbar.Dropdown.Content {...removeFalsy({ southWest: dropdownAlignment })}>
          <Navbar.Item>
            {buildNavLink('/nebula/galaxies/milky-way', 'Milky Way')}
          </Navbar.Item>
          <Navbar.Item>
            {buildNavLink('/nebula/galaxies/andromeda', 'Andromeda', 'is-active')}
          </Navbar.Item>
        </Navbar.Dropdown.Content>
      </Navbar.Dropdown.Wrapper>
      <Navbar.Item>
        {buildNavLink('/nebula/pulsars', 'Pulsars')}
      </Navbar.Item>
    </Navbar.Content>
  )

  const SecondaryContentComponent = (type) => {
    switch (type) {
      case 'button':
        return (
          <button className="c-btn c-btn--sm c-btn--alpha">
            Call to action
          </button>
        )
      default:
        return (
          <span>Plain Text</span>
        )
    }
  }

  // eslint-disable-next-line react/prop-types
  const SecondaryContent = ({ right, keepAtTop, resetLineHeight, componentType }) => (
    <Navbar.Content {...removeFalsy({ right, keepAtTop })}>
      <Navbar.Item node="div" {...removeFalsy({ resetLineHeight })}>
        {SecondaryContentComponent(componentType)}
      </Navbar.Item>
    </Navbar.Content>
  )

  const Logo = (
    <Navbar.Logo to="/nebula">
      Logo Text
    </Navbar.Logo>
  )

  const Toggle = (
    <Navbar.Toggle.Wrapper aria-hidden="true" tabIndex="0">
      <Navbar.Toggle.Bars />
    </Navbar.Toggle.Wrapper>
  )

  const NavbarComponent = reverseSourceOrder
    ? (
      <Navbar.Wrapper {...removeFalsy({ sticky })}>
        <Navbar.Overlay aria-hidden="true" tabIndex="0" />
        <Navbar.Inner role="navigation">
          {
            (
              navItems.included || (
                secondaryContent.included && !secondaryContent.keepAtTop
              )
            ) &&
            Toggle
          }
          {logoIncluded && Logo}
          {secondaryContent.included && SecondaryContent(secondaryContent)}
          {navItems.included && NavItems}
        </Navbar.Inner>
      </Navbar.Wrapper>
      )
    : (
      <Navbar.Wrapper {...removeFalsy({ sticky })}>
        <Navbar.Overlay aria-hidden="true" tabIndex="0" />
        <Navbar.Inner role="navigation">
          {
            (
              navItems.included || (
                secondaryContent.included && !secondaryContent.keepAtTop
              )
            ) &&
            Toggle
          }
          {logoIncluded && Logo}
          {navItems.included && NavItems}
          {secondaryContent.included && SecondaryContent(secondaryContent)}
        </Navbar.Inner>
      </Navbar.Wrapper>
    )

  return reactRouter ? (
    <Router>
      {NavbarComponent}
    </Router>
  ) : (
    NavbarComponent
  )
}

ComponentToRender.propTypes = {
  sticky: T.bool,
  reactRouter: T.bool,
  reverseSourceOrder: T.bool,
  logoIncluded: T.bool,
  navItems: T.shape({ right: T.bool }),
  secondaryContent: T.shape({
    right: T.bool,
    keepAtTop: T.bool,
    resetLineHeight: T.bool,
    componentType: T.string
  })
}

export default ComponentToRender
