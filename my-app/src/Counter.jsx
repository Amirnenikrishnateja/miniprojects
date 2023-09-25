import React from 'react';
import { useState } from "react";

var orginal=25
var Counter=function (){
    var[a,seta]=React.useState(orginal)
    function inc(){
       seta(++a) 
    }
    function dec(){
       seta(--a) 
    }
    function res(){
        seta(orginal)
    }
    return(
     <div className='box'>
    <h1>counter{a}</h1>
    <button onClick={()=>inc()}>increment</button>&nbsp;
    <button onClick={()=>dec()}>decrement</button>&nbsp;
    <button onClick={()=>res()}>reset</button>&nbsp;
    </div>
    )
    

}
export default Counter;