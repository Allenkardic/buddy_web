import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../../utils";

interface StyleProps {
  error?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${spacing.xsmall};
  padding-right: ${spacing.xxsmall};
  width: 100%;
  border: 1px solid
    ${(p: StyleProps) => (p.error ? colors.red : colors.primary)};
  border-radius: ${borderRadius.small};
  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 1px ${colors.primary};
  }
`;
