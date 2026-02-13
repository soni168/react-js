import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCount] = useState(0);
  //let counter=counter+1 (ye sirf browser k console log mai change krega)
const addValue = ()=>{
  setCount(counter+1)
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);



}
const removeValue = ()=>{
  setCount(counter-1)
  setCount(prevCount => prevCount - 1);
  setCount(prevCount => prevCount - 1);
  setCount(prevCount => prevCount - 1);

}
  return (
    <>
      <h1>React by Soni{counter} </h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>AddValue</button>
      {"   "}
      <button
      onClick={removeValue}>RemoveValue</button>
      {"   "}
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
