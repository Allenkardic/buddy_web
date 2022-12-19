import styled from "styled-components";
import { colors, spacing, borderRadius, boxShadow } from "../../utils";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: 100% 100%;
  }
`;

export const ContentOne = styled.div`
  background-color: ${colors.white};
  padding-top: ${spacing.xlarge};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentTwo = styled.div`
  padding-top: ${spacing.xlarge};
  padding-bottom: ${spacing.xlarge};
  position: relative;
  background-color: ${colors.greyVariantSix};
`;

export const LoginContainer = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding: ${spacing.large} ${spacing.medium};
  background-color: ${colors.white};
  border: 1px solid ${colors.greyVariantFive};
  border-radius: ${borderRadius.small};
  border-shadow: ${boxShadow.light};
`;

export const HelperText = styled.div`
  margin-top: ${spacing.xsmall};
  margin-bottom: ${spacing.small};
`;

export const ExistingUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  margin-top: ${spacing.xlarge};
  gap: 10px;
`;

export const InfoContainer = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const ReversedRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-top: 100px;
`;

export const ImgContainer = styled.div`
  width: 154px;
  height: 59px;
  margin-bottom: 100px;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: block;
`;
