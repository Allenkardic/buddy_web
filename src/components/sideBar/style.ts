import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../utils";

interface StyleProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  background-color: ${colors.white};
  height: 95%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: ${spacing.medium};
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  @media (max-width: 768px) {
    display: none;
    // width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  height: 100%;
  padding-bottom: ${spacing.small};
`;

export const BottomTabContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    bottom: 0;
    position: fixed;
    display: block;
    z-index: 2;
    background-color: ${colors.smokeWhite};
    width: 100%;
  }
`;

export const BottomTabContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const TabNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // justify-content: space-between;
`;

export const TabNavIcon = styled.div`
  color: ${(p: StyleProps) => (p.isSelected ? colors.primary : colors.grey)};
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
`;
