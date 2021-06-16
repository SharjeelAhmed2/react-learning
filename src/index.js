import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as questions from './components/All';
import * as calculator from './calculator/Calculator';
import * as cards from './props/Cards';
import CardArray from './props/CardArray';
import CardFinish from './CardFinish';
import * as something from './props/conditional/Input';

//import App from './hooks/App';
import App from './hooks/challenge/App'
import Digital from './hooks/Digital';
import Background from './hooks/BackgroundChange/Background';
ReactDOM.render(
  <>
  <Background/>
</>,
  document.getElementById('root')
);

