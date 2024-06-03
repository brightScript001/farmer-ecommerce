import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
import RoleSelection from "./components/RoleSelection/RoleSelection";
import BuyerSignUp from "./components/SignUp/BuyerSignUp/BuyerSignUp";
import SellerSignUp from "./components/SignUp/SellerSignUp/SellerSignUp";
import VerifyEmailPage from "./components/VerifyEmail/VerifyEmailPage";
import VerifyEmailSuccessPage from "./components/Verified/VerifyEmailSuccessPage";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/buyersignup" element={<BuyerSignUp />} />
            <Route path="/sellersignup" element={<SellerSignUp />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route
              path="/verify-email-success"
              element={<VerifyEmailSuccessPage />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
