import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../utils";

export const TextWithIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spacing.medium};
  width: 100%;
`;

export const IconContainer = styled.div`
  background-color: ${colors.primary};
  height: 25px;
  width: 25px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  margin-right: ${spacing.xsmall};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  align-item: left;
`;
