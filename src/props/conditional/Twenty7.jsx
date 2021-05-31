import React from 'react';
import CardArray from '../CardArray';
import Cards from '../Cards';

const Twenty3  = () =>{
   return (
       <>
       <Cards
       key={CardArray[1].id}
    imgSrc={CardArray[1].imgSrc}
    title={CardArray[1].title}
    description={CardArray[1].description}
    links={CardArray[1].links}
        />
        <Cards
       key={CardArray[6].id}
    imgSrc={CardArray[6].img5rc}
    title={CardArray[6].title}
    description={CardArray[6].description}
    links={CardArray[6].links}
        />
        </>
  );
   };

   export default Twenty3;