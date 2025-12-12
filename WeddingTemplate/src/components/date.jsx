import React from 'react';
import '/src/css/date.css'; 

const DateDisplay = ({ month, day, year }) => {
  return (
    <div className="date-container">
      
      <div className="date-content">
        <span className="date-month">{month.toUpperCase()}.</span>
        <span className="date-day">{day}</span>
        <span className="date-year">.{year}</span>
      </div>
      
    </div>
  );
};

export default DateDisplay;
