import React, { useState } from 'react';
import OutputItem from './OutputItem'

function OutputList() {
    // initial goal: take input from form, break into array and print out list of what was typed
    const renderOutputList = () => {
        return <OutputItem/>
    }
    return renderOutputList()
}

export default OutputList