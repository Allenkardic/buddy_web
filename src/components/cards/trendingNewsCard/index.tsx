import React, { ReactElement } from "react";
import { Container, Img, ContentTwo, HelperText } from "./style";
import { colors, images } from "../../../utils";
import { H2, H3, H5, H6 } from "../../../styles";

interface IProps {
  mainText?: string;
  helperText: string;
}

function TrendingNewsCard({ mainText, helperText }: IProps) {
  return (
    <Container>
      <Img src={images.user} alt='user image' />
      <ContentTwo>
        <H5 bold left>
          {mainText}
        </H5>
        <HelperText>
          <H6 color={colors.grey} left>
            {helperText}
          </H6>
        </HelperText>
      </ContentTwo>
    </Container>
  );
}

export default TrendingNewsCard;
