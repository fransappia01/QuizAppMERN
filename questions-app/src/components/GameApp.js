import React, { useState, useEffect } from 'react';
import { Flex, Box, Heading, Button, useColorModeValue } from '@chakra-ui/react';
import Navbar from "./Navbar";
import Question from "./questions/Question";
import ResultadoModal from "./ResultsModal"; // Importa el nuevo componente 
import RecordList from "./HistoryAnswers"; 

const GameApp = ({ nombreUsuario }) => {
  const preguntas = [
    {
      id: 1,
      pregunta: '¿Cuál es la capital de Francia?',
      opciones: ['Madrid', 'Londres', 'París', 'Berlín'],
      respuestaCorrecta: 'París'
    },
    {
      id: 2,
      pregunta: '¿En qué año comenzó la Segunda Guerra Mundial?',
      opciones: ['1939', '1941', '1945', '1942'],
      respuestaCorrecta: '1939'
    },
    {
      id: 3,
      pregunta: '¿Cuál es el río más largo del mundo?',
      opciones: ['Amazonas', 'Nilo', 'Misisipi', 'Yangtsé'],
      respuestaCorrecta: 'Amazonas'
    },
    {
      id: 4,
      pregunta: '¿Quién escribió "Don Quijote de la Mancha"?',
      opciones: ['Miguel de Cervantes', 'Gabriel García Márquez', 'William Shakespeare', 'Friedrich Nietzsche'],
      respuestaCorrecta: 'Miguel de Cervantes'
    },
    {
      id: 5,
      pregunta: '¿Cuál es el metal más abundante en la corteza terrestre?',
      opciones: ['Hierro', 'Aluminio', 'Cobre', 'Oro'],
      respuestaCorrecta: 'Aluminio'
    },
    {
      id: 6,
      pregunta: '¿Cuál es el país más grande del mundo por área?',
      opciones: ['Rusia', 'Canadá', 'China', 'Estados Unidos'],
      respuestaCorrecta: 'Rusia'
    },
    {
      id: 7,
      pregunta: '¿Cuál es el océano más grande del mundo?',
      opciones: ['Océano Pacífico', 'Océano Atlántico', 'Océano Índico', 'Océano Antártico'],
      respuestaCorrecta: 'Océano Pacífico'
    },
    {
      id: 8,
      pregunta: '¿Quién pintó la Mona Lisa?',
      opciones: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
      respuestaCorrecta: 'Leonardo da Vinci'
    },
    {
      id: 9,
      pregunta: '¿Cuál es el planeta más grande del sistema solar?',
      opciones: ['Júpiter', 'Saturno', 'Neptuno', 'Urano'],
      respuestaCorrecta: 'Júpiter'
    },
    {
      id: 10,
      pregunta: '¿Cuál es la montaña más alta del mundo?',
      opciones: ['Monte Everest', 'Mont Blanc', 'K2', 'Aconcagua'],
      respuestaCorrecta: 'Monte Everest'
    }
    
  ];

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);

  const handleRespuesta = (respuesta) => {
    // Guarda la respuesta del usuario
    setRespuestasUsuario([...respuestasUsuario, respuesta]);
    // Avanza a la siguiente pregunta
    setPreguntaActual(preguntaActual + 1);
  };

  useEffect(() => {
    if (preguntaActual === preguntas.length) {
      calcularRespuestasCorrectas();
    }
  }, [preguntaActual]);

  const calcularRespuestasCorrectas = () => {
    let contadorCorrectas = 0;
    preguntas.forEach((pregunta, index) => {
      if (pregunta && pregunta.respuestaCorrecta === respuestasUsuario[index]) {
        contadorCorrectas++;
      }
    });
    setRespuestasCorrectas(contadorCorrectas);
    setMostrarModal(true);
  };

  const pregunta = preguntas[preguntaActual];

  const handleCloseModal = () => {
    setMostrarModal(false);
  };

  return (
    <div>
      <Navbar nombreUsuario={nombreUsuario} />
      <Flex align="center" justify="center" direction="column" mt={10}>
        {preguntaActual < preguntas.length && (
          <>
            <Heading as="h2" size="lg" mb={20}>
              Pregunta {preguntaActual + 1}
            </Heading>
            <Question
              pregunta={pregunta.pregunta}
              opciones={pregunta.opciones}
              onRespuesta={handleRespuesta}
            />
          </>
        )}
      </Flex>
      <ResultadoModal mostrarModal={mostrarModal} respuestasCorrectas={respuestasCorrectas} onClose={handleCloseModal} nombreUsuario={nombreUsuario} />
      
    </div>
  );
};

export default GameApp;
