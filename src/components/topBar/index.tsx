import { useState } from "react";
import { BsBell } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Input } from "../";
import { H1 } from "../../styles";
import { colors } from "../../utils";
import {
  Container,
  ContentOne,
  ContentTwo,
  NavIconContainer,
  SearchContainer,
} from "./style";

function SideBar() {
  const [searchValue, setSarchValue] = useState("");
  return (
    <Container>
      <ContentOne>
        <H1 left bold>
          My Portfolio
        </H1>
      </ContentOne>
      <ContentTwo>
        <SearchContainer>
          <Input
            type='text'
            name='searchValue'
            onChange={() => {}}
            error={""}
            placeholder='Search'
            backgroundColor={colors.white}
            borderColor={colors.white}
            value={searchValue}
          />
        </SearchContainer>
        <NavIconContainer>
          <BsBell size={"20px"} color={colors.black} />
        </NavIconContainer>
        <NavIconContainer>
          <AiOutlinePlus size={"20px"} color={colors.black} />
        </NavIconContainer>
      </ContentTwo>
    </Container>
  );
}

export default SideBar;
