import React from "react";
import cbb4 from './cbb4.jpg';
import './Home.css';
import {useNavigate} from "react-router-dom";

function home(){
    let navigate = useNavigate();
    return(
        <div className="App">
        <img src={cbb4}  alt="CORPORATE BANKING" height={"520"} width={"1270"} />
        <button class="button button1" onClick={() =>{navigate("/Sec");}} >{" "}Login</button>
        </div>
    )
}

export default home;
