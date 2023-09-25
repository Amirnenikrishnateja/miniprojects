import React from "react";
var Todo=function(){
    var [ar,Setar]=React.useState([])
     function add()
     {
        Setar([...ar,document.getElementById("input").value])
        console.log()
     }
    
    return(<div className="box">
        <input type="text" id="input" />
        <button onClick={()=>add()}>Add</button>
        <ul>
            {
                ar.map(a=>{return <li>{a}</li>})
            }
        </ul>
    </div>);

}
export default Todo;