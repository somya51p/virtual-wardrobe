import React from "react";
import loginImg from "../../images/login.webp";

export const Register = ({
  handleRegister,
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
}) => {
  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="bg" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              name="username"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
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
        <button type="button" className="btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};
