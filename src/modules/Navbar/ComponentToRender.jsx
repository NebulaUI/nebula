import React from 'react'
import T from 'prop-types'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { Navbar, Icon, Button, Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'
import logoImg from 'assets/img/redux.png'
import lightbulb from 'assets/icons/lightbulb.svg'

const ComponentToRender = ({
  sticky,
  reactRouter,
  reverseSourceOrder,
  logo,
  navItems,
  secondaryContent
}) => {
  const dropdownAlignment = navItems.dropdownAlignment === 'south-west'
  const buildNavLink = (to, children, className) => (
    reactRouter ? (
      <Navbar.Link component={NavLink} to={to}>
        { children }
      </Navbar.Link>
    ) : (
      <Navbar.Link to={to} {...removeFalsy({ className })}>
        { children }
      </Navbar.Link>
    )
  )

  const buildItemWithIcon = () => (
    navItems.icon ? (
      <Icon verticalAlign="middle" width="24px" height="24px" iconPosition="right" icon={lightbulb}>
        Pulsars
      </Icon>
    ) : (
      'Pulsars'
    )
  )

  const NavItems = (
    <Navbar.Content {...removeFalsy({ right: navItems.right })}>
      <Navbar.Item>
        { buildNavLink('/nebula/planets', 'Planets') }
      </Navbar.Item>
      <Navbar.Dropdown.Wrapper clickOutsideToClose>
        <Navbar.Dropdown.Toggle className="is-active">
          Galaxies
        </Navbar.Dropdown.Toggle>
        <Navbar.Dropdown.Content {...removeFalsy({ southWest: dropdownAlignment })}>
          <Navbar.Item>
            { buildNavLink('/nebula/galaxies/milky-way', 'Milky Way') }
          </Navbar.Item>
          <Navbar.Item>
            { buildNavLink('/nebula/galaxies/andromeda', 'Andromeda', 'is-active') }
          </Navbar.Item>
        </Navbar.Dropdown.Content>
      </Navbar.Dropdown.Wrapper>
      <Navbar.Item>
        { buildNavLink('/nebula/pulsars', buildItemWithIcon()) }
      </Navbar.Item>
    </Navbar.Content>
  )

  const SecondaryContentComponent = (type) => {
    switch (type) {
      case 'button':
        return (
          <Button size="sm" theme="alpha">
            CTA
          </Button>
        )
      case 'searchForm':
        return (
          <Form.Search small submitPosition="right" required style={{ width: '180px' }} />
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
      <Navbar.Item tag="div" {...removeFalsy({ resetLineHeight })}>
        { SecondaryContentComponent(componentType) }
      </Navbar.Item>
    </Navbar.Content>
  )

  const buildLogo = () => (
    logo.componentType === 'text' ? (
      <Navbar.Logo to="/nebula">
        Logo Text
      </Navbar.Logo>
    ) : (
      <Navbar.Logo to="/nebula" width="45px">
        <img src={logoImg} alt="React logo" />
      </Navbar.Logo>
    )
  )

  const Toggle = (
    <Navbar.Toggle.Wrapper>
      <Navbar.Toggle.Bars />
    </Navbar.Toggle.Wrapper>
  )

  const NavbarComponent = reverseSourceOrder
    ? (
      <Navbar.Wrapper {...removeFalsy({ sticky })}>
        <Navbar.Overlay />
        <Navbar.Inner>
          {
            (
              navItems.included || (
                secondaryContent.included && !secondaryContent.keepAtTop
              )
            ) &&
            Toggle
          }
          {logo.included && buildLogo()}
          <Navbar.ContentWrapper>
            { secondaryContent.included && SecondaryContent(secondaryContent) }
            { navItems.included && NavItems }
          </Navbar.ContentWrapper>
        </Navbar.Inner>
      </Navbar.Wrapper>
      )
    : (
      <Navbar.Wrapper {...removeFalsy({ sticky })}>
        <Navbar.Overlay />
        <Navbar.Inner>
          {
            (
              navItems.included || (
                secondaryContent.included && !secondaryContent.keepAtTop
              )
            ) &&
            Toggle
          }
          {logo.included && buildLogo()}
          <Navbar.ContentWrapper>
            { navItems.included && NavItems }
            { secondaryContent.included && SecondaryContent(secondaryContent) }
          </Navbar.ContentWrapper>
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
  logo: T.shape({
    included: T.bool.isRequired
  }),
  navItems: T.shape({ right: T.bool }),
  secondaryContent: T.shape({
    right: T.bool,
    keepAtTop: T.bool,
    resetLineHeight: T.bool,
    componentType: T.string
  })
}

export default ComponentToRender
