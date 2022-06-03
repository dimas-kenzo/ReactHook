import React, { useRef } from "react";

function RefTutorial2 () {

  const inputEle = useRef();
  const handleClick = () => {
    console.log(inputEle.current)
    inputEle.current.style.width = "300px"
    inputEle.current.focus()
  }
  
   return (
    <div>
      <input type="text" ref={inputEle} /><br /><br />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default RefTutorial2;