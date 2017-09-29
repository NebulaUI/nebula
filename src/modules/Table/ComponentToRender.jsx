import React from 'react'
import T from 'prop-types'
import { Table } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({
 spacing,
 rowHighlight,
 breakpoint,
 sortDOB,
 sortCity,
 sortName,
 footer
}) => (
  <Table.Container>
    <Table.Wrapper
      spacing={spacing}
      {...removeFalsy({ stackAt: breakpoint === 'none' ? false : breakpoint })}
    >
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>
            {
              sortName ? (
                <Table.SortButton>
                  Name
                </Table.SortButton>
              ) : 'Name'
            }
          </Table.HeaderCell>
          <Table.HeaderCell>
            {
              sortCity ? (
                <Table.SortButton>
                  City
                </Table.SortButton>
              ) : 'City'
            }
          </Table.HeaderCell>
          <Table.HeaderCell>
            {
              sortDOB ? (
                <Table.SortButton>
                  DOB
                </Table.SortButton>
              ) : 'DOB'
            }
          </Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body {...removeFalsy({ hoverRowHighlight: rowHighlight })}>
        <Table.Row>
          <Table.Cell>
            Robert Smith
          </Table.Cell>
          <Table.Cell>
            Manchester
          </Table.Cell>
          <Table.Cell>
            1984-11-16
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            John Faulkner
          </Table.Cell>
          <Table.Cell>
            San Fransisco
          </Table.Cell>
          <Table.Cell>
            1981-05-24
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Mark Hamilton
          </Table.Cell>
          <Table.Cell>
            London
          </Table.Cell>
          <Table.Cell>
            1991-10-10
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Wrapper>
    {
      footer && (
        <Table.Footer style={{ textAlign: 'center' }}>
          Table Footer
        </Table.Footer>
      )
    }
  </Table.Container>
)

ComponentToRender.propTypes = {
  spacing: T.string.isRequired,
  breakpoint: T.string.isRequired,
  sortName: T.bool.isRequired,
  sortCity: T.bool.isRequired,
  sortDOB: T.bool.isRequired,
  footer: T.bool.isRequired,
  rowHighlight: T.bool.isRequired
}

export default ComponentToRender
