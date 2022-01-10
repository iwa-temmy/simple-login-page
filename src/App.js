import React, { useState } from "react";
import welcome_img from "./assets/images/welcome.svg";


function App() {
  const [userData, setUserData] = useState({ email: "", password: "", confirmPassword: "" });

  const handleTextChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value })
  }
  return (
    <div className="container">
      <aside>
        <img src={welcome_img} alt="welcome" className="welcome_img" />
      </aside>
      <main>
        <h1>Welcome Back!</h1>
        <p>Enter your details to login to your account</p>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" name="email" required onChange={handleTextChange} />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Password" required name="password" onChange={handleTextChange} />
          </div>
          <div className="input-group">
            <label>Confirm</label>
            <input type="password" placeholder="Confirm Password" required name="confirmPassword" onChange={handleTextChange} />
            {userData?.password !== userData?.confirmPassword ? <small>Password does not match</small> : ""}
          </div>
          <button type="submit">log in</button>
        </form>
      </main>
    </div>
  );
}

export default App;
