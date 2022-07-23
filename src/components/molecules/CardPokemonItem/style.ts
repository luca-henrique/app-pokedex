import styled, { css } from "styled-components/native";

interface PokemonType {
  type: string;
}

export const Container = styled.TouchableOpacity<PokemonType>`
  ${({ theme, type }) => css`
    display: flex;
    background-color: ${theme.colors.backgroundCard[type]};
    margin-top: 30px;
    border-radius: 10px;
    flex-direction: row;
    padding: 20px;
  `}
`;

export const LeftSide = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;
  `}
`;

export const RightSide = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
  `}
`;

export const PokemonImage = styled.Image`
  ${({ theme }) => css`
    margin-top: -40px;
    width: 130px;
    height: 130px;
  `}
`;

export const PokemonBallDetail = styled.Image`
  ${({ theme }) => css`
    position: absolute;
    right: -20px;
  `}
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 12px;
    color: ${theme.colors.lightText};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    text-transform: capitalize;
    margin-top: 6px;
    color: ${theme.colors.textWhite};
  `}
`;

export const ImageCardDetailLeftSide = styled.Image`
  ${({ theme }) => css`
    position: absolute;
    width: 74px;
    height: 32px;
    left: 84px;
    top: -10px;
  `}
`;

export const PokemonContentType = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
  `}
`;

export const PokemonType = styled.View`
  ${({ theme, type }) => css`
    display: flex;
    background-color: ${theme.colors.boxType[type]};
    padding: 6px;
    width: 66px;
    height: 26px;
    border-radius: 6px;
    margin-right: 6px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.textWhite};
    text-transform: capitalize;
  `}
`;

export const PokemonImg = styled.View`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  `}
`;
