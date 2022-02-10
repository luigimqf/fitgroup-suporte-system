import { api } from ".";

interface IUserInfo {
  name: string;
  type: string;
}

export async function getUserInfo() {
  try {
    const { data } = await api.get<IUserInfo>("/userinfo");
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
}
