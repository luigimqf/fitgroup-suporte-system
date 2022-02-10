import styled from "styled-components";

interface IDisplay {
  $display: boolean;
}

export const NewContainer = styled.div<IDisplay>`
  width: ${(props) => (props.$display ? "0%" : "100%")};
  height: ${(props) => (props.$display ? "0%" : "100%")};
  background-color: yellow;
  /* opacity: 0.5; */
  transition: 0.5s;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewButton = styled.div<IDisplay>`
  width: 30%;
  height: 15%;
  border-radius: 30px;
  background-color: purple;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: clamp(0.75rem, 2.5vw, 0.8rem);
  font-weight: bold;
  display: ${(props) => (props.$display ? "none" : "visible")};

  &:hover {
    background-color: red;
  }
`;

// export const Title = styled.p`
//   font-family: "Poppins", sans-serif;
//   font-size: clamp(0.75rem, 2.5vw, 0.1rem);
//   font-weight: bold;
// `;
