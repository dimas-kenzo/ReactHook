import { useState, useMemo } from "react";

export default function MemoTutorial() {
  const [number, setNumber] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const cssStyle = {
    backgroundColor : darkTheme ? 'black' : 'white',
    color : darkTheme ? 'white' : 'black'
  }

  
  const memo = useMemo(() => {
    return hitungAngka(number)
  }, [number])
  
  // const kalkulasi = hitungAngka(number)

  return (
    <div style={cssStyle}>
      <h2>UseMemo</h2>
      <input type="number" value={number} onChange={e => setNumber(e.target.value)}/>
      <h3>Kalkulasi : { memo } </h3>
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle</button>
    </div>
  );
}

function hitungAngka(num) {
  console.log('Loop started');
  for(let i=0; i < 10000000; i++) {}
  return num
}