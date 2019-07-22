import React, { useState } from 'react'
import Input from './Input/Input'
import Output from './Output/Output'

function IOContainer(props) {

    const [goalType, setGoalType] = useState("")
    const [goalSummary, setGoalSummary] = useState("")
    const [goalDescription, setGoalDescription] = useState("")
  
    console.log("goal type", goalType)
    console.log("goal summary", goalSummary)
    console.log("goal description", goalDescription)
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(e.target)
    }

    const options = [
        { key: 'u', text: 'Unsure', value: 'unsure' },
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ];

    return(
        <>
            <Input options={options} handleSubmit={handleSubmit}/>
            <Output/>
        </>
    )
}

export default IOContainer