import React from "react";
import { H3, H5 } from "../../../styles";
import {
  Container,
  HelperText,
  InteractionContainer,
  IconContainer,
  PostText,
} from "./style";
import { FaHeart, FaCommentAlt } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import { FcSms } from "react-icons/fc";
import { colors } from "../../../utils";
interface IProps {
  title: string;
  helperText: string;
  likes: number;
  comments: number;
  replies: number;
}

function TrendingPostCard({
  title,
  helperText,
  likes,
  comments,
  replies,
}: IProps) {
  return (
    <Container>
      <H3 left semiBold>
        {title}
      </H3>
      <HelperText>
        <H5 color={colors.grey} left>
          {helperText}
        </H5>
      </HelperText>
      <InteractionContainer>
        <IconContainer>
          <FaHeart color={colors.red} size={"15px"} />
          <PostText>
            <H5 semiBold>{likes}</H5>
          </PostText>
        </IconContainer>

        <IconContainer>
          <FaCommentAlt color={colors.gold} size={"14px"} />
          <PostText>
            <H5 semiBold>{comments}</H5>
          </PostText>
        </IconContainer>

        <IconContainer>
          <RiShareForwardFill color={colors.red} size={"15px"} />
          <PostText>
            <H5 semiBold>{replies}</H5>
          </PostText>
        </IconContainer>
      </InteractionContainer>
    </Container>
  );
}

export default TrendingPostCard;
