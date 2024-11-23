
import React from "react";

//props

// const Funcprops =(a)=>{
//     return(
//         <>
//         <h2>helo</h2>
//         <p>{2+2}</p>
//         <p>my name is {a.num1}</p>
//         </>
//     )
// }
// export default Funcprops

// class PropsClass extends React.Component{
//     render(){
//         return(
//             <>
//             <p>welcome {this.props.name}</p>
//             </>
//         )
//     }
// }
// export default PropsClass

// states

// class StateClass extends React.Component{

//     constructor(props)
//     {
//         super(props)
//         this.state={name:"hi madhu"}
//     }
//     render(){
//         return(
//             <>
//             <h2>{this.state.name}</h2>
//             </>
//         )
//     }
// }
// export default StateClass

//Task-1 change message by button

// class StateClass extends React.Component{

//     constructor(props)
//     {
//         super(props)
//         this.state={name:"hi madhu"}
//     }

//     ChangeMessage(){
//         this.setState({name:"day2"})
//     }
    
//     render(){
//         return(
//             <>
//             <h2>{this.state.name}</h2>
//             <button onClick={()=>this.ChangeMessage()}>Click</button>
//             </>
//         )
//     }
// }
// export default StateClass

//function usestate - task2 increment and decrement

// import React , {useState}from "react";

// export default function FunctionState (){
//     const [count,setCount]= useState(0)
//     return(
//         <>
//         <h1> Count value - {count}  </h1>
//         <button onClick={()=> setCount(count-1) }>Decrement</button>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(0)}>Reset</button>
//         </>
//     )
// }

//toggle project- task 3

const BooleanToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToggled( !isToggled )}>
        {isToggled ? 'On' : 'Off'}
      </button>
    </div>
  );
};

export default BooleanToggle;






