import React, { useState } from 'react'
import Input from './Input/Input'
import Output from './Output/Output'

const inputUrl = 'http://localhost:3000/inputs'

function IOContainer() {

  const createInput = async (url, { goalType, goalSummary, goalDescription }) => {
    const postHeader = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    } 

    const postBody = {
      "goalType": goalType,
      "goalSummary": goalSummary,
      "goalDescription": goalDescription
    }

    const postObj = {
      method: "POST",
      headers: postHeader,
      body: JSON.stringify(postBody)
    }
    const response = await fetch(url, postObj)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
  }



  const handleSubmit = (e, state) => {
    e.preventDefault()
    createInput(inputUrl, state)
  }

    return(
        <>
            <Input handleSubmit={handleSubmit}/>
            <Output/>
        </>
    )
}

export default IOContainer