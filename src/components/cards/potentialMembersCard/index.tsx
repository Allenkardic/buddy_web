import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import {
  Container,
  Image,
  HelperText,
  PercentageContent,
  IconContainer,
} from "./style";
import { images, colors } from "../../../utils";
import { H2, H6, H4 } from "../../../styles";

export interface IProps {
  title: string;
  helper: string;
  growthPercent: number;
}
function PotentialMembersCard({ helper, title, growthPercent }: IProps) {
  return (
    <Container>
      <Image src={images.user} alt='user acount' />
      <H2 color={colors.grey} semiBold>
        {title}
      </H2>
      <HelperText>
        <H6>{helper}</H6>
      </HelperText>
      <PercentageContent>
        <IconContainer>
          <FiTrendingUp color={colors.green} size={"20px"} />
        </IconContainer>
        <H4 bold>{growthPercent}%</H4>
      </PercentageContent>
    </Container>
  );
}

export default PotentialMembersCard;
