
import './User.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import user1 from './user1.webp';
function User(){
    let navigate = useNavigate();

    const [acctype, setacctype] = useState('')
    const [accno, setaccno] = useState('')
    const [name, setName] = useState('')
    const [fname, setfname] = useState('')
    const [dob, setdob] = useState('')
    const [add, setadd] = useState('')
    const [mobno, setmobno] = useState('')
    const [email, setemail] = useState('')
    const [gen, setgen] = useState('')
    const [pan, setpan] = useState('')
    useEffect(() => {
        axios.get('http://localhost:4000/users/' + localStorage.getItem('acc_no')).then((resp) => {
            setacctype(resp.data.acctype)
            setaccno(resp.data.accno)
            setName(resp.data.name)
            setfname(resp.data.fathername)
            setdob(resp.data.DOB)
            setadd(resp.data.address)
            setmobno(resp.data.phoneno)
            setemail(resp.data.emailid)
            setgen(resp.data.gender)
            setpan(resp.data.panno)
        })
    })

    return(
        <div>
            <div  class="img">
            <img src={user1}  alt="User profile" height={"50"} width={"50"} />
            </div>
       <div class="A1">
           <h4>CorpBank</h4>
        </div>
        <div class="A2">
            <p onClick={() =>{navigate("/Checkbal");}} >{" "} Veiw Balance</p>
        </div>
        <div class="A3">
            <p onClick={() =>{navigate("/AccountStatement");}} >Account Statement</p>
        </div>
        <div class="A4">
            <p    onClick={() =>{navigate("/Payment");}} >  Fund Transfer</p>
        </div>
        <button class="A5" onClick={() =>{navigate("/Sec");}} >{" "} SignOut</button>
        <div class="A6">
            <button class="t5"onClick={() =>{navigate("/Main");}} >{" "}Back</button>
            <h3>Account  type &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;: &emsp;&emsp; &emsp;&emsp;{acctype}</h3>
            <br/>
            <h3>Account Number&emsp;&emsp;&emsp;&emsp;&emsp;: &emsp;&emsp;&emsp;&emsp;{accno}</h3>
            <br/>
            <h3>Name&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp;&emsp;{name}</h3>
            <br/>
            <h3>Father Name  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp;&emsp;{fname}</h3>
            <br/>
            <h3>Date of Birth &emsp;&emsp;&emsp;&emsp;&emsp;  &emsp;&emsp;:&emsp;&emsp;&emsp;&emsp;{dob}</h3>
            <br/>
            <h3>Address&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;:&emsp;&emsp;&emsp;&emsp;{add}</h3>
            <br/>
            <h3>Mobile Number&emsp;&emsp;&ensp;&ensp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp;&emsp;{mobno}</h3>
            <br/>
            <h3>E-mail&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp;&emsp;{email}</h3>
            <br/>
            <h3>Gender&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp;&emsp;{gen}</h3>
            <br/>
            <h3>PAN number &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp;&emsp;{pan}</h3>
        </div>
        
        </div>
    );
}

export default User;