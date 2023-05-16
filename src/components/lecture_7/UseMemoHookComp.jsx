import { useState, useMemo } from "react";

const UseMemoHookComp = () => {
    const [tshirts, setTshirts] = useState(["T-Shirt"]);
    const [shoes, setShoes] = useState(["Shoes"]);
    const addTshirts = () => {
        setTshirts([...tshirts, "new T-Shirt"]);
    }

    const totalTshirts = () => {
        console.log("totalTshirts function is running");
        return tshirts.length;
    }

    const memoizedTotalTshirts = useMemo(totalTshirts, [tshirts.length]);

    const addShoes = () => {
        setShoes([...shoes, "new Shoes"]);
    }

    return (
        <div className="hook-component">
            <div>
                <h2>List of T-Shirts: {memoizedTotalTshirts}</h2>
                {
                    tshirts.map(
                        (data, index) => <p key={index}>{data} {index + 1}</p>
                    )
                }
                <button onClick={addTshirts}>Load more T-Shirts</button>
            </div>
            <div>
                <h2>List of Shoes:</h2>
                {
                    shoes.map(
                        (data, index) => <p key={index}>{data} {index + 1}</p>
                    )
                }
                <button onClick={addShoes}>Load more Shoes</button>
            </div>

        </div>
    );
};

export default UseMemoHookComp;