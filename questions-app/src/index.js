import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import Form from './components/form';
import GameApp from './components/GameApp';
import Icon from'./fondo2.jpg'


const queryClient = new QueryClient();

const App = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [gameState, setGameState] = useState({
    gameStarted: false,
    formSubmitted: false
  });

  const [showBackgroundImage, setShowBackgroundImage] = useState(true);

  const handleStartGame = (nombre) => {
    setNombreUsuario(nombre);
    setGameState({
      gameStarted: true,
      formSubmitted: true
    });
    setShowBackgroundImage(false);
    console.log(`El nombre del participante es: ${nombre}`);
  };


  return (
    <div>
      {!gameState.gameStarted && <div className='title'>Quiz App</div>}
      {!gameState.gameStarted && !gameState.formSubmitted && <Form onSubmit={handleStartGame} />}
      {gameState.gameStarted &&  <GameApp nombreUsuario={nombreUsuario}/> }

    </div>
  );
};

ReactDOM.render(
  
  <QueryClientProvider client={queryClient}>
     <App />
     </QueryClientProvider>,
  document.getElementById('root')
);