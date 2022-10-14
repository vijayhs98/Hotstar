import { useState } from "react";

const State = () => {
    // let [ value, update ] = useState("Hello")
    // let handleClick = () => {
    //     update("Hi")
    //     // alert("Its working.......")
    // }
    let [ value , update] = useState(0)
    let increase = () => {
        update(++value)       
    }
    let reset = () => {
        update(0)
    }
    let decrease = () => {
        update(--value)
    }
    return ( 
        <div className="state">
            {/* <h1>{value}</h1> 
            <button onClick={handleClick}>Click</button> */}
            <h1>{value}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrease}>Decrease</button>
        </div>
     );
}
 
export default State;

// {value}-Dynamic variable
// react hooks- hooks are functions that allows us to hook into react states and life-cycle features.We must import the hook before using it at the top level of the component.
// UseState Hook- This hook allows us to track a state in a function component.State generally refers to a data or a property that needs tracking in an application.
// Syntax of useState:-
// const [state,setstate] = useState(initialState)
//          |       |                      | 
//   The name of  The function You'll    The Initial State value
//    your state   eventually use to
//                change the value of 
//                     this state 
//                      
// The Initial state value will be displayed in the JSX and is updated when an event occurs like onClick().