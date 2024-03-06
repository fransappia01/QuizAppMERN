import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getRecords } from '../api/record'; // Importa la función getRecords del archivo api.js
import './HistoryAnswers.css';
import { Button } from '@chakra-ui/react';

const RecordList = ({ nombreUsuario }) => {
  const { data: records, isLoading, isError } = useQuery('records', getRecords);

  const handleJugarDeNuevo = () => {
    window.location.reload(); // Recarga la página para empezar de nuevo
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Ocurrió un error al cargar los registros</div>;
  }

  // Verifica si records es un arreglo antes de iterar sobre él
  if (!Array.isArray(records)) {
    return <div>Los registros no son válidos</div>;
  }
  // Ordena los registros por puntuación de mayor a menor
  const sortedRecords = [...records].sort((a, b) => b.puntuacion - a.puntuacion);

console.log(nombreUsuario)

  return (
    <div className='record-list'>
      <h2>Leaderboard</h2>
      <div className='centered-container'>
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Nombre</th>
              <th>Puntuación</th>
            </tr>
          </thead>
          <tbody>
            {sortedRecords.map((record, index) => (              
               <tr key={index} className={record.nombre === nombreUsuario ? 'user-row' : ''}>
                <td>{index + 1}</td>
                <td>{record.nombre}</td>
                <td>{record.puntuacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button type="submit" className="boton" colorScheme="blue" onClick={handleJugarDeNuevo}>Jugar de nuevo</Button>
    </div>
  );
};

export default RecordList;
