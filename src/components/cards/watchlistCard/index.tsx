import { memo } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {
  Container,
  Content,
  ContentType,
  ImgContainer,
  Img,
  HelperText,
} from "./style";
import { colors, images, currencyFormat } from "../../../utils";
import { H3, H4, H6 } from "../../../styles";

interface IProps {
  product: string;
  amount: number;
  trend: "up" | "down";
  perecentGrowth: number;
}

function WatchlistCard({ product, amount, trend, perecentGrowth }: IProps) {
  return (
    <Container>
      <Content>
        <ContentType>
          <H3 left bold>
            {product}
          </H3>
          {trend === "up" ? (
            <AiOutlineArrowUp size={"15px"} color={colors.green} />
          ) : (
            <AiOutlineArrowDown size={"15px"} color={colors.red} />
          )}
        </ContentType>
        <HelperText>
          <H4 left color={colors.grey}>
            {currencyFormat(amount, true)}
          </H4>
        </HelperText>
        <H6 semiBold left color={trend === "up" ? colors.green : colors.red}>
          {perecentGrowth}%
        </H6>
      </Content>
      <ImgContainer>
        <Img src={images.graph} alt='trending graph' />
      </ImgContainer>
    </Container>
  );
}

export default memo(WatchlistCard);
