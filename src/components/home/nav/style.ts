import styled from "styled-components";

interface IContainerStyle {
  display: boolean;
}

export const Container = styled.div`
  height: 100vh;
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  background-color: tranperent;
`;

export const SideBar = styled.div<IContainerStyle>`
  width: ${(props) => (props.display ? "0px" : "150px")};
  height: 100%;
  background-color: blue;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Toggle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
