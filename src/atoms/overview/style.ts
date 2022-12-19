import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../utils";

interface StyleProps {
  isSelected: boolean;
}

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: ${borderRadius.medium};
  padding: ${spacing.small} ${spacing.small} ${spacing.small} ${spacing.small};
  margin: ${spacing.small} 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 95%;
  margin-bottom: ${spacing.xsmall};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${spacing.small};
`;

export const ItemCardContainer = styled.div`
  padding: ${spacing.xxsmall} ${spacing.xsmall};
  background-color: ${(p: StyleProps) =>
    p.isSelected ? colors.primary : colors.greyVariantThree};
  border-radius: ${borderRadius.medium};
  display: inline-block;
  align-self: flex-start;
  cursor: pointer;
`;

export const ItemCardCover = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
