import React from 'react'
import OutputList from './OutputList'

const inputUrl = 'http://localhost:3000/inputs'

function Output() {

    let response = {}

    const getOutput = async (url) => {
        const response = await fetch(url)
        const jsonResponse = await response.json()
        response = {response, ...jsonResponse}
    }

    const processResponse = (response) => {
        
    }

        return(
        <>
            <h1>Output</h1>
            <OutputList/>
        </>
        )
}

export default Output