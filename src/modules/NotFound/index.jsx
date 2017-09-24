import React from 'react'
import { Card, Section, SiteWrap } from 'nebula-react'

const NotFound = () => (
  <Section size="md">
    <SiteWrap padding>
      <h1>404!</h1>
      <Card>
        <p>We&apos;re sorry but we cannot find what you are looking for…</p>
      </Card>
    </SiteWrap>
  </Section>
)

export default NotFound
