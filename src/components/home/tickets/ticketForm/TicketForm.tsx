import { FormContainer } from "./style";

interface IProps {
  children: React.ReactNode;
}

export function TicketForm({ children }: IProps) {
  return <FormContainer>{children}</FormContainer>;
}
