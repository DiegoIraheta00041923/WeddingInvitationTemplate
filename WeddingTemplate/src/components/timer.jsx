import React, { useState, useEffect } from 'react';
import '../css/timer.css'; // Importamos el CSS

const Countdown = ({ targetDate }) => {
  const [time, setTime] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-card">
      <h2 className="countdown-title">Sólo faltan...</h2>
      <div className="countdown-divider"></div>
      
      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-number">-{time.days}</span>
          <span className="countdown-label">Días</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">-{time.hours}</span>
          <span className="countdown-label">Horas</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">-{time.minutes}</span>
          <span className="countdown-label">Minutos</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;