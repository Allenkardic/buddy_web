import styled from "styled-components";
import { colors, boxShadow, spacing, borderRadius } from "../../utils";

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 67% 30%;
  // flex-direction: row;
  gap: 2%;
  // justify-content: space-between;
  // height: 100%;
`;

export const ContentOne = styled.div`
  // width: 65%;
  // flex-grow: 4;
  border: 1px solid red;
`;

export const ContentTwo = styled.div`
  // width: 33%;
  // flex-grow: 2;
  border: 1px solid green;
`;
