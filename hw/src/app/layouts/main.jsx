/* eslint-disable */
import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        console.log("click");
        initialize();
    };

    return (
        <div className="container mt-5">
            <h1> Main Page</h1>
            <h3>FireBase data initialisation</h3>
            <ul>
                <li>{status}</li>
                <li>{progress}%</li>
                {error && <li>Error: {error}</li>}
            </ul>
            <button onClick={handleClick} className="btn btn-primary">
                Initiate
            </button>
        </div>
    );
};

export default Main;
