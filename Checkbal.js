import React, { useEffect, useState } from "react";
import './Checkbal.css';
import {useNavigate} from "react-router-dom";
import user1 from './user1.webp';
import axios from "axios";
function Checkbal(){
    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [bal, setBal] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:4000/users/' + localStorage.getItem('user_id')).then((resp) => {
            setName(resp.data.name)
            setBal(resp.data.balance)
        })
    })

    return(
        <div>
            <div class="img"onClick={() =>{navigate("/User");}} >{" "}
            <img src={user1}  alt="User profile" height={"50"} width={"50"} />
            </div>
            <div class="B1">
                <h4>CorpBank</h4>
            </div>
            <div class="B2">
                <p onClick={() =>{navigate("/Main");}} >Back</p>
            </div>
            <div class="B3">
                <p onClick={() =>{navigate("/AccountStatement");}} >Account Statement</p>
            </div>
            <div class="B4">
                <p   onClick={() =>{navigate("/Fund");}} >    Fund Transfer</p>
            </div>
            <button class="B5"onClick={() =>{navigate("/Sec");}} >{" "}SignOut</button>
            <div class="B6">
                <h1>Hi! {name} </h1>
            </div>
            <div class="B7">
                <h1>Your Bank Balance :</h1>
            </div>
            <div class="B8">
                <h1>Rs {bal}</h1>
            </div>

        </div>
    )
}

export default Checkbal;