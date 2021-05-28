import React from 'react'


var date1 = new Date().getHours();
var text;
let colors = {
  color: 'red' 
};
if(date1 > 1 && date1 < 11)
{
    text = "Good Morning";
    colors.color  = 'blue'
}
else if(date1 >= 11 && date1 < 19)
{
      text = "Good Afternoon";
      colors.color = 'orange';
}
else if(date1 >= 19 && date1 <= 1)
{
       text = "Good Night";
       colors.color = 'green';
}






function Datechallenge()
{
  return(<h2>Hello Sir,<span style={colors}>{text}</span></h2>);
}

export default Datechallenge;