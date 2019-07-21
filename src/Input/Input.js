import React from 'react';
import InputType from './InputType';
import InputDescription from './InputDescription';

class Input extends React.Component {


    render() {
        return(
            <div>
                <h1>Input</h1>
                <InputType/>
                <InputDescription/>
            </div>
        );
    }
}

export default Input