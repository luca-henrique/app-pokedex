import React from "react";
import {
  Container,
  LeftSide,
  PokemonId,
  RightSide,
  PokemonName,
  ImageCardDetailLeftSide,
  PokemonType,
  PokemonContentType,
  PokemonTypeText,
  PokemonImage,
  PokemonBallDetail,
} from "./style";

type PokemonType = {
  type: { name: string };
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
} & TouchableOpacityProps;

import DotsImage from "../../../assets/images/dots.png";
import PokeBall from "../../../assets/images/pokeballCard.png";

import { TouchableOpacityProps } from "react-native";

const CardPokemonItem = ({ pokemon, ...rest }: Pokemon) => {
  return (
    <Container type={pokemon.types[0].type.name} {...rest}>
      <LeftSide>
        <PokemonId>#00{pokemon.id}</PokemonId>
        <PokemonName>{pokemon.name}</PokemonName>
        <ImageCardDetailLeftSide source={DotsImage} />

        <PokemonContentType>
          {pokemon.types.map(({ type }: PokemonType) => {
            return (
              <PokemonType type={type.name}>
                <PokemonTypeText>{type.name}</PokemonTypeText>
              </PokemonType>
            );
          })}
          <PokemonType></PokemonType>
        </PokemonContentType>
      </LeftSide>
      <RightSide>
        <PokemonBallDetail source={PokeBall} />
        <PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
          }}
        />
      </RightSide>
    </Container>
  );
};

export default CardPokemonItem;
