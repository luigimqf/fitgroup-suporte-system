import { useContext, useEffect, useState } from "react";
import { Options } from "../options/Options";
import {
  Avatar,
  Bar,
  ExitText,
  FooterInfo,
  LogOut,
  OptionsContainer,
  User,
  UserInfo,
  Username,
} from "./style";
import { IoCheckmarkDoneCircleSharp as Success } from "react-icons/io5";
import {
  BsDoorOpen as Opened,
  BsLockFill as Lock,
  BsFillGridFill as Grid,
  BsFillPlusCircleFill as Plus,
} from "react-icons/bs";
import { BiLogOut as LogOff } from "react-icons/bi";
import { AuthContext } from "../../../../context/AuthContext";
import { UserInfoContext } from "../../../../context/UserContext";

interface IDisplay {
  display: boolean;
}

export function SideBar({ display }: IDisplay) {
  const { logout } = useContext(AuthContext);
  const { user } = useContext(UserInfoContext);
  const [userInitials, setUserInitials] = useState("");

  const iconStyle = {
    width: "20px",
    height: "20px",
    color: "white",
  };

  function handleNameInitials(name: any) {
    const fullName = name?.split(" ");
    setUserInitials(fullName?.[0][0] + fullName?.[1][0]);
  }

  useEffect(() => {
    handleNameInitials(user.name);
  }, [user]);

  return (
    <Bar $display={display}>
      <UserInfo>
        <User $display={display}>
          <Avatar $display={display}> {userInitials}</Avatar>
          <Username> {user.name} </Username>
        </User>
      </UserInfo>
      <OptionsContainer>
        <Options
          display={display}
          description="Todos"
          icon={<Grid style={iconStyle} />}
        />
        <Options
          display={display}
          description="Abertos"
          icon={<Opened style={iconStyle} />}
        />
        <Options
          display={display}
          description="Respondidos"
          icon={<Success style={iconStyle} />}
        />
        <Options
          display={display}
          description="Fechados"
          icon={<Lock style={iconStyle} />}
        />
        <Options
          display={display}
          description="Abrir novo Ticket"
          icon={<Plus style={iconStyle} />}
        />
      </OptionsContainer>

      <FooterInfo>
        <LogOut $display={display} onClick={logout}>
          <LogOff style={iconStyle} />
          <ExitText>Sair da plataforma</ExitText>
        </LogOut>
      </FooterInfo>
    </Bar>
  );
}
