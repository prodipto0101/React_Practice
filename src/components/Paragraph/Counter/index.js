import React,{useState} from "react";
import "./index.css";
const Counter = ()=>{
    const [count,setCount]=useState(0);
    return(
        <React.Fragment>
            <p className="paragraphStyles"> Counter : {count}</p>
            <button className="buttonStyle" onClick={()=>setCount(count+1)}> Increase Count </button>
        </React.Fragment>
    )
}

export default Counter;