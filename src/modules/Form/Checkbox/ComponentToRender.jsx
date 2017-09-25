import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled, decompose }) => (
  decompose
    ? (
      <div>
        <div>
          <Form.CheckboxWrapper>
            <Form.CheckboxInput
              id="dark-matter"
              name="dark-matter"
              defaultChecked
              {...removeFalsy({ disabled })}
            />
            <Form.CheckboxLabel htmlFor="dark-matter">
              Dark Matter
            </Form.CheckboxLabel>
          </Form.CheckboxWrapper>
        </div>
        <div>
          <Form.CheckboxWrapper>
            <Form.CheckboxInput
              id="black-hole"
              name="black-hole"
              {...removeFalsy({ disabled })}
            />
            <Form.CheckboxLabel htmlFor="black-hole">
              Black Hole
            </Form.CheckboxLabel>
          </Form.CheckboxWrapper>
        </div>
      </div>
    )
    : (
      <div>
        <div>
          <Form.Checkbox
            name="dark-matter"
            defaultChecked
            {...removeFalsy({ disabled })}
          >
            Dark Matter
          </Form.Checkbox>
        </div>
        <div>
          <Form.Checkbox
            name="black-hole"
            {...removeFalsy({ disabled })}
          >
            Black Hole
          </Form.Checkbox>
        </div>
      </div>
    )
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  decompose: T.bool.isRequired
}

export default ComponentToRender
