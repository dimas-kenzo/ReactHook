import "./App.css";
import StateTutorial from "./UseState/StateTutorial";
import RefTutorial from "./UseRef/RefTutorial";
import RefTutorial2 from "./UseRef/RefTutorial2";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
// import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallBackTutorial";

function App() {
  return (
    <div className="App">
      <StateTutorial /><hr />
      <RefTutorial /><RefTutorial2 /><hr />
      <ReducerTutorial /><hr />
      <EffectTutorial /><hr />
      <ContextTutorial /><hr />
      {/* <ImperativeHandle /><hr /> */}
      <MemoTutorial /><hr />
      <CallBackTutorial />
    </div>
  );
}

export default App;