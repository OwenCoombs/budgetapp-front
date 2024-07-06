import React, { useContext, useState } from "react";
import { AuthContext } from "./context";
import { getToken } from "./api";

function Login() {
  const { auth } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    getToken({ auth, username, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <div className="input-group">
          <label className="input-label">Username:</label>
          <input
            className="input-field"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Password:</label>
          <input
            className="input-field"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="button-container">
          <button className="submit-button" onClick={submit}>Submit</button>
        </div>
        <hr className="divider" />

      </div>
    </div>
  );
}

export default Login;

