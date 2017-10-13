import React from 'react'
import { Card, Button, Icon } from 'nebula-react'
import { Link } from 'react-router-dom'

import MarkdownContainer from 'components/MarkdownContainer'
import githubIcon from 'assets/icons/github.svg'
import CSSMarkdown from './CSS.md'

const CSS = () => (
  <Card.Wrapper>
    <Card.Body>
      <Button component={Link} to="https://github.com/NebulaUI/nebula-css/blob/master/nebula-css/_settings.scss" size="sm" theme="alpha" className="u-push-bottom-md">
        <Icon icon={githubIcon} iconPosition="left" verticalAlign="middle" width="22px" height="22px">
          Source
        </Icon>
      </Button>
      <MarkdownContainer source={CSSMarkdown} />
    </Card.Body>
  </Card.Wrapper>
)

export default CSS
