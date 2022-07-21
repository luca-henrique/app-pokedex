import React from "react";
import AnimatedLottieView from "lottie-react-native";

import {
  Container,
  Content,
  Footer,
  Title,
  SubTitle,
  WrapperAnimation,
  WrapperImage,
} from "./style";

import Pokemon from "../../assets/animations/pokemon.json";

import Button from "../../components/atomic/Button";

const Welcome = () => {
  return (
    <Container>
      <Content>
        <WrapperAnimation>
          <WrapperImage>
            <AnimatedLottieView
              style={{ width: 200 }}
              autoPlay
              source={Pokemon}
              loop
            />
          </WrapperImage>
        </WrapperAnimation>

        <Title>Bem Vindo</Title>
        <SubTitle>Encontre todo os pokemons em um só lugar</SubTitle>
      </Content>
      <Footer>
        <Button title="Entrar" />
      </Footer>
    </Container>
  );
};

export default Welcome;
