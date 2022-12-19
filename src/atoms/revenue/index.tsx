import { H2 } from "../../styles";
import { Container, Content, Title, Card } from "./style";
import { SummaryCard } from "../../components";

function Revenue({ data }: any) {
  return (
    <Container>
      <Title>
        <H2 bold left>
          Revenue
        </H2>
      </Title>
      <Content>
        {data.map((item: any, index: string) => (
          <Card>
            <SummaryCard
              key={index}
              amount={item.amount}
              helperText={item.helper}
              icon={item.icon}
              iconBackgroundColor={item.iconBackgroundColor}
            />
          </Card>
        ))}
      </Content>
    </Container>
  );
}

export default Revenue;
