import React from 'react';
import InputType from './InputType';
import InputDescription from './InputDescription';

function Input(props) {


        return(
            <div>
                <h1>Input</h1>
                <InputType/>
                <InputDescription options={props.options} handleSubmit={props.handleSubmit}/>
            </div>
        );
}

export default Input