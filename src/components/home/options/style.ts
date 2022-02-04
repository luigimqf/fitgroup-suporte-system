import styled from "styled-components";

export const Option = styled.div`
  width: 100%;
  height: 30px;
  background-color: red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.3s;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;

export const Icon = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
`;
