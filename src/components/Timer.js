import React, {useState, useEffect} from 'react';
import './timer.css'

const Timer = ({id, time, step, autostart}) => {
    const [counter, setCounter] = useState(time)
    const [start, setStart] = useState(autostart)
    const interval = step / 1000;
    useEffect(() => {
        const timer = setTimeout(() =>{
            if(counter > 0 && start === true){
                setCounter(counter - interval)
            console.log('Залишилось часу на ' + id + '-му таймері: '  + counter.toFixed(2))
        }}, step)
        return timer;
    });
    return (<div className="display">
            <button  onClick = {() => setStart(true)}>Старт</button> 
            <button onClick = {() => setStart(false)}>Пауза</button>
            <div className="time"> {(Number.isInteger(counter)?counter:counter.toFixed(1)) > 0?
            (Number.isInteger(counter)?counter:counter.toFixed(1)):0} </div>
    </div>
    )
}

export default Timer;