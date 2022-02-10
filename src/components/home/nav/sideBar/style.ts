import styled from "styled-components";

interface IContainerStyle {
  $display: boolean;
}

export const Bar = styled.div<IContainerStyle>`
  width: ${(props) => (props.$display ? "100%" : "100%")};
  height: 100%;
  background-color: #121214;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;

  @media (max-width: 1100px) {
    width: ${(props) => (props.$display ? "0%" : "80%")};
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  /* background-color: green; */
`;

export const User = styled.div<IContainerStyle>`
  width: 90%;
  height: 60px;
  user-select: none;
  display: flex;
  /* background-color: purple; */
  align-items: center;
  justify-content: flex-start;
  transition: 0.5s;
  display: ${(props) => (props.$display ? "visible" : "visible")};

  @media (max-width: 1100px) {
    width: ${(props) => (props.$display ? "none" : "visible")};
  }
`;

export const Avatar = styled.div<IContainerStyle>`
  min-width: 50px;
  min-height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #95a5a6;
  background-color: #95a5a6;
  font-size: clamp(1.5rem, 2.5vw, 1.5rem);
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.$display ? "visible" : "visible")};

  @media (max-width: 1100px) {
    display: ${(props) => (props.$display ? "none" : "visible")};
  }
`;

export const Username = styled.p`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: clamp(0.65rem, 2.5vw, 0.7rem);
  font-weight: bold;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 768px) {
    white-space: normal;
    text-align: center;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 40%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-evenly;
`;

export const FooterInfo = styled.div`
  width: 100%;
  height: 30%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ExitText = styled.p`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: clamp(0.65rem, 2.5vw, 0.7rem);
  font-weight: bold;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 15px;
  transition: 0.5s;
`;

export const LogOut = styled.div<IContainerStyle>`
  width: 100%;
  height: 35px;
  /* background-color: purple; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    ${ExitText} {
      color: red;
    }
  }
  @media (max-width: 1100px) {
    display: ${(props) => (props.$display ? "none" : "visible")};
  }
`;
