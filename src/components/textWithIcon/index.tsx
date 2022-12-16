import React, { useState } from "react";
import { MdEmail, MdOutlineCheck } from "react-icons/md";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { AiFillUnlock } from "react-icons/ai";

import { TextWithIconContainer, IconContainer, Content } from "./style";
import { colors } from "../../utils";
import { H4, H3, H6, H5 } from "../../styles";

interface IProps {
  text: string;
}

function TextWithIcon({ text }: IProps) {
  return (
    <TextWithIconContainer>
      <IconContainer>
        <MdOutlineCheck size={"15px"} color={colors.white} />
      </IconContainer>
      <Content>
        <H5 left color={colors.grey}>
          {text}
        </H5>
      </Content>
    </TextWithIconContainer>
  );
}

export default TextWithIcon;
