import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
        flex:1
        background-color: ${theme.colors.background}
    `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 70%;
    background-color: ${theme.colors.backgroundWater};
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  `}
`;

export const WrapperAnimation = styled.View`
  ${({ theme }) => css`
    width: 200px;
    height: 300px;
    background-color: ${theme.colors.backgroundCard.water};
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    transform: rotate(30deg);
  `}
`;

export const WrapperImage = styled.View`
  transform: rotate(-30deg);
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    height: 32%;
    width: 100%;
    background-color: ${theme.colors.background};

    justify-content: center;
    align-items: center;
    padding: 20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    color: ${theme.colors.textWhite};
    margin-top: 10px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    margin-top: 10px;
    color: ${theme.colors.textWhite};
  `}
`;
