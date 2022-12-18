import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: ${borderRadius.medium};
  padding: ${spacing.small} ${spacing.small} ${spacing.small} ${spacing.small};
  margin: ${spacing.small} 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  margin-bottom: ${spacing.small};
`;
