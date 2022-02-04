import React from "react";
import { Icon, Option, Title } from "./style";

interface IProps {
  description: string;
  icon: any;
}

export function Options({ description, icon }: IProps) {
  return (
    <Option>
      <Icon>{icon}</Icon>
      <Title>{description}</Title>
    </Option>
  );
}
