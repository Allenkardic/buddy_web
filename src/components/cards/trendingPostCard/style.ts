import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../../utils";

interface StyleProps {
  error?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  border: 1px solid ${colors.smokeWhite};
  border-radius: ${borderRadius.medium};
  padding: ${spacing.small} 0px ${spacing.xsmall} ${spacing.small};
  @media (max-width: 992px) {
    width: 95%;
    margin-bottom: ${spacing.small};
  }
`;

export const HelperText = styled.div`
  margin: ${spacing.xsmall} 0px ${spacing.small} 0px;
`;

export const IconContainer = styled.div`
  margin-right: ${spacing.xsmall};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 17px;
  background-color: ${colors.greyVariantThree};
  padding: ${spacing.xxsmall} ${spacing.xsmall};
`;

export const PostText = styled.div`
  margin-left: ${spacing.xxsmall};
`;

export const InteractionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;
