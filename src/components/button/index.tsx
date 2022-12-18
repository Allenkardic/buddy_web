import React, { ReactElement } from "react";
import { Container, ButtonIcon } from "./style";
import { H4 } from "../../styles";
import { colors } from "../../utils";
interface IProps {
  text: string;
  icon?: ReactElement;
  onClick?: () => void;
  disable?: boolean;
  type?: "button" | "submit";
}

function Button({
  text,
  icon,
  onClick,
  type = "button",
  disable = false,
}: IProps) {
  return (
    <Container type={type} onClick={onClick}>
      {icon && <ButtonIcon icon={icon}>{icon}</ButtonIcon>}
      <H4 color={icon ? colors.primary : colors.white} semiBold>
        {text}
      </H4>
    </Container>
  );
}

export default Button;
