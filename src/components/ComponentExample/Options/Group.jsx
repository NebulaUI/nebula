import React from 'react'
import T from 'prop-types'
import { BareList, MatrixList, Foldable } from 'nebula-react'

import Option from './Option'

const Group = ({ title, listType, options, foldable, foldableOpenOnMount, ...rest }) => {
  const buildGroupList = () => {
    if (listType === 'matrix') {
      return (
        <MatrixList.Wrapper spacing="md" className="u-flush-bottom">
          { options.map(option =>
            (
              <MatrixList.Item key={option.stateKey}>
                <Option listType={listType} {...option} {...rest} />
              </MatrixList.Item>
            )
          ) }
        </MatrixList.Wrapper>
      )
    }
    return (
      <BareList.Wrapper spacing="md" className="u-flush-bottom">
        { options.map(option =>
          (
            <BareList.Item key={option.stateKey}>
              <Option {...option} {...rest} />
            </BareList.Item>
          )
        ) }
      </BareList.Wrapper>
    )
  }

  const buildFoldableGroup = () => (
    <Foldable.Wrapper defaultOpen={foldableOpenOnMount ? 'open' : 'closed'}>
      <Foldable.Header padding>
        { title && <h2>{ title }</h2> }
      </Foldable.Header>
      <Foldable.Body transition>
        { buildGroupList() }
      </Foldable.Body>
    </Foldable.Wrapper>
  )

  const buildGroup = () => (
    <div>
      { title && <h2>{ title }</h2> }
      { buildGroupList() }
    </div>
  )

  return foldable ? buildFoldableGroup() : buildGroup()
}

Group.propTypes = {
  title: T.string.isRequired,
  foldableOpenOnMount: T.bool,
  foldable: T.bool,
  listType: T.string,
  options: T.arrayOf(
    T.shape({
      stateKey: T.string.isRequired
    }).isRequired,
  ).isRequired
}

export default Group
