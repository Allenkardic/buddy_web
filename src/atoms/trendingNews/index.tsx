import { H2 } from "../../styles";
import { Container, Content, Title, Card } from "./style";
import { TrendingNewsCard } from "../../components";

function Revenue({ data }: any) {
  return (
    <Container>
      <Title>
        <H2 bold left>
          Trending News
        </H2>
      </Title>
      <Content>
        {data.map((item: any, index: string) => (
          <Card key={index}>
            <TrendingNewsCard
              mainText={item.mainText}
              helperText={item.mainText}
            />
          </Card>
        ))}
      </Content>
    </Container>
  );
}

export default Revenue;
