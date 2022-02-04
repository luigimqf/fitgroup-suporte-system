import React, { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { Nav } from "../components/home/nav/Nav";
import { AuthContext } from "../context/AuthContext";

export function Home() {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <Nav />
    </>
  );
}
