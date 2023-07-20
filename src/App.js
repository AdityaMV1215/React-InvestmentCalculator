import logo from "./assets/investment-calculator-logo.png";
import UserForm from "./components/UserForm/UserForm";
import React, { useState } from "react";
import Calculator from "./components/Calculator/Calculator";

function App() {
  

  const [finalFormData, setFinalFormData] = useState({});

  function receiveFormDataHandler(formData) {
    setFinalFormData((prevState) => {
      return ({...prevState, ...formData});
    });
  }

  function resetButtonHandler() {
    setFinalFormData({});
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <UserForm onReceiveFormData={receiveFormDataHandler} onResetButtonPressed={resetButtonHandler}></UserForm>
      <Calculator userInput={finalFormData}></Calculator>
    </div>
  );
}

export default App;
