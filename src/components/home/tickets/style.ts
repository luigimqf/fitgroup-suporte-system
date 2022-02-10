import styled from "styled-components";

export const TicketList = styled.div`
  width: 75%;
  height: 100%;
  background-color: red;
  display: flex;
  overflow: auto;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
