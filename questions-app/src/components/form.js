import React, { useState } from 'react';
import './form.css';
import Modal from 'react-modal';

const Form = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [submitted, setSubmitted] = useState(false); // Estado para controlar si el formulario se ha enviado

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim() !== '') {
      onSubmit(nombre);
      setSubmitted(true); // Marcamos el formulario como enviado
    } else {
      console.error('Se requiere nombre');
    }
  };

  return (
    <div className="form-container"> 
    <div className="navbar"></div>
      <div className="overlay"></div> 
      <Modal
        isOpen={!submitted}
        ariaHideApp={false}
        className="form-modal"
        overlayClassName="overlay" 
      >
        <form onSubmit={handleFormSubmit}>
          <label>
            Ingresa tu nombre:
            <input
              className='input-form'
              type="text"
              value={nombre}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Comenzar</button>
        </form>
      </Modal>
    </div>
  );
};

export default Form;
