import React, { useState } from 'react';

const Background =() =>
{
    var color = 'yellow';
    var color2 = 'purple';
    const [curColor, nextColor] = useState(color);
    const [curColor2, nextColor2] = useState(color2);
    
    const ColorChange =() =>
    {
        nextColor(color2);
    }
    const ColorChange2 =() =>
    {
        nextColor2(color);
    }
   return(
       <>
       <div className="forEvent" style={{backgroundColor: curColor}}>
           <button onClick={ColorChange}  className="forEventButton" style={{backgroundColor: curColor2}}>Hello</button>
       </div>
       </>
   )  
}

export default Background;