//Class update array

// import React from "react";

// export default class ArrayClass extends React.Component{
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             list:["html","css","Boostrap","Javascript"]
//         }
//     }
//     render()
//     {
//         return( 
//         <>
//             <ol>
//                 {this.state.list.map(e=>(<li>{e}</li>))}
//             </ol>
//             </>
//         )
//     }
// }

//Function update array

// import React,{useState} from "react";

// export default function FunctionArray(){

//     const[list]=useState(["html", "css", "Bootstrap", "Javascript"])

//     return(
//     <>
//     <ul>
//         {list.map(e=>(<li>{e}</li>))}
//     </ul>
//     </>
//     )
// }

//list and keys

// import React,{useState} from "react";

// export default function Listkeys(){

//     const[list]=useState(["html", "css", "Bootstrap", "Javascript"])

//     return(
//     <>
//     <ul>
//         {list.map((e,index)=>(<li key={index}>{e}</li>))}
//         {list.map(e=>(<li key={e}>{e}</li>))}
//     </ul>
//     </>
//     )
// }

// function usestate and input form irukum

import React,{useState} from "react";

export default function UseStateexample(){
    const[list,setList]= useState([]);
    const[value,setValue]=useState("mg");

    return(
        <>
        <input type="text" value={value}  onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        </>
    )
}