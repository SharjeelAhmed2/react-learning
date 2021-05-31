import React from 'react';
import CardArray from '../CardArray';
import Cards from '../Cards';

const Twenty3  = () =>{
   return (
       <>
       <Cards
       key={CardArray[0].id}
    imgSrc={CardArray[0].imgSrc}
    title={CardArray[0].title}
    description={CardArray[0].description}
    links={CardArray[0].links}
        />
        <Cards
       key={CardArray[3].id}
    imgSrc={CardArray[3].img5rc}
    title={CardArray[3].title}
    description={CardArray[3].description}
    links={CardArray[3].links}
        />
        </>
  );
   };

   export default Twenty3;