import React from "react";
import { Input, TextWithIcon } from "../../components";
import { H1, H2, H3, H4, H5, H6 } from "../../styles";

function Dashboard() {
  return (
    <div>
      <div>Dashboard page</div>
      <div>Dashboard page</div>
      <div>Dashboard page</div>
      <div>Dashboard page</div>
      <div>Dashboard page</div>
      <div>Dashboard page</div>
      <H1>H1</H1>
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
      <TextWithIcon text="Tract real-time overview of company's financial performance" />
    </div>
  );
}

export default Dashboard;
