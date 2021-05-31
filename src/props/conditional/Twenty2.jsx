import React from 'react';
import CardArray from '../CardArray';
import Cards from '../Cards';

const Twenty3  = () =>{
   return (
       <>
       <Cards
       key={CardArray[7].id}
    imgSrc={CardArray[7].imgSrc}
    title={CardArray[7].title}
    description={CardArray[7].description}
    links={CardArray[7].links}
        />
        <Cards
       key={CardArray[8].id}
    imgSrc={CardArray[8].img5rc}
    title={CardArray[8].title}
    description={CardArray[8].description}
    links={CardArray[8].links}
        />
        </>
  );
   };

   export default Twenty3;