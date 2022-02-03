import { api } from "./index";

interface ILoginResponse {
  usuarioTipo: string;
  usuarioNome: string;
  token: string;
}

interface ILoginData {
  email: string;
  senha: string;
}

export async function loginRequest(values: ILoginData) {
  try {
    const { data } = await api.post<ILoginResponse>("/login", values);

    return data;
  } catch (error) {
    throw new Error();
  }
}
