import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login(username, password)) {
      alert('Login Successful');
    } else {
      alert('Invalid Username or Password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
