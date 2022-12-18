import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
