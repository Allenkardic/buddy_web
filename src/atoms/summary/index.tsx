import { Container, Content } from "./style";
import { SummaryCard } from "../../components";

function Summary({ data }: any) {
  return (
    <Container>
      <Content>
        {data.map((item: any, index: string) => (
          <SummaryCard
            key={index}
            count={item.count}
            helperText={item.helper}
            icon={item.icon}
            iconBackgroundColor={item.iconBackgroundColor}
          />
        ))}
      </Content>
    </Container>
  );
}

export default Summary;
