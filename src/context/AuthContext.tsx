import React, { createContext, ReactElement, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from "../services";
import { loginRequest } from "../services/login";

//pega a requisição, atribui a local storage, ao estado user , lança o erro

interface ILoginData {
  email: string;
  senha: string;
}

interface IAuthContext {
  userToken: string;
  login: (data: ILoginData) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [userToken, setUserToken] = useState("");

  async function login(data: ILoginData): Promise<void> {
    const loginData = await loginRequest(data);

    if (loginData) {
      const stringifiedToken = JSON.stringify(loginData.token);
      localStorage.setItem("token", stringifiedToken);
      setUserToken(stringifiedToken);
    }
  }

  function logout(): ReactElement {
    setUserToken("");
    localStorage.clear();
    api.defaults.headers.common["Authorization"] = ``;
    return <Navigate to="/login" />;
  }

  function handleUserAuthentication() {
    const stringfiedUser = localStorage.getItem("token");

    if (!stringfiedUser) {
      logout();
      return;
    } //logout
    setUserToken(stringfiedUser);
    const user = JSON.parse(stringfiedUser);

    api.defaults.headers.common["Authorization"] = `Bearer ${user}`;
  }

  useEffect(() => {
    handleUserAuthentication();
  }, [userToken]);

  return (
    <AuthContext.Provider value={{ login, logout, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
