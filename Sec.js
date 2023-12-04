import React, { useState } from "react";
import './Sec.css';
import axios from "axios"


export default function Sec(){

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    if(!name || !password) {
      alert('Enter name or password!')
    }

    axios.get('http://localhost:4000/users').then((response) => {
      let match = false;
      let user_id;
      let acc_no;
      response.data.forEach((user) => {
        if(user.username === name && user.password === password) {
          match = true;
          user_id = user.id
          acc_no= user.accno;
          return;
        }
      })

      if(!match) {
        alert("Username or Password didn't match")
      } 
      else{
        localStorage.setItem("user_id", user_id)
        localStorage.setItem("acc_no",acc_no)
        window.location.href = "/Main"
      }
      
    })
  }

  // let navigate = useNavigate();
    return(
      <div class="wrapper">
      <div class="text-center mt-4 name">
          Welcome Back!
      </div>
      <br/>
      <br/>
      <div class="p-3 mt-3">
          <div class="form-field d-flex align-items-center">
              <input onChange={(e) => setName(e.target.value)} type="text"  placeholder="Username"></input>
          </div>
          <div class="form-field d-flex align-items-center">
              <input type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Password"></input>
          </div>
          <br/>
          <button class="btn mt-3" onClick={() =>{handleSubmit()}}>{" "} Login</button>
      </div>
  </div>
    )
}