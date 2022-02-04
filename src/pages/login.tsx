import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useToast } from "../hooks/useToast";
import { LoginForm } from "../components/login/LoginForm";
import { LoginContainer } from "../components/login/loginstyle";
import { LoginText } from "../components/login/LoginText";
import { AuthContext } from "../context/AuthContext";

interface ILoginData {
  email: string;
  senha: string;
}

export function Login() {
  const { toast, dismiss } = useToast();
  const [isLoading, setLoadingStatus] = useState(false);
  const [allowed, setAllowed] = useState(true);
  const { login, user } = useContext(AuthContext);
  const loadingToast = useRef("" as React.ReactText);

  async function handleLogin(loginData: ILoginData) {
    setAllowed(false);
    setLoadingStatus(true);

    try {
      await login(loginData);
      setLoadingStatus(false);

      setTimeout(() => {
        toast({
          message: "login efetuado com sucesso",
          type: "success",
          position: "top-right",
        });

        setAllowed(true);
      }, 700);
    } catch (error: any) {
      setLoadingStatus(false);

      setTimeout(() => {
        toast({ message: error.message, type: "error", position: "top-right" });
      }, 700);
    }
  }

  useEffect(() => {
    if (isLoading) {
      loadingToast.current = toast({
        message: "carregando",
        type: "info",
        isLoading,
        position: "top-right",
      });
    } else {
      dismiss(loadingToast.current);
    }
  }, [isLoading]);

  if (user && allowed) return <Navigate to="/" />;

  return (
    <LoginContainer>
      <LoginText />
      <LoginForm isLoading={isLoading} onSubmit={handleLogin} />
    </LoginContainer>
  );
}
