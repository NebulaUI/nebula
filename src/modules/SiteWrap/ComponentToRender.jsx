import React from 'react'
import T from 'prop-types'
import { Card, SiteWrap } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ padding, nestCard }) => (
  nestCard ? (
    <SiteWrap
      {...removeFalsy({ padding })}
    >
      <Card>
        Hello Nebula.
      </Card>
    </SiteWrap>
  ) : (
    <SiteWrap
      {...removeFalsy({ padding })}
    >
      Hello Nebula.
    </SiteWrap>
  )
)

ComponentToRender.propTypes = {
  padding: T.bool.isRequired,
  nestCard: T.bool.isRequired
}

export default ComponentToRender
