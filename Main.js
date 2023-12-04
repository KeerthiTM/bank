import React from "react";
import './Main.css';
import {useNavigate} from "react-router-dom";
import user1 from './user1.webp';

function Main(){
    let navigate = useNavigate();
    return(
    <div>
       <div class="img" onClick={() =>{navigate("/User");}} >{" "}
       <img src={user1}  alt="User profile" height={"50"} width={"50"} />
       </div>
       <div class="A1">
           <h4>CorpBank</h4>
        </div>
        <div class="A2">
            <p onClick={() =>{navigate("/Checkbal");}} >{" "}Veiw Balance</p>
        </div>
        <div class="A3">
            <p onClick={() =>{navigate("/AccountStatement");}} >Account Statement</p>
        </div>
        <div class="A4">
            <p   onClick={() =>{navigate("/Payment");}} >  Fund Transfer</p>
        </div>
        <button class="A5" onClick={() =>{navigate("/Sec");}} >{" "}SignOut</button>
        <div class="Z6">
            <h4>                  Money never declines,just moves</h4>
        </div>
        <div class="A7">
            <h2>One of the Trusted Corporate</h2>
        </div>
        <div class="A8">
            <h2>Banking & Service</h2>
        </div>
        <div class="A10">
            <p>Good Banking is produced not by good laws, but by good banks.</p>
            <p>In banking or finance, trust is the only thing you have to sell.</p>
        </div>
        <button class="A12"  onClick={() =>{navigate("/About");}} >{" "}  About Us</button>
        <button class="A13"  onClick={() =>{navigate("/Payment");}} >{" "}  Make Payment</button>
    </div>    
    )
}

export default Main;
