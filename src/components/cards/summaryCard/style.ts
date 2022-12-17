import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../../utils";

interface StyleProps {
  helperText?: string;
  iconBackgroundColor?: string;
  amount?: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${colors.smokeWhite};
  border-radius: ${borderRadius.medium};
  padding-top: ${(p: StyleProps) =>
    p.amount ? spacing.xsmall : spacing.small};
  padding-bottom: ${(p: StyleProps) =>
    p.amount ? spacing.xsmall : spacing.small};
  padding-left: ${(p: StyleProps) =>
    p.amount ? spacing.xsmall : spacing.xsmall};
  padding-right: ${(p: StyleProps) =>
    p.amount ? spacing.xsmall : spacing.xsmall};
  background-color: ${colors.white};
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: ${spacing.xsmall};
  }
`;

export const ContentOne = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HelperText = styled.div`
  margin-top: ${spacing.xxsmall};
`;

export const ContentTwo = styled.div`
  display: -webkit-flex;
  display: flex;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  background-color: ${(p: StyleProps) =>
    p.iconBackgroundColor ? p.iconBackgroundColor : colors.orangeVariantOne};
`;
