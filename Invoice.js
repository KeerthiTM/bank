import React from "react";
import './Payment.css';
import user1 from './user1.webp';
import {useNavigate} from "react-router-dom";
import {useState} from "react"
import axios from "axios";

function Invoice(){
    let navigate = useNavigate();
    const [accountNo, setAccountNo] = useState("")
    const [amount, setAmount] = useState("")
    const [bill_no, setBillNo] = useState("")
    const [Name, setName] = useState("")

    async function handleSubmit() {
        if(!accountNo || !amount || !bill_no || !Name)
        {
            alert('Please enter all fields correctly!')
        }
        else{
            alert('Successfully Paid')
            let user = (await axios.get('http://localhost:4000/users/' + localStorage.getItem('user_id'))).data
            let creditor = (await axios.get('http://localhost:4000/users/' + accountNo)).data

            let history = (await axios.get('http://localhost:4000/invoices/')).data;

            axios.patch('http://localhost:4000/users/' + localStorage.getItem('user_id'), {
                balance: user.balance - amount
            })

            axios.patch('http://localhost:4000/users/' + accountNo, {
                balance: Number(creditor.balance) + Number(amount)
            })
        
            await axios.post('http://localhost:4000/invoices/', {
                amount: Number(amount),
                    sender_id : user.id,
                receiver_id : creditor.id,
                bill_no : bill_no
            })
        }

        
    }

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
            <p  onClick={() =>{navigate("/Fund");}} >{" "}   Fund Transfer</p>
        </div>
        <button class="A5" onClick={() =>{navigate("/Sec");}} >{" "}SignOut</button>
        <div class="sp"><h1 onClick={() =>{navigate("/Payment");}} >{" "}Salary Payment</h1></div>
        <div class="iv"><h1 onClick={() =>{navigate("/Invoice");}} >{" "}Invoice Payment</h1></div>
        <div class="pay">
        <h1>Be in </h1>
        <h1 class="payc">Control</h1>
        <h1>of your money</h1>
        </div>
        <div class="Acc">
            <h3>ACCOUNT NUMBER&emsp;&emsp;&emsp;&emsp;&ensp;:</h3>
            <div>
                <input onChange={(e) => setAccountNo(e.target.value)} />
            </div>
            <br/>
            <h3>ACCOUNT HOLDER NAME&emsp;&ensp;:</h3>
            <div>
                <input onChange={(e) => setName(e.target.value)}></input>
            </div>
            <br/>
            <h3>BILL NUMBER&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;:</h3>
            <div>
                <input onChange={(e) => setBillNo(e.target.value)} />
            </div>
            <br/>
            <h3>ENTER THE AMOUNT&emsp;&emsp;&emsp;&emsp;:</h3>
            <div>
                <input  onChange={(e) => setAmount(e.target.value)} />
            </div>
        </div>
        <button class="B5"  onClick={() => handleSubmit()} > MAKE PAY</button>
    </div>    
    );
}

export default Invoice;
