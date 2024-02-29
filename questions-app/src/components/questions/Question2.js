import React from 'react';
import Question from './Question';

const Question2 = ({ onNext, onPrevious }) => {
  const question = '¿Cuál es el río más largo del mundo?';
  const options = ['Amazonas', 'Nilo', 'Yangtsé', 'Misisipi'];

  return (
    <Question question={question} options={options} onNext={onNext} onPrevious={onPrevious} />
  );
};

export default Question2;
