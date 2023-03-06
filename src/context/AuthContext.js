import { axios } from 'axios';
import React, { createContext, useState } from 'react';
import { authReducer } from "./AuthReducer"


export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {

  const initialState = {
    user: '',
    password: '',
  }

  const [user, setUser] = useState(initialState);

  const IP = "172.20.101.58";

  const signIn = async (user) => {
    dispatch({ type: 'signIn', payload: alumno });
    try {
      const response = await fetch(`http://${IP}:5000/screens/Login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.status == 200) {
        //Obtencion y guardado dentro de la aplicacion los valores obtenidos desde la base de datos
        const AuthUser = await response.json();
        setUser(AuthUser);
      } else {
        setUser(initialState);
      }
    } catch (error) {
      console.log(error);
      setUser(initialState);
    }
  }

  const signOut = async () => {
    setUser(initialState);

  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>

  )
}

export default AuthContextProvider;