import React from "react";
import {
  LoginTextLogo,
  LoginTextContainer,
  LoginTextTitle,
} from "./loginstyle";

export function LoginText() {
  return (
    <LoginTextContainer>
      <LoginTextLogo src="../../assets/fitgroup.png" />
      <LoginTextTitle> Abra o seu ticket na plataforma </LoginTextTitle>
    </LoginTextContainer>
  );
}
