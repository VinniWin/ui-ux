import React from "react";

interface ButtonProps{
   lable:string
}

const Button=({ lable}:ButtonProps)=>{
return <button>{lable}</button>
}

export default Button;