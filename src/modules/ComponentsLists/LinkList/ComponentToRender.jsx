import React from 'react'
import T from 'prop-types'
import { LinkList } from 'nebula-react'

const ComponentToRender = ({ groupItems, spacing }) => (
  groupItems
    ? (
      <LinkList.Wrapper spacing={spacing}>
        <LinkList.Item>
          <LinkList.Group divider>
            <LinkList.Item>
              <LinkList.Content>
                <h4 className="u-flush-bottom">List Title</h4>
              </LinkList.Content>
            </LinkList.Item>
            <LinkList.Item>
              <LinkList.Link to="/" isActive>
                Group 1 Item 1
              </LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
              <LinkList.Link to="/">
                Group 1 Item 2
              </LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
              <LinkList.Link to="/">
                Group 1 Item 3
              </LinkList.Link>
            </LinkList.Item>
          </LinkList.Group>
        </LinkList.Item>
        <LinkList.Item>
          <LinkList.Group>
            <LinkList.Item>
              <LinkList.Link to="/">
                Group 2 Item 1
              </LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
              <LinkList.Link to="/">
                Group 2 Item 2
              </LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
              <LinkList.Link to="/">
                Group 2 Item 3
              </LinkList.Link>
            </LinkList.Item>
          </LinkList.Group>
        </LinkList.Item>
      </LinkList.Wrapper>
  ) : (
    <LinkList.Wrapper spacing={spacing}>
      <LinkList.Item>
        <LinkList.Content>
          <h4 className="u-flush-bottom">List Title</h4>
        </LinkList.Content>
      </LinkList.Item>
      <LinkList.Item>
        <LinkList.Link to="/" isActive>
          Item 1
        </LinkList.Link>
      </LinkList.Item>
      <LinkList.Item>
        <LinkList.Link to="/">
          Item 2
        </LinkList.Link>
      </LinkList.Item>
      <LinkList.Item>
        <LinkList.Link to="/">
          Item 3
        </LinkList.Link>
      </LinkList.Item>
    </LinkList.Wrapper>
  )
)

ComponentToRender.propTypes = {
  groupItems: T.bool.isRequired,
  spacing: T.oneOf(['md', 'sm'])
}

export default ComponentToRender
