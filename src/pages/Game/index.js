import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTriviaQuestions } from '../../services/api';
import {
  Container, Question, Answers, Radio, Header,
} from './styles';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import { setNickname } from '../../store/actions/game';

const Game = () => {
  const { nickname } = useSelector((state) => state.game);

  const [results, setResults] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [checkedAnswer, setCheckedAnswer] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);

  const dispatch = useDispatch();
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
    setCheckedAnswer('');
  };

  const quitGame = () => {
    dispatch(setNickname(''));
    localStorage.removeItem('NICKNAME');
    history.push('/');
  };

  return (
    <>
      <Header>
        Welcome, {nickname}!
      </Header>
      <Container>
        <Question>
          <p>{results[currentQuestionIndex].question}</p>
        </Question>

        <Answers onSubmit={handleSubmitAnswer}>
          {results[currentQuestionIndex].answers.map((answer) => (
            <label key={answer} htmlFor="answer">
              <Radio
                type="radio"
                name="answer"
                checked={answer === checkedAnswer ? 'checked' : ''}
                onChange={() => setCheckedAnswer(answer)}
              />
              {`  ${answer}`}
            </label>
          ))}
          <Button>check answer</Button>
        </Answers>
      </Container>
      <Modal isShowing={isGameOver}>
        <h2>You lost!</h2>
        <Button onClick={quitGame}>quit game</Button>
        <Button onClick={restartGame}>restart</Button>
      </Modal>
    </>
  );
};

export default Game;
