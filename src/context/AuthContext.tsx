import React, { createContext, useEffect, useState } from "react";
import { api } from "../services";
import { loginRequest } from "../services/login";

//pega a requisição, atribui a local storage, ao estado user , lança o erro

interface ILoginData {
  email: string;
  senha: string;
}

interface IAuthContext {
  user: string;
  login: (data: ILoginData) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState("");

  async function login(data: ILoginData): Promise<void> {
    const loginData = await loginRequest(data);

    if (loginData) {
      localStorage.setItem("user", loginData.token);
    }
  }

  function logout(): void {
    setUser("");
  } // TODO remover restos do user, redirecionar para login

  function handleUserAuthentication() {
    const stringfiedUser = localStorage.getItem("user");

    if (!stringfiedUser) {
      api.defaults.headers.common["Authorization"] = ``;
      return;
    } //logout
    setUser(stringfiedUser);
    const user = JSON.parse(stringfiedUser);

    api.defaults.headers.common["Authorization"] = `Bearer ${user}`;
  }

  useEffect(() => {
    handleUserAuthentication();
  }, [user]);

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
