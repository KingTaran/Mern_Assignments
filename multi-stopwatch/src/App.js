import './App.css';
import Stopwatch from './Stopwatch/Stopwatch.js';
import { useState } from "react";

function App() {
  const [counter,setCounter] = useState(0);
  const getStopWatches = () => {
    return Array(counter).fill(<Stopwatch></Stopwatch>);
  }
  return (
     <>
     <div className='addStopWatches'>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
     </div>
     <div>{getStopWatches()}</div>
     </> 
  );
}

export default App;
