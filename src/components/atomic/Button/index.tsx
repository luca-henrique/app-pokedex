import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./style";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

const Button = ({ title }: ButtonProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
