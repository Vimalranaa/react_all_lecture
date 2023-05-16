import React, { useState } from "react";

const Lecture5StopwatchHook = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [mm, setMm] = useState(0)
    const [ss, setSs] = useState(0)
    const [ms, setMs] = useState(0)
    const [timerId, setTimerId] = useState(0)

    

    const handleButton1 = ()=> {
        let mim=mm, ses=ss,mis=ms
        if (isRunning) {
            clearInterval(timerId)
        }
        else {
            setTimerId(
                setInterval(() => {
                    mis++
                    if (mis >= 100) {
                        ses++;
                        mis = 0;
                    }
    
                    if (ses >= 60) {
                        mim++;
                        ses = 0;
                    }
                    setMm(mim)
                    setSs(ses)
                    setMs(mis)
                }, 10)
            )
        }
        setIsRunning(!isRunning);
    }

    return (
        <>
            <p>
                <span>{mm}</span> : 
                <span>{ss}</span> : 
                <span>{ms}</span>
            </p>

            <button onClick={() =>handleButton1()}> {isRunning ? 'Stop' : 'Start'}</button>
        </>
    )

}

export default Lecture5StopwatchHook