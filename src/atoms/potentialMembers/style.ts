import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: ${borderRadius.medium};
  padding: ${spacing.small};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-column-gap: ${spacing.xsmall};
  grid-row-gap: ${spacing.xsmall};
  background-color: ${colors.white};
`;

export const Title = styled.div`
  margin-bottom: ${spacing.small};
`;
