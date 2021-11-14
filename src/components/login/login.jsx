import React from "react";
import loginImg from "../../images/login.webp";

export const Login = ({
  handleLogin,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="bg" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              name="username"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
