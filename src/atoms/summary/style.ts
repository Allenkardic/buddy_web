import styled from "styled-components";
import { colors, boxShadow, spacing, borderRadius } from "../../utils";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  margin-bottom: ${spacing.small};
`;
