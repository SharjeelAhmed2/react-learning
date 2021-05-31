import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as questions from './components/All';
import * as calculator from './calculator/Calculator';
import * as cards from './props/Cards';
import CardArray from './props/CardArray';
import CardFinish from './CardFinish';
import * as something from './props/conditional/Input';



ReactDOM.render(
  <>
  <CardFinish />
<something.Accept />
</>,
  document.getElementById('root')
);

