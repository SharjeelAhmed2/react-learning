import React, { useState } from 'react';

var count = 0;


const App = () =>
{
   //Count = current value 
   //(0) = initial value
   //(setCount = new value
    const [count, setCount] = useState(0);
    const IncNum =() =>
{
    var countinc = count+1;
   setCount(countinc);
}
  const Zero =() =>
  {
    
      setCount(0);
  }  

    return (
        <>
        <h1 className="h1Count">{count}</h1>
        <button className="button button4" onClick={IncNum}>Click This</button>
        <button className="button button4" onClick={Zero}>Reset</button>
        </>
    )
}

export default App;