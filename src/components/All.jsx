import React from 'react';
import List from "./List"
import Datechallenge from "./Datechallenge"
var netflix = ["Mr Robot", "Chernobly", "Black Mirror", "True Detective", "Mind Hunter"]

var date4 = new Date().toLocaleTimeString();
var time4 = new Date().toLocaleDateString();
const forDate = {
  color: 'red',
  textTransform: 'capitalize'
}

function All()
{

    return(
        <>
        <h1>My Top 5 Favorite TV shows</h1>
        <ol>
          <li>{netflix[0]}</li>
          <li>{netflix[1]}</li>
          <li>{netflix[2]}</li>
          <li>{netflix[3]}</li>
          <li>{netflix[4]}</li>
          
        </ol>
        <p>{`The current time is ${date4}`}</p>
        <p style={forDate}>{`The current date is ${time4}`}</p>
        <Datechallenge/>
        <List/>
        </>
    );

}

export default All;