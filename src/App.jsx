import React, { useEffect, useState } from "react";
import "./App.css";
import { Login, Register } from "./components/login/index";
import userServices from "./services/user";

const App = () => {
  const [isLogginActive, setIsLogginActive] = useState(true);
  const [rightClass, setRightClass] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      setEmail("");
      setPassword("");
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
