import React from 'react';


function Cards(props)
{
    return (
        <>
    <div className="card">
  <img src={props.imgSrc} alt="Avatar" />
  <div className="container">
    <h4><b>{props.title}</b></h4> 
    <p>{props.description}</p> 
  </div>
</div>
    </>
    );
}

export default Cards;