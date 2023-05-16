// without Implementation memoization

import { useState } from 'react';
import Child from './Child_Memo2';

export default function Parent_Memo2() {
    const [parentData, setParentData] = useState(["parent data"]);
    const [childData, setChildData] = useState(["child data"]);

    const addParentData = () => {
        setParentData([...parentData, "new parent data"]);
    }

    const addChildData = () => {
        setChildData([...childData, "new child data"]);
    }


    console.log("Parent component render...");

    return (
        <div className='Parent-component'>
            <div>
                <h2>Parent component Data:</h2>
                {
                    parentData.map(
                        (data, index) => <p key={index}>{data} {index + 1}</p>
                    )
                }
                <button onClick={addParentData}>Add parent data</button>
            </div>

            <div>
                <Child childData={childData} />
                <button onClick={addChildData}>Add child data</button>
            </div>

        </div>
    );
}