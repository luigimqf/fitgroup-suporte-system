import { Container, SideBar, Toggle } from "./style";
import { GoThreeBars as Bars } from "react-icons/go";
import { IoMdClose as X, IoMdBriefcase as Case } from "react-icons/io";
import { IoCheckmarkDoneCircleSharp as Success } from "react-icons/io5";
import { BsDoorOpen as Opened } from "react-icons/bs";
import { useState } from "react";
import { Options } from "../options/Options";

export function Nav() {
  const [displayNav, setDisplayNav] = useState(false);
  const iconSize = { width: "50px", height: "50px" };

  function setDisplay(currentValue: boolean) {
    setDisplayNav((currentValue) => !currentValue);
  }

  return (
    <Container>
      <SideBar display={displayNav}>
        <Options
          description="Abertos"
          icon={
            <Opened style={{ width: "15px", height: "15px" }} color="white" />
          }
        />
        <Options
          description="Fechados"
          icon={
            <Success style={{ width: "15px", height: "15px" }} color="white" />
          }
        />
      </SideBar>
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
