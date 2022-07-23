import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import api from "../../../service/api";

import { Container } from "./style";

import CardPokemonItem from "../CardPokemonItem";
import FadeAnimation from "../../atomic/FadeAnimation";
type PokemonType = {
  type: { name: string };
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type Request = {
  id: number;
  types: PokemonType[];
};

const Home = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get("/pokemon");

      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfoPokemon(pokemon.url);

          return { name: pokemon.name, id, types };
        })
      );
      setData(payloadPokemons);
    }

    getAllPokemons();
    setLoading(false);
  }, []);

  async function getMoreInfoPokemon(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;
    return { id, types };
  }

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => (
          <FadeAnimation>
            <CardPokemonItem pokemon={pokemon} />
          </FadeAnimation>
        )}
      />
    </Container>
  );
};

export default Home;
