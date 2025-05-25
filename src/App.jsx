import { useState } from "react";
import StartGame from "./Components/StartGame";
import PlayGame from "./Components/PlayGame";

function App() {
  const [isGamestarted, setIsGameStarted]=useState(false);

  const toggle = ()=>{
    setIsGameStarted((prev)=>!prev);
  }
 

  return (
    <>
    {isGamestarted ? <PlayGame/> : <StartGame toggle={toggle} />}
      
    </>
  );
}

export default App;
