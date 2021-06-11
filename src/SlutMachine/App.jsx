import React from 'react';


const Slot =(props)=>

{   
     let x = props.x;
     let y = props.y;
     let z = props.z;
    if(x===y&&y===z)
    {
    return(
    <>
    <h1>{x} {y} {z}</h1>
    <h2>This is Matching</h2>
    </>
    )
    }
    else{
     
    return(
        <>
        <h1>{x} {y} {z}</h1>
        <h2>This is not matching</h2>
        </>
        )   
    }
}


const App = () =>
{
    return(
        <>
        <h1>This is a 🎰 If Else </h1>
        <Slot x = "😄" y= "😄" z="😄"/>
        <Slot x = "🎅" y= "👍" z = "🏮" />
        <Slot x = "🦺" y= "🦺" z = "🦺" />
        </>
    )
}

export default App;