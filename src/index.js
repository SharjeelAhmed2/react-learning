import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as questions from './components/All';
import * as calculator from './calculator/Calculator';
import * as cards from './props/Cards';
import CardArray from './props/CardArray';

function gCard(val)
{
  return(
    <cards.default
    imgSrc={val.imgSrc}
    title={val.title}
    description={val.description}
    />
  );
}
ReactDOM.render(
  <>
  {CardArray.map(gCard)}
  </>
,
  document.getElementById('root')
);

