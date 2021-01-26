import React, {useState, useEffect} from 'react';
import './timer.css'

const Timer = ({time, step, autostart}) => {
    const [counter, setCounter] = useState(time)
    const [start, setStart] = useState(autostart)
    const interval = step / 1000;
    useEffect(() => {
        const timer = setTimeout(() =>{
            if(counter > 0 && start === true){
                setCounter(counter - interval)
        }}, step)
        return timer;
    });
    return (<div className="display">
            <button  onClick = {() => setStart(true)}>Старт</button> 
            <button onClick = {() => setStart(false)}>Пауза</button>
            <div className="time"> {Number.isInteger(counter)?counter:counter.toFixed(1)} </div>
    </div>
    )
}

export default Timer;