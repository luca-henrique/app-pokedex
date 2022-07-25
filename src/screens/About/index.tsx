import React, { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";

import Circle from "../../assets/images/circle.png";

import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../service/api";
import { useTheme } from "styled-components/native";

import { Feather } from "@expo/vector-icons";

import {
  Header,
  BackButton,
  CircleImage,
  ContentImage,
  PokemonImage,
} from "./style";

type Stats = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type Ablitie = {
  ability: {
    name: string;
  };
};

type PokemonProps = {
  id: number;
  name: string;
  stats: Stats[];
  abilities: Ablitie[];
  color: string;
  types: PokemonTypes[];
};

type PokemonTypes = {
  type: {
    name: TypeName;
  };
};

export type TypeName =
  | "grass"
  | "fire"
  | "water"
  | "poison"
  | "normal"
  | "bug"
  | "flying"
  | "eletric"
  | "ground";

const PokemonDetail = ({ navigation }) => {
  const route = useRoute();
  const { colors } = useTheme();
  const idPokemon = route.params.id;

  const [pokemon, setPokemon] = useState<PokemonProps>({} as PokemonProps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(`pokemon/${idPokemon}`);
        const { stats, abilities, id, name, types } = response.data;

        const currentType = types[0].type.name as TypeName;
        const color = colors.backgroundCard[currentType];

        setPokemon({ stats, abilities, id, name, color, types });
      } catch (error) {
        Alert.alert("Opsss");
      } finally {
        setLoading(false);
      }
    }
    getPokemonDetail();
  }, []);

  return (
    <ScrollView>
      {loading ? (
        <></>
      ) : (
        <>
          <Header type={pokemon.types[0].type.name}>
            <BackButton onPress={() => navigation.goBack()}>
              <Feather name="chevron-left" size={24} color="#fff" />
            </BackButton>
          </Header>
          <ContentImage>
            <CircleImage source={Circle} />
            <PokemonImage
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
              }}
            />
          </ContentImage>
        </>
      )}
    </ScrollView>
  );
};

export default PokemonDetail;
