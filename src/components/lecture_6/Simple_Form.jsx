import React, { useState } from 'react';

const Simple_Form = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(`name =` + fname + ' ' + lname);
        alert(`name =` + fname + ' ' + lname);
    }


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" value={fname} onChange={(event) => setFname(event.target.value)} />
                <input type="text" value={lname} onChange={(event) => setLname(event.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Simple_Form