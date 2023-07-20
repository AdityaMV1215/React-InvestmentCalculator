import React from "react";
import TableItems from "../TableItems/TableItems";
import './Calculator.css';

function Calculator(props) {
  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["investmentDuration"];
    let totalInterestGained = 0;
    let totalInvestedCapital = currentSavings;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterestGained += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInvestedCapital += yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterestGained: totalInterestGained,
        totalInvestedCapital: totalInvestedCapital
      });
    }

    return yearlyData;
  };

  const fallBackText = "No Data To Show.";

  console.log(props.userInput);
  return (
    <div className="result">
      {Object.keys(props.userInput).length === 0 && <p className="fall-back-text">{fallBackText}</p>}
      {Object.keys(props.userInput).length > 0 && <TableItems yearlyData={calculateHandler(props.userInput)}></TableItems>}
    </div>
  );
}

export default Calculator;
