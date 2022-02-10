import React from "react";
import { Icon, Info, Option, Title } from "./style";

interface IProps {
  description: string;
  icon: any;
  display: boolean;
}

export function Options({ description, icon, display }: IProps) {
  return (
    <Option $display={display}>
      <Info>
        <Icon>{icon}</Icon>
        <Title>{description}</Title>
      </Info>
    </Option>
  );
}
