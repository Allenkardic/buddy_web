import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../../utils";

interface StyleProps {
  error?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.xsmall};
  width: 100%;
  background-color: ${colors.greyVariantThree};
  border-radius: ${borderRadius.medium};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
`;

export const ImgContainer = styled.div`
  width: 154px;
  height: 59px;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: block;
`;

export const HelperText = styled.div`
  margin-top: ${spacing.xsmall};
  margin-bottom: ${spacing.xxsmall};
`;

export const TrendContainer = styled.div`
  margin-left: ${spacing.small};
`;
