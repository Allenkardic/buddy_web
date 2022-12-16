import styled from "styled-components";
import { colors } from "../utils";

interface StyleProps {
  left?: boolean;
  right?: boolean;
  center?: boolean;
}

export const H1 = styled.div`
  color: ${({ color }: any) => (color ? color : colors.black)};
  font-size: 4.5em;
  text-align: ${(p: StyleProps) =>
    p.right ? "right" : p.left ? "left" : "center"};
  @media (min-width: 48rem) {
    font-size: 1.5em;
  }
`;

export const H2 = styled.div`
  color: ${({ color }: any) => (color ? color : colors.black)};
  font-size: 4em;
  text-align: ${(p: StyleProps) =>
    p.right ? "right" : p.left ? "left" : "center"};
  @media (min-width: 48rem) {
    font-size: 1.2em;
  }
`;

export const H3 = styled.div`
  color: ${({ color }: any) => (color ? color : colors.black)};
  font-size: 3.5em;
  text-align: ${(p: StyleProps) =>
    p.right ? "right" : p.left ? "left" : "center"};
  @media (min-width: 48rem) {
    font-size: 1em;
  }
`;

export const H4 = styled.div`
  color: ${({ color }: any) => (color ? color : colors.black)};
  font-size: 3em;
  text-align: ${(p: StyleProps) =>
    p.right ? "right" : p.left ? "left" : "center"};
  @media (min-width: 48rem) {
    font-size: 0.9em;
  }
`;

export const H5 = styled.div`
  color: ${({ color }: any) => (color ? color : colors.black)};
  font-size: 2.5em;
  text-align: ${(p: StyleProps) =>
    p.right ? "right" : p.left ? "left" : "center"};
  @media (min-width: 48rem) {
    font-size: 0.8em;
  }
`;

export const H6 = styled.div`
  color: ${({ color }: any) => (color ? color : colors.black)};
  font-size: 2em;
  text-align: ${(p: StyleProps) =>
    p.right ? "right" : p.left ? "left" : "center"};
  @media (min-width: 48rem) {
    font-size: 0.7em;
  }
`;

// export default Text;
