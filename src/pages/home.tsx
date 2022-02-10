import { useState } from "react";
import { Nav } from "../components/home/nav/Nav";
import { Wrapper } from "../components/home/style";
import { Tickets } from "../components/home/tickets/Tickets";

export function Home() {
  const [display, setDisplay] = useState(false);
  return (
    <Wrapper>
      <Nav />
      <Tickets />
    </Wrapper>
  );
}
