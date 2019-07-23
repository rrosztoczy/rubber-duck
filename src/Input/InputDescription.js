import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'


function InputDescription(props) {
  const [goalType, setGoalType] = useState("")
  const [goalSummary, setGoalSummary] = useState("")
  const [goalDescription, setGoalDescription] = useState("")

  console.log("GT is ", goalType)
  console.log("GS is", goalSummary)
  console.log("GD is", goalDescription)

  const options = [
      { key: 'u', text: 'Unsure', value: 'unsure' },
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
      { key: 'o', text: 'Other', value: 'other' },
    ];

    return (
            <Form onSubmit={e => props.handleSubmit(e, { goalType, goalSummary, goalDescription })}>
              <Form.Select value={goalType} onChange={e => setGoalType(e.target.innerText)}  options={options} fluid label='Current Goal' placeholder='Select Goal'/>
              <Form.Input value={goalSummary} onChange={e => setGoalSummary(e.target.value)}  fluid label='Specifically, what are you trying to accomplish?' placeholder='I want to...' />
              <Form.TextArea value={goalDescription} onChange={e => setGoalDescription(e.target.value)} label='Description' />
              <Form.Button>Submit</Form.Button>
            </Form>
          )
}

export default InputDescription