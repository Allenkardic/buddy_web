import React, { useState } from "react";
import { H2 } from "../../styles";
import { IProps } from "../../components/cards/potentialMembersCard";
import { Container, Content, Title, Card } from "./style";
import { WatchlistCard } from "../../components";

function Watchlist({ data }: any) {
  return (
    <Container>
      <Title>
        <H2 bold left>
          Watchlist
        </H2>
      </Title>
      <Content>
        {data.map((item: any, index: string) => (
          <Card>
            <WatchlistCard
              key={index}
              product={item.product}
              amount={item.amount}
              trend={item.trend}
              perecentGrowth={item.perecentGrowth}
            />
          </Card>
        ))}
      </Content>
    </Container>
  );
}

export default Watchlist;
