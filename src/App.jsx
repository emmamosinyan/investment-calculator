import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import {useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

const initialInput = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};


function App() {
  const [userInput, setUserInput] = useState(initialInput);

  const inputIsValid = userInput.duration >=1;

  function handleInput(key, value) {
    setUserInput((prev) => {
      return {
        ...prev,
        [key]: +value
      }
    })
  }

  const result = calculateInvestmentResults(userInput);

  // console.log({ result });

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} handleInput={handleInput} />
      {!inputIsValid && <p className="center">PLease enter valid input data</p>}
      {inputIsValid && <ResultsTable tableResult={result} />}
    </main>
  );
}

export default App;
