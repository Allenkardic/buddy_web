import React from "react";
import { H2 } from "../../styles";
import { IProps } from "../../components/cards/potentialMembersCard";
import { Container, Content, Title } from "./style";
import { TrendingPostCard } from "../../components";

function TendingPosts({ data }: any) {
  return (
    <Container>
      <Title>
        <H2 left bold>
          Trending Posts
        </H2>
      </Title>
      <Content>
        {data.map((item: any, index: string) => (
          <TrendingPostCard
            key={index}
            title={item.title}
            helperText={item.helper}
            comments={item.comments}
            replies={item.replies}
            likes={item.likes}
          />
        ))}
      </Content>
    </Container>
  );
}

export default TendingPosts;
