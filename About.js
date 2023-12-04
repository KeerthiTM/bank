import React from "react";
import './Main.css';
import {useNavigate} from "react-router-dom";
import user1 from './user1.webp';

function About(){
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
            <p   onClick={() =>{navigate("/Fund");}} >  Fund Transfer</p>
        </div>
        <button class="A5" onClick={() =>{navigate("/Sec");}} >{" "}SignOut</button>
        <div class="A6">
            <button class="t5"onClick={() =>{navigate("/Main");}} >{" "}Back</button>
            
            <div class = "About">
            <h1>&emsp;&emsp;&emsp;&ensp;&ensp;Corporate Banking Services</h1>
            <br/>
            <h3>1. Credit</h3>
            <p>&emsp;&emsp;&emsp;&emsp;Loans and related credit products are offered to corporate customers. Credit facilities form the largest share of profits for commercial banks. The interest rates imposed on the loans are significantly high due to the amount of risk prevalent in lending to corporate customers.</p>
            <br/>
            <h3>2. Treasury services</h3>
            <p>&emsp;&emsp;&emsp;&emsp;Treasury services are used by companies to manage their working capital requirements. Such services are extremely important for multinational companies as they facilitate currency conversion.</p>
            <br/>
            <h3>3. Fixed asset requirement financing</h3>
            <p>&emsp;&emsp;&emsp;&emsp;Fixed asset requirement financing services are important for corporates involved in capital-intensive industries such as transportation, information technology, and heavy machinery manufacturing. Banks facilitate customized loans and lease agreements for the purchase of equipment, machinery, etc.</p>
            <br/>
            <h3>4. Employer services</h3>
            <p>&emsp;&emsp;&emsp;&emsp;Commercial banks also provide services such as the selection of retirement plans and healthcare plans, as well as payroll facilities, for employees.</p>
            <br/>
            <h3>5. Commercial services</h3>
            <p>&emsp;&emsp;&emsp;&emsp;Banks also provide services such as portfolio analysis, leverage analysis, debt and equity restructuring, analyses of real assets, etc. Other services that are of importance to corporate clients include asset management services and underwriters for initial public offering (IPOs), etc.</p>
            </div>
        </div>
    </div>    
    )
}

export default About;
