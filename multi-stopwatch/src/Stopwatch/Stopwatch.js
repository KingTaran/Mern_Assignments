import { useState } from "react";
import './Stopwatch.css'
import GenericSpan from './Components/GenerateSpan'
function Stopwatch(){
  const [stopWatchState,setStopWatchState] = useState(0)
  const [secPassed, setSecPassed] = useState(0)
  const [timerId,setTimerId] = useState(null)
  const startTimer = (_) => {
    let tID = setInterval(() => {setSecPassed((sec) => sec + 1);
    },1000);
    setTimerId(tID);
  };
  const stopTimer = (_) => {
    clearInterval(timerId);
    setSecPassed(0);
  };  
  const pauseTimer =(_) => {
    clearInterval(timerId);
  };
  const resumeTimer = (_) => {
    startTimer();
  };
  const get2DigValue = (num) => 
    (num<10 ? "0" + num : "" + num);
  
  const getFormattedTime = (secCount) => {
    let res='';
    let sec = secCount%60;
    secCount = parseInt(secCount/60);
    let min = secCount%60;
    secCount = parseInt(secCount/60);
    let hour = secCount % 24;
    res = get2DigValue(hour) + ":" + get2DigValue(min) + ":" + get2DigValue(sec);
    return res;
  }
  
    return(
    <>
      <div className='container'>
        
        {stopWatchState === 0 && (
             <>
             <GenericSpan type='start' text='Start' handleClick = {()=> {
              startTimer(); 
              setStopWatchState(1);}}/>
             </>
        )}

        {stopWatchState === 1 && (
             <>
             <GenericSpan type='stop' text='Stop' handleClick = {()=> {
              stopTimer();
              setStopWatchState(0)}}/>
             <GenericSpan type='timer' text={getFormattedTime(secPassed)} />
             <GenericSpan type='pause' text='Pause' handleClick = {()=> {
              pauseTimer();
              setStopWatchState(2);}}/>
             </>
        )}
        {stopWatchState === 2 && (
             <>
             <GenericSpan type='stop' text='Stop' handleClick = {()=> {
              stopTimer();
              setStopWatchState(0)}}/>
             <GenericSpan type='timer' text={getFormattedTime(secPassed)} />
             <GenericSpan type='resume' text='Resume' handleClick = {()=> {
              resumeTimer();
              setStopWatchState(1)}}/>
             </>
        )}
        

        
      </div>
    </>
)};

export default Stopwatch;

