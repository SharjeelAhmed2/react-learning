import React from 'react';

function Addition(a,b)
{
    let c = a+b;
    return c;
}
function Division(a,b)
{
    let c  = a/b;
    return  c;
}
function Multiplication(a,b)
{
    let c = a*b;
    c = c.toFixed(2);
    return c;
}
function Subtraction(a,b)
{
    let c = a-b;
    return c;
}

export default Addition;
export {Division, Multiplication, Subtraction};