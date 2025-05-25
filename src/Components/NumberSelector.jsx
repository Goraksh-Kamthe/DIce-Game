import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid ${(props) => (props.isSelected ? "#007BFF" : "#ccc")};
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 600;
  background-color: ${(props) => (props.isSelected ? "#007BFF" : "#f9f9f9")};
  color: ${(props) => (props.isSelected ? "#fff" : "#333")};
  border-radius: 12px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? "0 4px 12px rgba(0, 123, 255, 0.4)" : "0 2px 8px rgba(0,0,0,0.1)"};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#0056b3" : "#e0e0e0")};
  }
`;

const NumberSelector = ({selectedNumber,setSelectedNumber}) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <Title>Select Number</Title>
      <BoxContainer>
        {numbers.map((val) => (
          <Box
            key={val}
            onClick={() => setSelectedNumber(val)}
            isSelected={val === selectedNumber}
          >
            {val}
          </Box>
        ))}
      </BoxContainer>
    </Container>
  );
};

export default NumberSelector;
