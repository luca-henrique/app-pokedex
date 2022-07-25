import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text } from "react-native";

import Circle from "../../assets/images/circle.png";
import Dots from "../../assets/images/dots.png";

import { useRoute } from "@react-navigation/native";
import api from "../../service/api";
import { useTheme } from "styled-components/native";

import { Feather } from "@expo/vector-icons";

import FadeAnimation from "../../components/atomic/FadeAnimation";

import {
  Header,
  BackButton,
  CircleImage,
  ContentImage,
  PokemonImage,
  Content,
  PokemonId,
  PokemonName,
  PokemonTypeContainer,
  PokemonType,
  PokemonTypeText,
  DotsImage,
  Container,
  Title,
  StatsBar,
  Attribute,
  AttributeValue,
  ContentBar,
  ProgressBar,
  Ability,
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
    getPokemonDetail();
  }, []);

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

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {loading ? (
        <></>
      ) : (
        <>
          <Header type={pokemon.types[0].type.name}>
            <BackButton onPress={() => navigation.goBack()}>
              <Feather name="chevron-left" size={24} color="#fff" />
            </BackButton>

            <ContentImage>
              <CircleImage source={Circle} />
              <FadeAnimation>
                <PokemonImage
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                  }}
                />
              </FadeAnimation>
            </ContentImage>
            <Content>
              <PokemonId>#{pokemon.id}</PokemonId>
              <PokemonName>{pokemon.name}</PokemonName>
              <PokemonTypeContainer>
                {pokemon.types.map(({ type }) => {
                  return (
                    <PokemonType type={type.name} key={type.name}>
                      <PokemonTypeText>{type.name}</PokemonTypeText>
                    </PokemonType>
                  );
                })}
              </PokemonTypeContainer>
            </Content>
            <DotsImage source={Dots} />
          </Header>
          <Container>
            <Title type={pokemon.types[0].type.name}>Base states</Title>

            {pokemon.stats.map((attribute) => {
              return (
                <>
                  <StatsBar key={attribute.stat.name}>
                    <Attribute>{attribute.stat.name}</Attribute>
                    <AttributeValue>{attribute.base_stat}</AttributeValue>

                    <ContentBar>
                      <ProgressBar
                        type={pokemon.types[0].type.name}
                        borderwith={0}
                        progress={100}
                        width={attribute.base_stat}
                        color={pokemon.color}
                      />
                    </ContentBar>
                  </StatsBar>
                </>
              );
            })}
            <Title type={pokemon.types[0].type.name}>Abilitades</Title>

            {pokemon.abilities.map((ability) => {
              return <Ability>{ability.ability.name}</Ability>;
            })}
          </Container>
        </>
      )}
    </ScrollView>
  );
};

export default PokemonDetail;
