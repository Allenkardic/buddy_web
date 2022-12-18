import React from "react";
import { H2 } from "../../styles";
import { IProps } from "../../components/cards/potentialMembersCard";
import { Container, Content, Title } from "./style";
import { PotentialMembersCard, BarChart } from "../../components";

function Overview({ data }: any) {
  return (
    <Container>
      <Title>
        <H2 left bold>
          Overview
        </H2>
      </Title>
      <Content>
        {/* {data.map((item: any, index: string) => (
          <PotentialMembersCard
            key={index}
            title={item.title}
            helper={item.helper}
            growthPercent={item.growthPercent}
          />
        ))} */}
        <BarChart />
      </Content>
    </Container>
  );
}

export default Overview;
