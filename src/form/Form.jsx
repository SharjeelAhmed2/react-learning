import React, { useState } from 'react';

const Form = () =>
{
   const [name, Lastname] = useState(); 
   const [fullname, FilledName] = useState();
   const InputUser = (event) =>
   {
       Lastname(event.target.value);
   }
   const OnDominant =()=>
   {
       FilledName(name);
   }
      return (
          <>
          <h1>Hello {fullname}</h1>
          <input placeholder="Enter Your Name" onChange={InputUser} value={name}/>
          <button onClick={OnDominant}>Submit</button>
          </>
      );
  
}

export default Form;