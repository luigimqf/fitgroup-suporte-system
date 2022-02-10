import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUserInfo } from "../services/userInfo";
import { AuthContext } from "./AuthContext";

interface IProps {
  children: React.ReactNode;
}

interface IUserInfo {
  name: string;
  type: string;
}

interface IUserContext {
  user: IUserInfo;
}

export const UserInfoContext = createContext({} as IUserContext);

export const UserInfoProvider = ({ children }: IProps) => {
  const [user, setUser] = useState({} as IUserInfo);

  async function handleUserInfo() {
    console.log("entrei");
    const info = await getUserInfo();

    if (info) {
      setUser(info);
    }
  }

  useEffect(() => {
    handleUserInfo();
  }, []);

  return (
    <UserInfoContext.Provider value={{ user }}>
      {children}
    </UserInfoContext.Provider>
  );
};
