import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as questions from './components/All';
import * as calculator from './calculator/Calculator';
import * as cards from './props/Cards';
import CardArray from './props/CardArray';
ReactDOM.render(
  <>
  <cards.default
  imgSrc={CardArray[0].imgSrc}
  title={CardArray[0].title}
  description={CardArray[0].description}
   />
    <cards.default
  imgSrc={CardArray[1].imgSrc}
  title={CardArray[1].title}
  description={CardArray[1].description}
  />
    <cards.default
  imgSrc={CardArray[2].imgSrc}
  title={CardArray[2].title}
  description={CardArray[2].description}
  />
  </>
,
  document.getElementById('root')
);

