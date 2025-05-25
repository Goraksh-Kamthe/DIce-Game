import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0c3fc, #8ec5fc);
  font-family: "Poppins", sans-serif;
`;

const DiceBox = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const DiceImage = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

const Message = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #1a1919;
  margin-bottom: 16px;
`;

const Button = styled.button`
  width: 220px;
  padding: 12px;
  margin: 10px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ResetButton = styled(Button)`
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
`;

const ToggleRuleButton = styled(Button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const RuleBox = styled.div`
  max-width: 600px;
  margin-top: 20px;
  padding: 30px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  color: #161616;

  h3 {
    font-size: 22px;
    margin-bottom: 16px;
    color: #0f0f0f;
  }

  ul {
    padding-left: 20px;
    list-style: disc;
    li {
      margin-bottom: 10px;
    }
  }
`;

const RoleDice = ({
  currentDice,
  handleDice,
  setScore,
  setSelectedNumber,
  setCurrentDice,
}) => {
  const [isShowRule, setIsShowRule] = useState(false);
  const resetData = () => {
    setSelectedNumber(null);
    setCurrentDice(1);

    setScore(0);
  };
  return (
    <Wrapper>
      <DiceBox>
        <DiceImage
          src={`./Dice/dice_${currentDice}.jpg`}
          alt={`Dice face ${currentDice}`}
          onClick={handleDice}
        />
        <Message>Click the Dice to Roll</Message>
        <ResetButton onClick={resetData}>Reset Score</ResetButton>
        <ToggleRuleButton onClick={() => setIsShowRule(!isShowRule)}>
          {isShowRule ? "Hide Rules" : "Show Rules"}
        </ToggleRuleButton>
      </DiceBox>

      {isShowRule && (
        <RuleBox>
          <h3>🎲 How to Play Dice Game</h3>
          <ul>
            <li>Select a number between 1 to 6.</li>
            <li>Click on the dice image to roll.</li>
            <li>If your guess matches the dice, you gain that 10 points.</li>
            <li>If not, 2 points will be deducted.</li>
          </ul>
        </RuleBox>
      )}
    </Wrapper>
  );
};

export default RoleDice;
