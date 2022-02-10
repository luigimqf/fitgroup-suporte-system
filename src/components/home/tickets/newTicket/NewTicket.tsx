import { useState } from "react";
import { NewButton, NewContainer } from "./style";
import { AiFillPlusCircle as Plus } from "react-icons/ai";
import { Title } from "../../nav/options/style";

interface IDisplay {
  display: boolean;
}

export function NewTicket() {
  const [display, setDisplay] = useState(false);
  const buttonStyle = {
    width: "20px",
    height: "20px",
  };

  function handleSetDisplay(currentValue: boolean) {
    setDisplay((currentValue) => !currentValue);
  }
  return (
    <NewContainer $display={display}>
      <NewButton $display={display} onClick={() => handleSetDisplay(display)}>
        <Plus style={buttonStyle} />
        Abrir um ticket
      </NewButton>
    </NewContainer>
  );
}
