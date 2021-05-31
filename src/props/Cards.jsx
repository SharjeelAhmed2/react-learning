import React from 'react';
import Image from './Image';

function Cards(props)
{
    return (
        <>
         
    <div className="card">
  <Image imgSrc={props.imgSrc}/>
  <div className="container">
    <h4><b>{props.title}</b></h4> 
    <p>{props.description}</p> 
  </div>
  <a href={props.links} target="" className="button button4">
  Go Play
  </a>
  </div>
  </>
    );
}

export default Cards;