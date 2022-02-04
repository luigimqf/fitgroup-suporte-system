import React, { useState } from "react";

import {
  FormLogin as Form,
  LoginFormContainer as Container,
  LoginFormInput as Input,
  LoginSubmit as SubmitButton,
} from "./loginstyle";

import { pattern, patternBr } from "../../utils/emailPattern";

interface ILoginData {
  email: string;
  senha: string;
}

type Props = {
  onSubmit: (data: ILoginData) => void;
  isLoading: boolean;
};

//valida os campos e manda para a função recebida por props da pagina login

export function LoginForm({ onSubmit, isLoading }: Props) {
  const [loginData, setLoginData] = useState({ email: "", senha: "" });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setLoginData((currentData) => ({ ...currentData, [name]: value }));
  }

  const isButtonEnabled =
    (pattern.test(loginData.email) || patternBr.test(loginData.email)) &&
    loginData.senha.length > 3;

  return (
    <Container>
      <Form>
        <Input
          onChange={handleChange}
          required
          type="email"
          placeholder="Email"
          name="email"
          value={loginData?.email}
        />

        <Input
          onChange={handleChange}
          type="password"
          placeholder="Senha"
          name="senha"
          value={loginData?.senha}
        />
        <SubmitButton
          disabled={!isButtonEnabled || isLoading}
          type="button"
          style={{
            cursor: !isButtonEnabled ? "not-allowed" : "pointer",
            backgroundColor:
              !isButtonEnabled || isLoading ? "#3d3d3d" : "#05c46b",
          }}
          onClick={() => onSubmit(loginData)}
        >
          {isLoading ? "Carregando" : "Enviar"}
        </SubmitButton>
      </Form>
    </Container>
  );
}
