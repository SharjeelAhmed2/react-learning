import React, { useState } from 'react';

var date = new Date().toLocaleTimeString();

const App = () =>
{
    const [date4, newDate] = useState(date);
    const getDate = () =>
    { 
        newDate(date);
    }
   return (
       <>
       <h1 className="h1Count">{date4}</h1>
        <button className="button button4" onClick={getDate}>Get Current Time</button>
       </>
   )
}

export default App;