import React, { useState } from "react";
import { Input, TextWithIcon } from "../../components";
import { H1, H2, H3, H4, H5, H6, Container } from "../../styles";
import { ContentOne, ContentTwo, DashboardContainer } from "./style";
import { PotentialMembers, TrendingPosts } from "../../atoms";

function Dashboard() {
  const [potentialMembers, setPotentialMembers] = useState([
    { title: "Wanda Parker", helper: "@ashking1234", growthPercent: 10.3 },
    { title: "Terry Brown", helper: "@ashking1234", growthPercent: 9.8 },
    { title: "Lucas Holmes", helper: "@ashking1234", growthPercent: 6.5 },
    { title: "Janice Miller", helper: "@ashking1234", growthPercent: 8.6 },
    { title: "Wanda Parker", helper: "@ashking1234", growthPercent: 9.8 },
  ]);

  const [trendingPosts, setTrendingPosts] = useState([
    {
      title: "8 Upcoming Influencer Marketing Trends and Benefits",
      helper:
        "Marketing is evolving. It's changing from a one-way street to a two-way consation and bla bla bla",
      likes: 260,
      replies: 123,
      comments: 234,
    },
    {
      title: "How Influencer Marketing Affects Consumer Buying Bahavior",
      helper:
        "As influencer marking continues to grow, consumers have been turing to their bla bla bla",
      likes: 260,
      replies: 123,
      comments: 234,
    },
  ]);
  return (
    <Container>
      {/* <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3</H3>
      <H4>H4</H4>
      <H5>H5</H5>
      <H6>H6</H6>
      <Input
        label='Fisrts name'
        type='password'
        name='name'
        onChange={() => {}}
        error={""}
      />
      <TextWithIcon text="Tract real-time overview of company's financial performance" />
      <TextWithIcon text="Tract real-time overview of company's financial performance" />
      <TextWithIcon text="Tract real-time overview of company's financial performance" /> */}
      <DashboardContainer>
        <ContentOne>
          <TrendingPosts data={trendingPosts} />
          <PotentialMembers data={potentialMembers} />
        </ContentOne>
        <ContentTwo>
          <div>jhfhfhhfh</div>
        </ContentTwo>
      </DashboardContainer>
    </Container>
  );
}

export default Dashboard;
