import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as questions from './components/All';
import * as calculator from './calculator/Calculator';

ReactDOM.render(
  <>
  <h1>Calculator</h1>
 <ol>
   <li>{calculator.default(10,5)}</li>
   <li>{calculator.Subtraction(10,5)}</li>
   <li>{calculator.Multiplication(10,5)}</li>
   <li>{calculator.Division(10,5)}</li>
 </ol>
 </>
,
  document.getElementById('root')
);

