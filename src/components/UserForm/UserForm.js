import React, { useState } from "react";
import "./UserForm.css";

function UserForm(props) {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  function formSubmitHandler(event) {
    event.preventDefault();
    if (currentSavings === '' || yearlyContribution === '' || expectedReturn === '' || investmentDuration === '') {
        alert("Please Enter All The Form Inputs!!")
        return;
    }
    let formData = {
        currentSavings: +currentSavings,
        yearlyContribution: +yearlyContribution,
        expectedReturn: +expectedReturn,
        investmentDuration: +investmentDuration
    };
    props.onReceiveFormData(formData);
  }

  function inputChangeHandler(inputType, value) {
    if (inputType === "currentSavings") {
      setCurrentSavings(value);
    } else if (inputType === "yearlyContribution") {
      setYearlyContribution(value);
    } else if (inputType === "expectedReturn") {
      setExpectedReturn(value);
    } else {
      setInvestmentDuration(value);
    }
  }

  function resetButtonHandler(event) {
    setCurrentSavings('');
    setYearlyContribution('');
    setExpectedReturn('');
    setInvestmentDuration('');
    props.onResetButtonPressed();
  }
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="input-group">
        <span>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            min={1}
            id="current-savings"
            value={currentSavings}
            onChange={(event) =>
              inputChangeHandler("currentSavings", event.target.value)
            }
          />
        </span>
        <span>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            min={0}
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={(event) =>
              inputChangeHandler("yearlyContribution", event.target.value)
            }
          />
        </span>
      </div>
      <div className="input-group">
        <span>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="float"
            min={0.0}
            id="expected-return"
            value={expectedReturn}
            onChange={(event) =>
              inputChangeHandler("expectedReturn", event.target.value)
            }
          />
        </span>
        <span>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            min={1}
            step={1}
            max={70}
            id="duration"
            value={investmentDuration}
            onChange={(event) =>
              inputChangeHandler("investmentDuration", event.target.value)
            }
          />
        </span>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetButtonHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserForm;
