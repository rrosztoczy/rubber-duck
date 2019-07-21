import React from 'react'

function InputDescription() {
    return (
        <>
            <h1>Description</h1>
            <form action="/action_page.php" id="usrform">
            <label>Name: </label>
            <textarea name="comment" form="usrform">Enter text here...</textarea>
            <input type="submit"/>
            </form>
           
        </>
    )
}

export default InputDescription