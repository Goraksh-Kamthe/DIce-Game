import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { toast, ToastContainer } from "react-toastify";

const PlayGame = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState("1");
  const [score, setScore] = useState(0);

  const handleDiceRoll = () => {
    if (!selectedNumber) {
      toast.error("Please select a number before rolling the dice");
      return;
    }

    const diceResult = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(diceResult.toString());

    if (selectedNumber == diceResult.toString()) {
      setScore(prevScore => prevScore + 10);
    } else {
      toast.warning("Selected number does not match the dice result");
      setSelectedNumber(null);
      setScore(prevScore => (prevScore > 1 ? prevScore - 2 : 0));
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="d-flex justify-content-between m-3 p-5">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} handleDice={handleDiceRoll} setScore ={setScore} setCurrentDice={setCurrentDice} setSelectedNumber={setSelectedNumber}  />
    </>
  );
};

export default PlayGame;
