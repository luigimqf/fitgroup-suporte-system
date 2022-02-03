import styled from "styled-components";
import { keyframes } from "styled-components";

const drop = keyframes`
  0%{
    top: -60px;
  }
  100%{
    top:50px;
  }

`;

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
  align-items: center;
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
  outline: none;
  border-radius: 8px;
`;

export const LoginTextLogo = styled.img`
  width: 250px;
  height: 70px;
`;

export const LoginTextTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  user-select: none;
  font-family: "Roboto", sans-serif;
`;

export const ErrorWrapper = styled.div`
  width: 250px;
  height: 60px;
  background-color: #dd5554;
  position: absolute;
  right: 5px;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  animation: ${drop} 0.7s;
`;

export const ErrorTitle = styled.h3`
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-bottom: 12px;
  color: #fff;
`;
