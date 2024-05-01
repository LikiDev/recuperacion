import { useState } from 'react';

function useAuth() {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const mockUsername = "usuario";
    const mockPassword = "c0ntr4s3n4";

    if (username === mockUsername && password === mockPassword) {
      setUser({ username });
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null); 
  };

  return { user, login, logout };
}

export default useAuth;
