import React from "react";
import { Link } from "react-router-dom";

const Lecture_9 = () => {
    return (
        < div >
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div >
    )
}

export default Lecture_9