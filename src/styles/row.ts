import styled from "styled-components";

const Row = styled.div`
  &:after {
    content: "";
    clear: both;
    display: table;
  }
  padding: 10px;
`;

export default Row;
