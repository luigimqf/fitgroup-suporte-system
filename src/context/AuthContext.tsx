import React, {
  createContext,
  ReactComponentElement,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Navigate } from "react-router-dom";
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
      console.log(loginData);
      const stringifiedToken = JSON.stringify(loginData.token);
      localStorage.setItem("user", stringifiedToken);
      setUser(stringifiedToken);
    }
  }

  function logout(): ReactElement {
    setUser("");
    localStorage.removeItem("user");
    api.defaults.headers.common["Authorization"] = ``;
    return <Navigate to="/login" />;
  } // TODO remover restos do user, redirecionar para login

  function handleUserAuthentication() {
    const stringfiedUser = localStorage.getItem("user");

    if (!stringfiedUser) {
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
