import React from 'react';
import Question from './Question';

const Question1 = ({ onNext }) => {
  const question = '¿Cuál es la capital de Francia?';
  const options = ['Madrid', 'París', 'Londres', 'Berlín'];

  return (
    <Question question={question} options={options} onNext={onNext} />
  );
};

export default Question1;
