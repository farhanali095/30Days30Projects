import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");

  const handleSubmit = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display));
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "AC") {
      setDisplay("");
    } else if (value === "DE") {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="calculator">
          <form>
            <div className="display">
              <input type="text" value={display} />
            </div>
            <div>
              <input
                type="button"
                value="AC"
                onClick={() => handleSubmit("AC")}
              />
              <input
                type="button"
                value="DE"
                onClick={() => handleSubmit("DE")}
              />
              <input
                type="button"
                value="."
                onClick={() => handleSubmit(".")}
              />
              <input
                type="button"
                value="/"
                onClick={() => handleSubmit("/")}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={() => handleSubmit("7")}
              />
              <input
                type="button"
                value="8"
                onClick={() => handleSubmit("8")}
              />
              <input
                type="button"
                value="9"
                onClick={() => handleSubmit("9")}
              />
              <input
                type="button"
                value="*"
                onClick={() => handleSubmit("*")}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={() => handleSubmit("4")}
              />
              <input
                type="button"
                value="5"
                onClick={() => handleSubmit("5")}
              />
              <input
                type="button"
                value="6"
                onClick={() => handleSubmit("6")}
              />
              <input
                type="button"
                value="-"
                onClick={() => handleSubmit("-")}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                onClick={() => handleSubmit("1")}
              />
              <input
                type="button"
                value="2"
                onClick={() => handleSubmit("2")}
              />
              <input
                type="button"
                value="3"
                onClick={() => handleSubmit("3")}
              />
              <input
                type="button"
                value="+"
                onClick={() => handleSubmit("+")}
              />
            </div>
            <div>
              <input
                type="button"
                value="00"
                onClick={() => handleSubmit("00")}
              />
              <input
                type="button"
                value="0"
                onClick={() => handleSubmit("0")}
              />
              <input
                type="button"
                value="="
                onClick={() => handleSubmit("=")}
                className="equal"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
