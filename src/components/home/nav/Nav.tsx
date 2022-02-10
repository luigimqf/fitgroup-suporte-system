import { Container, Toggle } from "./style";
import { GoThreeBars as Bars } from "react-icons/go";
import { IoMdClose as X } from "react-icons/io";
import { useRef, useState } from "react";
import { SideBar } from "./sideBar/SideBar";

export function Nav() {
  const [displayNav, setDisplayNav] = useState(false);

  function setDisplay(currentValue: boolean) {
    setDisplayNav((currentValue) => !currentValue);
  }

  return (
    <Container $display={displayNav}>
      <SideBar display={displayNav} />
      <Toggle onClick={() => setDisplay(displayNav)}>
        {displayNav ? (
          <Bars style={{ width: "30px", height: "30px" }} />
        ) : (
          <X style={{ width: "20px", height: "20px" }} />
        )}
      </Toggle>
    </Container>
  );
}
