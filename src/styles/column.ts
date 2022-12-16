import styled from "styled-components";
import { getWidthString, px2vw } from "../utils";

const Column = styled.div`
  float: left;
  border: 0px solid #ccc;
  padding: ${px2vw(10)};
  ${({ xs }: any) => (xs ? getWidthString(xs) : "width:100%")};
  @media only screen and (min-width: 768px) {
    ${({ sm }: any) => sm && getWidthString(sm)};
  }
  @media only screen and (min-width: 992px) {
    ${({ md }: any) => md && getWidthString(md)};
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }: any) => lg && getWidthString(lg)};
  }
`;

export default Column;
