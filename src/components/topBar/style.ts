import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../utils";

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
  margin: ${spacing.small} 0px;
`;

export const ContentOne = styled.div`
  flex-grow: 1;
`;

export const ContentTwo = styled.div`
  flex-grow: 3;

  display: flex;
  justify-content: flex-end;
`;

export const SearchContainer = styled.div`
  width: 60%;
`;

export const NavIconContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${colors.white};
  margin-left: ${spacing.xsmall};
`;
