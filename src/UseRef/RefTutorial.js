import React, { useState, useEffect, useRef } from "react";

function RefTutorial () {
  const [name, setName] = useState("")
  // const [count, setCount] = useState(0)
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1 
  })
  
  // useEffect(() => {
  //   setCount((prev) => prev + 1)
  // })


  

  return (
    <div>
      <h2>UseRef</h2>
      <input type="text" onChange={e => setName(e.target.value)} />
      <h3>Name : {name}</h3>
      <h3>Renders : { count.current }</h3>
    </div>
  )
}

export default RefTutorial;