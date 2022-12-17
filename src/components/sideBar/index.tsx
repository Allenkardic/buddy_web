import React, { useState } from "react";
import { Container, Content } from "./style";
import { AiOutlineUser, AiOutlineDollarCircle } from "react-icons/ai";
import { FiUsers, FiMail, FiTrendingUp, FiSettings } from "react-icons/fi";
import { SideBarCard, UserActivityCard } from "../index";

function SideBar() {
  const [data, setData] = useState([
    {
      isSelected: true,
      text: "My Portfolio",
      icon: <AiOutlineUser />,
    },
    {
      isSelected: false,
      text: "My Group",
      icon: <FiUsers />,
    },
    {
      isSelected: false,
      text: "Messages",
      icon: <FiMail />,
    },
    {
      isSelected: false,
      text: "Analytics",
      icon: <FiTrendingUp />,
    },
    {
      isSelected: false,
      text: "Pack",
      icon: <AiOutlineDollarCircle />,
    },
    {
      isSelected: false,
      text: "Settings",
      icon: <FiSettings />,
    },
  ]);
  return (
    <Container>
      <Content>
        <div>
          {data.map((item, index) => (
            <SideBarCard
              isSelected={item.isSelected}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
        <UserActivityCard
          title='Thersa milly'
          helper='Influncer'
          onClick={() => {}}
        />
      </Content>
    </Container>
  );
}

export default SideBar;
