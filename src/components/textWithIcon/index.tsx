import React, { useState } from "react";
import { MdEmail, MdOutlineCheck } from "react-icons/md";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { AiFillUnlock } from "react-icons/ai";
import { BsChat } from "react-icons/bs";

import {
  TextWithIconContainer,
  IconContainer,
  Content,
  ChatBoxContainer,
  ChatBoxContent,
} from "./style";
import { colors } from "../../utils";
import { H4, H3, H6, H5 } from "../../styles";

interface IProps {
  text: string;
  chatBox?: boolean;
}

function TextWithIcon({ text, chatBox }: IProps) {
  if (chatBox) {
    return (
      <ChatBoxContainer>
        <ChatBoxContent>
          <H6 left color={colors.white}>
            {text}
          </H6>

          <BsChat size={"15px"} color={colors.white} />
        </ChatBoxContent>
      </ChatBoxContainer>
    );
  } else {
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
}

export default TextWithIcon;
