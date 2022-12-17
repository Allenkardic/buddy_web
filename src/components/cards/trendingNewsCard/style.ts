import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../../utils";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border: 1px solid ${colors.smokeWhite};
  border-radius: ${borderRadius.medium};
  padding: ${spacing.xsmall} ${spacing.xsmall};
`;

export const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${borderRadius.medium};
  background-color: ${colors.grey};
  margin-right: ${spacing.xsmall};
`;

export const ContentTwo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HelperText = styled.div`
  margin-top: ${spacing.xxsmall};
`;
