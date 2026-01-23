import React, { useState, useEffect } from "react";
import '/src/css/timer.css'; 

const WeddingTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      setTimeRemaining(difference > 0 ? difference : 0);
    };
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Días", value: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) },
    { label: "Horas", value: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24) },
    { label: "Minutos", value: Math.floor((timeRemaining / (1000 * 60)) % 60) },
  ];

  return (
    <div className="wedding-wrapper">
      <div className="vertical-timer">
        {units.map((unit, index) => (
          <div key={index} className="timer-item">
            <img src="/pics/2.png" alt="decoración" className="floral-bg" />
            <div className="timer-content">
              <span className="number">{unit.value}</span>
              <span className="label">{unit.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingTimer;