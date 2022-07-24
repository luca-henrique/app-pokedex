import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import api from "../../../service/api";

import { Container, Header, Title } from "./style";

import PokeballHeader from "../../../assets/images/pokeball.png";

import CardPokemonItem from "../CardPokemonItem";
import { useNavigation } from "@react-navigation/native";
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

const PokemonList = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  const { navigate } = useNavigation();

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
        ListHeaderComponent={
          <>
            <Header source={PokeballHeader} />
            <Title>Pokédex</Title>
          </>
        }
        contentContainerStyle={{ paddingHorizontal: 20 }}
        data={data}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => (
          <CardPokemonItem
            pokemon={pokemon}
            onPress={() =>
              navigate("About", {
                id: pokemon.id,
              })
            }
          />
        )}
      />
    </Container>
  );
};

export default PokemonList;
