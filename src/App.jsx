import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [enteredValues, setenteredValues] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    investmentReturn: 7,
    duration: 10,
  });

  const handleChange = (identifier, newValue) => {
    console.log(identifier, newValue);
    setenteredValues((prevValues => {
      return {
        ...prevValues,
        [identifier]:  +newValue
      }
    }))
  }
  return (
    <div className="center">
      <Header />
      <UserInput changeInput={handleChange} enteredValues={enteredValues} />
      <Results enteredValues={enteredValues} />
    </div>


  )
}

export default App
