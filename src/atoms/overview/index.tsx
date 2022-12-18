import React, { useState } from "react";
import { H2, H6 } from "../../styles";

import {
  Container,
  Content,
  Title,
  ItemCardContainer,
  ItemCardCover,
} from "./style";
import { PotentialMembersCard, BarChart } from "../../components";
import { colors } from "../../utils";

interface IProps {
  text: string;
  isSelected: boolean;
  onClick?: () => void;
}

function ItemCard({ text, isSelected, onClick }: IProps) {
  return (
    <ItemCardContainer onClick={onClick} isSelected={isSelected}>
      <H6 left color={isSelected ? colors.white : colors.grey}>
        {text}
      </H6>
    </ItemCardContainer>
  );
}

function Overview({ data }: any) {
  const [dataList, setDataList] = useState(data);

  const handleItemClicked = (item: any) => {
    const itemToEdit = item;

    const updatedProduct: any = [...dataList].map((el: any) => {
      if (el.text === itemToEdit.text) {
        el.isSelected = !el.isSelected;
      } else {
        el.isSelected = false;
      }
      return el;
    });
    setDataList(updatedProduct);
  };
  return (
    <Container>
      <Title>
        <H2 left bold>
          Overview
        </H2>
        <ItemCardCover>
          {dataList.map((item: any, index: string) => (
            <ItemCard
              onClick={() => handleItemClicked(item)}
              key={index}
              text={item.text}
              isSelected={item.isSelected}
            />
          ))}
        </ItemCardCover>
      </Title>

      <Content>
        <BarChart />
      </Content>
    </Container>
  );
}

export default Overview;
