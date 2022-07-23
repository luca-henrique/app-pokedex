import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.background};
  `}
`;
