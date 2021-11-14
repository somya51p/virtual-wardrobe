import React, { useEffect, useState } from "react";
import "./App.css";
import { Login, Register } from "./components/login/index";
import userServices from "./services/user";
import { Deploy } from "./components/Deploy/Deploy";
import axios from "axios";
import { Wardrobe } from "./components/wardrobe";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isLogginActive, setIsLogginActive] = useState(true);
  const [rightClass, setRightClass] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("Abhishek");
  const [email, setEmail] = useState("test@vw.in");
  const [password, setPassword] = useState("test");

  const handleLogin = async () => {
    console.log(email);
    console.log(password);
    try {
      const newUser = await userServices.login({
        email,
        password,
      });
      console.log(newUser);
      setUser(newUser);
      window.localStorage.setItem("user", JSON.stringify(newUser));
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleRegister = async (event) => {
    console.log(email);
    console.log(password);
    try {
      const user = {
        name,
        email,
        password,
      };
      const newUser = await userServices.register(user);
      console.log("newUser", newUser);
      handleLogin();
      // window.localStorage.setItem("user", JSON.stringify(newUser));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    setRightClass("right");
  }, []);

  const changeState = () => {
    isLogginActive ? setRightClass("left") : setRightClass("right");
    // if (isLogginActive) {
    //   rightSide.classList.remove("right");
    //   rightSide.classList.add("left");
    // } else {
    //   rightSide.classList.remove("left");
    //   rightSide.classList.add("right");
    // }
    // this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    console.log(rightClass);
    setIsLogginActive(!isLogginActive);
  };

  const current = isLogginActive ? "Register" : "Login";
  const currentActive = isLogginActive ? "login" : "register";
  if(!user){
  return (
    <div className="App">
      <div className="login">
        <div
          className="container"
          // ref={(ref) => (this.container = ref)}
        >
          {isLogginActive && (
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
            />
          )}
          {!isLogginActive && (
            <Register
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleRegister={handleRegister}
            />
          )}
        </div>
        <RightSide
          className={rightClass}
          current={current}
          currentActive={currentActive}
          // containerRef={(ref) => (this.rightSide = ref)}
          onClick={changeState}
        />
      </div>
    </div>
  );
}
return(
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/wardrobe" element={<Wardrobe/>}/>
    <Route exact path="/1234" element={<h1>hiiii</h1>}/>
  
  </Routes>  
);
};

const RightSide = (props) => {
  return (
    <div
      className={`right-side ${props.className}`}
      //   ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
