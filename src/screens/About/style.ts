import styled, { css } from "styled-components/native";

import { TypeName } from ".";

type TypeProps = {
  type: TypeName;
};

export const Header = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
    height: 340px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    position: relative;
  `}
`;

export const BackButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    top: 70px;
    left: 30px;
  `}
`;

export const ContentImage = styled.View`
  ${({ theme }) => css``}
`;

export const CircleImage = styled.Image`
  ${({ theme }) => css``}
`;

export const PokemonImage = styled.Image`
  ${({ theme }) => css``}
`;
