import React from "react";
import {
  LoginTextLogo,
  LoginTextContainer,
  LoginTextTitle,
} from "./loginstyle";

import fitgroupImg from "../../assets/fitgroup.png";

export function LoginText() {
  return (
    <LoginTextContainer>
      <LoginTextLogo draggable={false} src={fitgroupImg} alt="fitgroup logo" />
      <LoginTextTitle> Abra o seu ticket na plataforma </LoginTextTitle>
    </LoginTextContainer>
  );
}
