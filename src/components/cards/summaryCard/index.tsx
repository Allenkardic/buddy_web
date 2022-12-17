import React, { ReactElement } from "react";
import { GiSpring } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { Container, ContentOne, ContentTwo, HelperText } from "./style";
import { colors } from "../../../utils";
import { H2, H6 } from "../../../styles";

interface IProps {
  count: number;
  helperText: string;
}

function SummaryCard({ count, helperText }: IProps) {
  return (
    <Container>
      <ContentOne>
        <H2 bold left>
          {count}
        </H2>
        <HelperText>
          <H6 left color={colors.grey}>
            {helperText}
          </H6>
        </HelperText>
      </ContentOne>
      <ContentTwo helperText={helperText}>
        {helperText === "Total Channels" ? (
          <GiSpring size={"25px"} color={colors.green} />
        ) : helperText === "New Members" ? (
          <AiOutlineUser size={"25px"} color={colors.purple} />
        ) : (
          <FiTrendingUp size={"25px"} color={colors.primary} />
        )}
      </ContentTwo>
    </Container>
  );
}

export default SummaryCard;
