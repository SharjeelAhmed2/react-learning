import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as questions from './components/All';
import * as calculator from './calculator/Calculator';
import * as cards from './props/Cards';
ReactDOM.render(
  <>
  <cards.default imgSrc="https://cdn.wccftech.com/wp-content/uploads/2018/08/Resident-Evil-2-Remake-Claire-2060x1063.jpg"
    title="Resident Evil 2 Remake"
    description="2019 Survival Horror Video Game by Capcom<"
  />
   <cards.default imgSrc="https://cdn.vox-cdn.com/thumbor/qDUpJWX2EPU6MHZuxmhmStU04h0=/0x0:1920x1080/1400x788/filters:focal(807x387:1113x693):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/53631545/NieR_Automata_201604_SS_2B9S_01_ONLINE.0.jpg"
    title="Nier Automata"
    description="2017 Sc-Fi Drama Video Game by SquareEnix"
  />
  </>
,
  document.getElementById('root')
);

