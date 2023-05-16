import React, { useState } from 'react'


const Lecture_5_counter = () => {
    const [count, setCount] = useState(0)


    function handleClick() {
        setCount(count + 1)
    }

    return (

        <div>
            <h1>{count}</h1>

            <button onClick={() => handleClick()}>Click Me</button>
        </div>
    );
}


export default Lecture_5_counter;
