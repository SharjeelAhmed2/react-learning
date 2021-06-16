import React, { useState } from 'react'
var date = new Date().toLocaleTimeString();
const Digital =() =>
{
    const [date4, newDate] = useState(date);
    const getDate = () =>
    { 
        newDate(date);
    }
    setInterval(getDate, 1000)
   return (
       <>
       <h1 className="h1Count">{date4}</h1>
       </>
   )   
}

export default Digital;