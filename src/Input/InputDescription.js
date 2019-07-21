import React from 'react'
import { Form } from 'semantic-ui-react'

function InputDescription() {

    const options = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ]
      
    let state = {}
    let { value } = state
    let handleChange = (e, { value }) => {}
    // let handleChange = (e, { value }) => setState({ value })


    return (
            <Form>
              {/* <Form.Group widths='equal'> */}
                <Form.Select fluid label='Current Goal' options={options} placeholder='Unsure' />
                <Form.Input fluid label='Specifically, what are you trying to accomplish?' placeholder='I want to...' />
              {/* </Form.Group> */}
              <Form.Group inline>
                <label>Size</label>
                <Form.Radio
                  label='Small'
                  value='sm'
                  checked={value === 'sm'}
                  onChange={handleChange}
                />
                <Form.Radio
                  label='Medium'
                  value='md'
                  checked={value === 'md'}
                  onChange={handleChange}
                />
                <Form.Radio
                  label='Large'
                  value='lg'
                  checked={value === 'lg'}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.TextArea label='About' placeholder='Tell us more about you...' />
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Form.Button>Submit</Form.Button>
            </Form>
          )
}

export default InputDescription