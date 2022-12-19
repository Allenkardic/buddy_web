import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../utils";

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: ${borderRadius.medium};
  padding: ${spacing.small} ${spacing.small} ${spacing.small} ${spacing.small};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 95%;
  margin-bottom: ${spacing.xsmall};
`;

export const Title = styled.div`
  margin-bottom: ${spacing.small};
`;
