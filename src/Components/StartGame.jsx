import styled from "styled-components";

// Container with centered content and padding
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #1f1c2c, #928dab);
  color: #fff;
  padding: 2rem;
`;

// Styled heading
const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: underline;
`;

// Dice container
const DiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(10deg) scale(1.05);
    }
  }
`;

// Attractive button
const StyledButton = styled.button`
  padding: 12px 24px;
  border: 2px solid white;
  border-radius: 30px;
  font-size: 1rem;
  color: white;
  background-color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
    border-color: black;
    transform: scale(1.05);
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <DiceWrapper>
        <img src="/Images/dice-image-1.jpg" alt="Dice 1" />
        <img src="/Images/dice-image-1.jpg" alt="Dice 2" />
        <img src="/Images/dice-image-1.jpg" alt="Dice 3" />
      </DiceWrapper>
      <Title>Dice Game</Title>
      <StyledButton onClick={toggle}>Start Game</StyledButton>
    </Container>
  );
};

export default StartGame;
