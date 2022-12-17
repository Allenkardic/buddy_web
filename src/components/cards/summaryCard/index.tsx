import React, { ReactElement } from "react";
import { Container, ContentOne, ContentTwo, HelperText } from "./style";
import { colors } from "../../../utils";
import { H2, H3, H6 } from "../../../styles";

interface IProps {
  count?: number;
  amount?: number;
  helperText: string;
  iconBackgroundColor?: string;
  icon: ReactElement;
}

function SummaryCard({
  count,
  helperText,
  amount,
  icon,
  iconBackgroundColor,
}: IProps) {
  return (
    <Container amount={amount}>
      <ContentOne>
        {amount ? (
          <H3 bold left>
            {amount}
          </H3>
        ) : (
          <H2 bold left>
            {count}
          </H2>
        )}
        <HelperText>
          <H6 left color={colors.grey}>
            {helperText}
          </H6>
        </HelperText>
      </ContentOne>
      <ContentTwo iconBackgroundColor={iconBackgroundColor}>{icon}</ContentTwo>
    </Container>
  );
}

export default SummaryCard;
