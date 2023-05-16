import React, { useState, useCallback } from 'react'

var funccount = new Set();
const CounterUseCallBack = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)

    const incrementCounter = useCallback(() => {
        setCount(count + 1)
    }, [count])
    const decrementCounter = useCallback(() => {
        setCount(count - 1)
    }, [count])
    const incrementNumber = useCallback(() => {
        setNumber(number + 1)
    }, [number])

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);

    console.log(funccount.size);

    return (
        <div>
            Count: {count}
            <button onClick={incrementCounter}>
                Increase counter
            </button>
            <button onClick={decrementCounter}>
                Decrease Counter
            </button>
            <button onClick={incrementNumber}>
                increase number
            </button>

            <br />
            {number}
        </div>
    )
}


export default CounterUseCallBack;
