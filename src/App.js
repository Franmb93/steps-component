import { useEffect, useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [messages, setMessages] = useState([]);
  const fetchMessages = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    setMessages(data);
  };

  const handlePrevious = () => {
    if (step > 1) setStep((curStep) => curStep - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((curStep) => curStep + 1);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          className="btn"
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Prev
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
