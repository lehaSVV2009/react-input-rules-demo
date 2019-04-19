import styled from "styled-components";

export const Label = styled.p`
  color: ${props => props.theme.colors.darkGray};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -1em;
  margin-left: -1em;
`;

export const LeftItem = styled.div`
  flex-basis: 30%;
  padding: 0 1em;

  @media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    flex-basis: 100%;
    padding: 0.7em 1em;
  }
`;

export const RightItem = styled.div`
  flex-basis: 70%;
  padding: 0 1em;

  @media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    flex-basis: 100%;
    padding: 0.7em 1em;
  }
`;
