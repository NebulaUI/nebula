import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled, decompose }) => (
  decompose
    ? (
      <div>
        <div>
          <Form.RadioWrapper>
            <Form.RadioInput
              id="light-speed"
              name="speed"
              defaultChecked
              {...removeFalsy({ disabled })}
            />
            <Form.RadioLabel htmlFor="light-speed">
              Light speed
            </Form.RadioLabel>
          </Form.RadioWrapper>
        </div>
        <div>
          <Form.RadioWrapper>
            <Form.RadioInput
              id="supersonic-speed"
              name="speed"
              defaultChecked
              {...removeFalsy({ disabled })}
            />
            <Form.RadioLabel htmlFor="supersonic-speed">
              Supersonic speed
            </Form.RadioLabel>
          </Form.RadioWrapper>
        </div>
      </div>
    )
    : (
      <div>
        <div>
          <Form.Radio
            defaultChecked
            name="speed"
            {...removeFalsy({ disabled })}
          >
            Light speed
          </Form.Radio>
        </div>
        <div>
          <Form.Radio
            name="speed"
            {...removeFalsy({ disabled })}
          >
            Super Sonic
          </Form.Radio>
        </div>
      </div>
    )
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  decompose: T.bool.isRequired
}

export default ComponentToRender
