import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Home from "./Home";
import Sec from "./Sec";
import Main from "./Main";
import Checkbal from "./Checkbal";
import AccountStatement from "./AccountStatement";
import User from "./User";
import Payment from "./Payment";
import Fund from "./Fund";
import About from "./About";
import Invoice from "./Invoice";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<Sec/>} />
        <Route path="/Main" element={<Main/>} />
        <Route path="/Checkbal" element={<Checkbal/>} />
        <Route path="/AccountStatement" element={<AccountStatement />} />
        <Route path="/User" element={<User/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/Fund" element={<Fund/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Invoice" element={<Invoice/>} />
      </Routes>
    </Router>
  );
}

export default App;
