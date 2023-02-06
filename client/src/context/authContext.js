import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post('/auth/login', inputs, { withCredentials: true });
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post('/auth/logout', { withCredentials: true });
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
    console.log(JSON.stringify(currentUser))
    console.log(currentUser)
  }, [currentUser])

  return (
    <AuthContext.Provider value={ { currentUser, login, logout } }>
      { children }
    </AuthContext.Provider>
  )
}