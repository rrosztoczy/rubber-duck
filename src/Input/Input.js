import React from 'react';
import InputType from './InputType';
import InputDescription from './InputDescription';
import { tsPropertySignature } from '@babel/types';

function Input(props) {


        return(
            <div>
                <h1>Input</h1>
                <InputType/>
                <InputDescription handleSubmit={props.handleSubmit}/>
            </div>
        );
}

export default Input