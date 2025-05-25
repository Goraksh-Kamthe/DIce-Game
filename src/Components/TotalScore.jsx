import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  max-width: 200px;

  h1 {
    font-size: 100px;
    font-weight: 700;
    line-height: 100px;
  }
  p {
    font-size: 28px;
    font-weight: 500;
  }
`;

const TotalScore = ({ score }) => {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total score</p>
    </Container>
  );
};

export default TotalScore;
