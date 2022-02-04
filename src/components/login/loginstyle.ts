import styled from "styled-components";
import { keyframes } from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121214;
  position: relative;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const LoginFormContainer = styled.div`
  width: 450px;
  height: 400px;
  background-color: #202024;

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginTextContainer = styled.div`
  width: 450px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FormLogin = styled.form`
  width: 85%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const LoginFormInput = styled.input`
  color: #fff;
  font-weight: bold;
  background-color: #121214;

  width: 85%;
  height: 15%;
  padding-left: 13px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 3px;
  transition: 0.3s;

  &:focus {
    border: 1px solid #05c46b;
  }
`;

export const LoginSubmit = styled.button`
  width: 85%;
  height: 18%;

  background-color: #05c46b;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 8px;
  transition: 0.5s;
`;

export const LoginTextLogo = styled.img`
  width: 200px;
`;

export const LoginTextTitle = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  user-select: none;
  font-family: "Roboto", sans-serif;
`;
