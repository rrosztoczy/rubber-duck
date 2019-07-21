import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// **********************************************Overall Plan*************************************************

// 1. TODO: Create barebones, simple app to take in some user input on a coding problem and return a suggestion from google
// 2. TODO: Extend into two modules: a problem solver, and a chat analysis
// 3. Chat analysis provides some meta data around what the coder thinks is happening such as level of code, correctness, semantic correctness, etc.


// Ultimately: Decide whether or not to use Redux, Hooks, Router, etc.
// Include testing
// Constantly refactor and work at good design decisions
