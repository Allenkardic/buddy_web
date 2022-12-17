import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../utils";

interface StyleProps {
  error?: string;
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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  height: 100%;
  padding-bottom: ${spacing.small};
`;
