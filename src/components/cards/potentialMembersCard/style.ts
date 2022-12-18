import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../../utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid ${colors.smokeWhite};
  border-radius: ${borderRadius.medium};
  padding: ${spacing.xsmall} 0px ${spacing.xsmall} 0px;
`;

export const Image = styled.img`
  background-color: ${colors.grey};
  width: 40px;
  height: 40px;
  border-radius: ${borderRadius.large};
`;

export const HelperText = styled.div`
  padding-top: ${spacing.xxsmall};
  padding-bottom: ${spacing.xsmall};
`;

export const PercentageContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.div`
  margin-right: ${spacing.xxsmall};
`;
