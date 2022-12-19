import { GiSpring } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { TopBar } from "../../components";
import { Container } from "../../styles";
import { ContentOne, ContentTwo, DashboardContainer } from "./style";
import {
  PotentialMembers,
  TrendingPosts,
  Summary,
  Revenue,
  TrendingNews,
  Watchlist,
  Overview,
} from "../../atoms";
import { colors } from "../../utils";

function Dashboard() {
  const potentialMembers = [
    { title: "Wanda Parker", helper: "@ashking1234", growthPercent: 10.3 },
    { title: "Terry Brown", helper: "@ashking1234", growthPercent: 9.8 },
    { title: "Lucas Holmes", helper: "@ashking1234", growthPercent: 6.5 },
    { title: "Janice Miller", helper: "@ashking1234", growthPercent: 8.6 },
    { title: "Wanda Parker", helper: "@ashking1234", growthPercent: 9.8 },
  ];

  const trendingPosts = [
    {
      title: "8 Upcoming Influencer Marketing Trends and Benefits and the all",
      helper:
        "Marketing is evolving. It's changing from a one-way street to a two-way consation and bla bla bla nkfdjkjkfdjkfdjk fjkjkdfjk",
      likes: 260,
      replies: 123,
      comments: 234,
    },
    {
      title: "How Influencer Marketing Affects Consumer Buying Bahavior",
      helper:
        "As influencer marking continues to grow, consumers have been turing to their bla bla bla jlkdfkjdgjkjkdkjdfjk",
      likes: 260,
      replies: 123,
      comments: 234,
    },
  ];

  const summary = [
    {
      count: 51,
      helper: "Total Channels",
      icon: <GiSpring color={colors.green} size={"25px"} />,
      iconBackgroundColor: colors.greenVariantOne,
    },
    {
      count: 125,
      helper: "New Members",
      icon: <AiOutlineUser color={colors.purple} size={"25px"} />,
      iconBackgroundColor: colors.purpleVariantOne,
    },
    {
      count: 789,
      helper: "All Impressions",
      icon: <AiOutlineUser color={colors.primary} size={"25px"} />,
      iconBackgroundColor: colors.orangeVariantOne,
    },
  ];

  const revenue = [
    {
      amount: 4000,
      helper: "Total Channels",
      icon: <GiSpring color={colors.green} size={"25px"} />,
      iconBackgroundColor: colors.greenVariantOne,
    },
    {
      amount: 2120,
      helper: "New Members",
      icon: <AiOutlineUser color={colors.purple} size={"25px"} />,
      iconBackgroundColor: colors.purpleVariantOne,
    },
    {
      amount: 1752,
      helper: "All Impressions",
      icon: <AiOutlineUser color={colors.primary} size={"25px"} />,
      iconBackgroundColor: colors.orangeVariantOne,
    },
  ];

  const trendingNews = [
    {
      mainText: "Russsia & Ukraine war",
      helperText: "Marketing is evolving . It's changing",
    },
    {
      mainText: "Elon Musk bought Twitter",
      helperText: "Marketing is evolving . It's changing",
    },
    {
      mainText: "Fuel Crisi Everywhere",
      helperText: "Marketing is evolving . It's changing",
    },
  ];

  const watchlist = [
    {
      product: "AAPL",
      amount: 142.9,
      trend: "up",
      perecentGrowth: 0.47,
    },
    {
      product: "BPL",
      amount: 142.9,
      trend: "down",
      perecentGrowth: 0.78,
    },
  ];

  const overview = [
    {
      text: "Robbin Hood",
      isSelected: true,
    },
    {
      text: "Amereitrade",
      isSelected: false,
    },
    {
      text: "Fidelity",
      isSelected: false,
    },
    {
      text: "Charles",
      isSelected: false,
    },
  ];

  return (
    <Container>
      <TopBar />
      <DashboardContainer>
        <ContentOne>
          <Summary data={summary} />
          <Overview data={overview} />
          <TrendingPosts data={trendingPosts} />
          <PotentialMembers data={potentialMembers} />
        </ContentOne>
        <ContentTwo>
          <Watchlist data={watchlist} />
          <Revenue data={revenue} />
          <TrendingNews data={trendingNews} />
        </ContentTwo>
      </DashboardContainer>
    </Container>
  );
}

export default Dashboard;
