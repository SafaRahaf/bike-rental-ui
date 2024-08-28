import { useState } from "react";
import "./Spinner.css";

const options = ["10%", "20%", "30%", "40%", "50%"];

const Spinner = ({ onSpinComplete }: any) => {
  const [angle, setAngle] = useState(0);
  const [result, setResult] = useState("");

  const spinWheel = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const newAngle = angle + 360 * 5 + randomIndex * (360 / options.length);
    setAngle(newAngle);
    setResult(`You won ${options[randomIndex]}!`);

    setTimeout(onSpinComplete, 5000);
  };

  return (
    <div className="spinner-container">
      <div className="wheel" style={{ transform: `rotate(${angle}deg)` }}>
        {options.map((option, index) => (
          <div
            key={index}
            className="wheel-option"
            style={{
              transform: `rotate(${index * (360 / options.length)}deg)`,
            }}
          >
            {option}
          </div>
        ))}
      </div>
      <button className="spin-button" onClick={spinWheel}>
        Spin the Wheel!
      </button>
      {result && <div className="result-message">{result}</div>}
    </div>
  );
};

export default Spinner;
