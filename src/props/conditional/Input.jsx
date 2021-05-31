import React from 'react';
import Twenty3 from './Twenty3';
import Twenty7 from './Twenty7';
import Twenty9 from './Twenty9';
import Twenty2 from './Twenty2';
import CardFinish from '../../CardFinish';

function Input()
{
return(
    <div className="labelInput">
  <form onSubmit="return Accept()" action="/action_page.php">
    <label  for="fname">Search For Game Year</label>
    <input id="year" type="text"  placeholder="Enter Video Game Year"></input>
    <button className="button button3" onClick="">
  Go Play
  </button>
    </form>
    </div>
);
}

function Accept()
{
    let year = document.getElementById("year");
    if(year==="2013")
    { return <Twenty3 />
       
    }
    else if(
        year==="2017"
        
    )
    {
        return <Twenty7/>
        
    }
    
    else if(
        year==="2019"
    )
    {
        return<Twenty9/>
        
    }
    
    else if(
        year==="2020"
    )
    {
       return <Twenty2/>
       
    }

}
export default Input;
export {Accept}; 