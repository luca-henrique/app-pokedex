import React from "react";

import { Container } from "./style";

import PokemonList from "../../components/molecules/PokemonList";

const Home = () => {
  return (
    <Container>
      <PokemonList />
    </Container>
  );
};

export default Home;
