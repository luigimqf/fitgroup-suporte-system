import styled from "styled-components";

interface IContainerStyle {
  $display: boolean;
}

export const Title = styled.p`
  color: #95a5a6;
  font-family: "Poppins", sans-serif;
  font-size: clamp(0.75rem, 2.5vw, 0.8rem);
  font-weight: bold;
  user-select: none;
  transition: 0.5s;
`;

export const Option = styled.div<IContainerStyle>`
  width: 100%;
  height: 40px;
  display: flex;
  border-left: 2px solid transparent;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  margin-top: 10px;
  cursor: pointer;
  display: ${(props) => (props.$display ? "visible" : "visible")};

  &:hover {
    border-left: 2px solid #fff;
    ${Title} {
      color: #fff;
    }
  }
  @media (max-width: 1100px) {
    display: ${(props) => (props.$display ? "none" : "visible")};
  }
`;

export const Info = styled.div`
  width: 95%; // 160px
  height: 80%; //32px
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Icon = styled.div`
  width: 20%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
