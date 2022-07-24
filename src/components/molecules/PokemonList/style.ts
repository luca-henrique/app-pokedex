import styled, { css } from "styled-components/native";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.background};
    position: relative;
  `}
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    height: 220px;
    width: ${windowWidth}px;
    background-color: ${theme.colors.background};
    margin-left: -20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
    color: ${theme.colors.lightText};
  `}
`;
