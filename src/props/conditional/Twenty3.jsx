import React from 'react';
import CardArray from '../CardArray';
import Cards from '../Cards';

const Twenty3  = () =>{
   return (
       <>
       <Cards
       key={CardArray[4].id}
    imgSrc={CardArray[4].imgSrc}
    title={CardArray[4].title}
    description={CardArray[4].description}
    links={CardArray[4].links}
        />
        <Cards
       key={CardArray[5].id}
    imgSrc={CardArray[5].img5rc}
    title={CardArray[5].title}
    description={CardArray[5].description}
    links={CardArray[5].links}
        />
        </>
  );
   };

   export default Twenty3;