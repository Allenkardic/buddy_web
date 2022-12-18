import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../utils";

interface StyleProps {
  error?: string;
}

export const Container = styled.div`
  height: 300px;
  width: 100%;
  @media (min-width: 768px) {
    height: auto;
    width: auto;
  }
`;
