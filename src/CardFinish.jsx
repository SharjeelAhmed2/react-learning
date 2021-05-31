import React from 'react';
import './index.css';
import * as cards from './props/Cards';
import CardArray from './props/CardArray';


const CardFinish = () =>(
  <>
  <h1 className="headingTag">Some Games and Their Links</h1>
  {CardArray.map((val,index) =>
  {
    return(
      <>
  
    <cards.default
    key={val.id}
    imgSrc={val.imgSrc}
    title={val.title}
    description={val.description}
    links={val.links}
    />
    </>
  );
  })}
  </>

);

export default CardFinish;