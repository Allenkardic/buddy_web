import React from "react";
import { H2 } from "../../styles";
import { IProps } from "../../components/cards/potentialMembersCard";
import { Container, Content, Title } from "./style";
import { PotentialMembersCard } from "../../components";

function PotentialMembers({ data }: any) {
  console.log(data, "data");
  return (
    <Container>
      <Title>
        <H2 left bold>
          Potential Members
        </H2>
      </Title>
      <Content>
        {data.map((item: any, index: string) => (
          <PotentialMembersCard
            key={index}
            title={item.title}
            helper={item.helper}
            growthPercent={item.growthPercent}
          />
        ))}
      </Content>
    </Container>
  );
}

export default PotentialMembers;
