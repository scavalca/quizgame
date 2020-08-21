import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchTriviaQuestions } from '../../services/api';
import {
  Container, Question, Answers,
} from './styles';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const Game = () => {
  const [results, setResults] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [checkedAnswer, setCheckedAnswer] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const handleApiResponse = async () => {
      const response = await fetchTriviaQuestions();
      setResults(response.data);
      setIsLoading(false);
    };
    handleApiResponse();
  }, []);

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  const handleSubmitAnswer = (event) => {
    event.preventDefault();
    if (!checkedAnswer) {
      return;
    }
    const { correctAnswer } = results[currentQuestionIndex];
    if (checkedAnswer === correctAnswer) {
      if (results.length === currentQuestionIndex + 1) {
        return;
      }
      setCurrentQuestionIndex((prevState) => prevState + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const restartGame = () => {
    setResults(shuffle([...results]));
    setCurrentQuestionIndex(0);
    setIsGameOver(false);
  };

  const quitGame = () => {
    history.push('/');
  };

  return (
    <>
      <Container>
        <Question>
          <h2>{results[currentQuestionIndex].question}</h2>
        </Question>
        <form onSubmit={handleSubmitAnswer}>
          {results[currentQuestionIndex].answers.map((answer) => (
            <React.Fragment key={answer}>
              <input
                type="radio"
                name="answer"
                onChange={() => setCheckedAnswer(answer)}
              />
              <label htmlFor="answer">{answer}</label>
            </React.Fragment>
          ))}
          <Button>check answer</Button>
        </form>
      </Container>
      <Modal isShowing={isGameOver}>
        <p>Voce perdeu</p>
        <Button onClick={quitGame}>Abandonar o jogo</Button>
        <Button onClick={restartGame}>Reiniciar</Button>
      </Modal>
    </>
  );
};

export default Game;
