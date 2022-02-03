import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginForm } from "../components/login/LoginForm";
import { LoginContainer } from "../components/login/loginstyle";
import { LoginText } from "../components/login/LoginText";
import { AuthContext } from "../context/AuthContext";

interface ILoginData {
  email: string;
  senha: string;
}

export function Login() {
  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);

  const errorNotify = () => {
    toast("Error", {
      theme: "dark",
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  async function handleLogin(loginData: ILoginData) {
    try {
      await login(loginData);
      return navigate("/home");
    } catch (error: any) {
      errorNotify();
    }
  }

  if (user) navigate("/home");

  return (
    <LoginContainer>
      <ToastContainer />
      <LoginText />
      <LoginForm onSubmit={handleLogin} />
    </LoginContainer>
  );
}
