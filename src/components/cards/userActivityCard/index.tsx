import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Container, InfluncerText, Image } from "./style";
import { H2, H6 } from "../../../styles";
import { colors, placeholderImage } from "../../../utils";
import { Button } from "../../index";

interface IProps {
  title: string;
  helper: string;
  onClick?: () => void;
}

function UserActivityCard({ title, helper }: IProps) {
  return (
    <Container>
      <Image src={placeholderImage.user} alt='user acount' />
      <H2 color={colors.grey} semiBold>
        {title}
      </H2>
      <InfluncerText>
        <H6>{helper}</H6>
      </InfluncerText>
      <Button text='Logout' icon={<RiLogoutBoxRLine size={"15px"} />} />
    </Container>
  );
}

export default UserActivityCard;
