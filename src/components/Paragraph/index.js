import React,{useState} from "react";
import "./index.css"
export const  Paragraph = () =>{

    const paragraphStyle = {
        color:"blue",
        fontSize:"10vh",
        padding: "10px",
        minHight:"20vh"

    }
    const [paras]= useState([{
        title:"Hello Para One"
    },{
        title:"Hello Para Two"
    },{
        title:"Hello Para Three"
    },{
        title:"Hello Para Four"
    },{
        title:"Hello Para Five"
    }])

    return(
      <React.Fragment>
        {paras?.map((eachPara)=>(
            <p style={paragraphStyle} className="paragraphStyles">
            {eachPara.title}
            </p>
        ))}
            
      </React.Fragment>
            
       
    );
}