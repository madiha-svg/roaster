import React from "react";
import '../App.css';

function Head () {
    return(
        <>
        <h1 className="header">Company Name</h1>
        <h5 className="motto">Company Motto</h5>
        <h4 className="date">Since (Company Establishment Date)</h4>
        <hr className="line"></hr>
        <div class="box"></div>
        <button className="button">search</button>
        </>
    )
}

export default Head;