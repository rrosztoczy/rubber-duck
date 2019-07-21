import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

function InputDescription() {

    const options = [
        { key: 'u', text: 'Unsure', value: 'unsure' },
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ];
    const [goal, setGoal] = useState(options[0].text);  
    const [goalSummary, setGoalSummary] = useState("");  
    const [goalDescription, setGoalDescription] = useState("");  

    console.log("goal state is", goal)
    console.log("goalSum state is", goalSummary)
    console.log("goalDes state is", goalDescription)


    return (
            <Form>
              <Form.Select value={goal} onChange={e => setGoal(e.target.innerText)}  options={options} fluid label='Current Goal' placeholder='Select Goal'/>
              <Form.Input value={goalSummary} onChange={e => setGoalSummary(e.target.value)}  fluid label='Specifically, what are you trying to accomplish?' placeholder='I want to...' />
              <Form.TextArea value={goalDescription} onChange={e => setGoalDescription(e.target.value)} label='Description' />
              <Form.Button>Submit</Form.Button>
            </Form>
          )
}

export default InputDescription