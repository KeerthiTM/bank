import React, { useEffect } from 'react'
import './AccountStatement.css'
import {useNavigate} from "react-router-dom";
import user1 from './user1.webp';
import axios from "axios";
import {useState} from "react"

const AccountStatement = () => {
  let navigate = useNavigate();
    const [accountNo, setAccountNo] = useState("")
    const [amount, setAmount] = useState("")

    const [transactions, setTransactions] = useState([]);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
      async function fetchData() {
        let t = (await axios.get('http://localhost:4000/transactions/')).data;
        let i = (await axios.get('http://localhost:4000/invoices/')).data;

        setTransactions(t)
        setInvoices(i)
      }

      fetchData();
    }, [])

    async function handleSubmit() {
        let user = (await axios.get('http://localhost:4000/users/' + localStorage.getItem('user_id'))).data
        let creditor = (await axios.get('http://localhost:4000/users/' + accountNo)).data

        axios.patch('http://localhost:4000/users/' + localStorage.getItem('user_id'), {
            balance: user.balance - amount
        })

        axios.patch('http://localhost:4000/users/' + accountNo, {
            balance: creditor.balance + amount
        })
    }

  return (
    <div>
      <div class="img"onClick={() =>{navigate("/User");}} >{" "}
            <img src={user1}  alt="User profile" height={"50"} width={"50"} />
            </div>
            <div class="B1">
                <h4>CorpBank</h4>
            </div>
            <div class="B2">
                <p onClick={() =>{navigate("/Checkbal");}} >Veiw Balance</p>
            </div>
            <div class="E3">
                <p onClick={() =>{navigate("/Main");}} >Back</p>
            </div>
            <div class="B4">
                <p  onClick={() =>{navigate("/Fund");}} > Fund Transfer</p>
            </div>
            <button class="B5"onClick={() =>{navigate("/Sec");}} >{" "}SignOut</button>
            <h3>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Salary Payment history</h3>
        <table class="table" >
  <thead>
    <tr class="tr">
      <th scope="col">Sl.No</th>
      <th scope="col">Receiver Account No</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    {transactions.map((transaction, index) =>  <tr>
      <th scope="row" key={index}>{transaction.id}</th>
      <td >{transaction.receiver_id}</td>
      <td>{transaction.amount}</td>
      
    </tr>)}  
  </tbody>
</table>
<br/><br/>
<h3>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Invoice Payment history</h3>
<table class="table" >
  <thead>
    <tr class="tr">
    <th scope="col">Sl.No</th>
      <th scope="col">Receiver Account No</th>
      <th scope="col">Sender Account No</th>
      <th scope="col">Amount</th>
      <th scope="col">Bill No</th>
    </tr>
  </thead>
  <tbody>
    {invoices.map((transaction, index) =>  <tr>
      <th scope="row" >{transaction.id}</th>
      <td >{transaction.receiver_id}</td>
      <td>{transaction.sender_id}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.bill_no}</td>
      
    </tr>)}
    
  </tbody>
</table>
    </div>
  )
}

export default AccountStatement