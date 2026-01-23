import React, { useState } from 'react';
import '/src/css/RSVP.css'; 

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    attendance: 'yes',
    guests: 1,
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('¡Gracias por confirmar!');
  };

  return (
    <div className="rsvp-container">
      <div className="rsvp-card">
        <h2>Confirmar Asistencia</h2>
        <p className="rsvp-subtitle">Nos encantaría que nos acompañaras. Confirmar asistencia antes del ...</p>
        
        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="input-group">
            <label>¿Asistirás?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={handleChange}
                />
                <span>Sí, allí estaré</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === 'no'}
                  onChange={handleChange}
                />
                <span>No podré ir</span>
              </label>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="guests">Número de Personas</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="notes">Notas o Alergias</label>
            <textarea
              id="notes"
              name="notes"
              rows="3"
              placeholder="Opcional..."
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Enviar Confirmación</button>
        </form>
      </div>
    </div>
  );
};

export default RSVPForm;