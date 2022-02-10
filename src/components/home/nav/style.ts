import styled from "styled-components";

interface IContainerStyle {
  $display: boolean;
}

export const Container = styled.div<IContainerStyle>`
  height: 100%;
  width: 25%;
  background-color: tranperent;
  display: flex;
  justify-content: flex-start;
  position: ${(props) => (props ? "flex" : "fixed")};
  background-color: tranperent;
  z-index: 1;

  @media (max-width: 1100px) {
    position: ${(props) => (props ? "absolute" : "fixed")};
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const Toggle = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 1100px) {
    display: none;
  }
`;
