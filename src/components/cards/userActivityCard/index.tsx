import React from "react";
import { Container, InfluncerText, Image } from "./style";
import { H2, H6 } from "../../../styles";
import { colors } from "../../../utils";

interface IProps {
  title: string;
  helper: string;
  onClick?: () => void;
}

function UserActivityCard({ title, helper }: IProps) {
  return (
    <Container>
      <Image
        src='https://style.anu.edu.au/_anu/4/images/placeholders/person.png'
        alt='user'
      />
      <H2 color={colors.grey} semiBold>
        {title}
      </H2>
      <InfluncerText>
        <H6>{helper}</H6>
      </InfluncerText>
    </Container>
  );
}

export default UserActivityCard;
