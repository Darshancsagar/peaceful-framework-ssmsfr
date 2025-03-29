import "./styles.css";
import {useEffect, useState, useRef} from 'react'

export default function App() {
  const otpLength= 4
  const[inputArray , setInputArray]=useState(new Array(otpLength).fill(""));
  const inputRef=useRef([])

  const handleUpdateOtp=(event, index)=>{
    if(isNaN(event.target.value)) return;
     const value=event.target.value.trim()
      const updatedArray=[...inputArray]
      updatedArray[index]=value.slice(-1)
      setInputArray(updatedArray)
      value &&  inputRef.current[index+1]?.focus()
  }

  const handleBackSpace=(event, index)=>{
    if(event.key==="Backspace" && !event.target.value){
      inputRef.current[index-1]?.focus()
    }
  }

  useEffect(()=>{
   inputRef.current[0].focus();
  },[])

  return (
    <div className="App">
      <h1>Enter OTP</h1>
      {
        inputArray?.map((input, index)=>{
          return(
            <input 
            className="inputBox"
            key={index}
            style={{width:"50px", height:"50px"}}
            value={inputArray[index]}
            ref={(input)=>{inputRef.current[index]=input}}
            onChange={(event)=>handleUpdateOtp(event , index)}
            onKeyDown={(event)=>handleBackSpace(event, index)}
            />
          )
        })
      }
    </div>
  );
}
