import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 67% 30%;
  gap: 2%;
  @media (max-width: 768px) {
    grid-template-columns: 100% 0%;
    gap: 0%;
  }
`;

export const ContentOne = styled.div`
  border: 0px solid red;
`;

export const ContentTwo = styled.div`
  // width: 33%;
  // flex-grow: 2;
  border: 0px solid green;
  @media (max-width: 768px) {
    display: none;
  }
`;
