import { useCallback, useState } from "react";
import PrintTable from "./PrintTable";

function CallBackTutorial() {
  const [number, setNumber] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const cssStyle = {
    backgroundColor : darkTheme ? 'black' : 'white',
    color : darkTheme ? 'white' : 'black'
  }

  
  const hitungAngka = useCallback(() => {
    return [ number * 1, number * 2, number * 3, number * 4, number * 5 ]
  }, [number])

  // const hitungAngka = () => {
  //   return [ number * 1, number * 2, number * 3, number * 4, number * 5 ]
  // }

  return (
    <div style={cssStyle}>
      <h2>UseCallBack</h2>
      <input type="number" value={number} onChange={e => setNumber(e.target.value)}/>
      <PrintTable hitungAngka = {hitungAngka} />
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle</button>
    </div>
  );
}

export default CallBackTutorial
