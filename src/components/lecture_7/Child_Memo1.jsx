import React from "react";

const Child = ({ childData }) => {
    console.log("Child component render...");

    return (
        <div className="child-component">
            <h2>Child Component Data:</h2>
            {
                childData.map(
                    (data, index) => <p key={index}>{data} {index + 1}</p>
                )
            }
        </div>
    )
};

export default Child