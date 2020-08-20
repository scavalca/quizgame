import React, { useEffect, useState } from 'react';
import { fetchTriviaQuestions } from '../../services/api';
import { Container, Question, Answers } from './styles';

const Home = () => {
  const [results, setResults] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [checkedAnswer, setCheckedAnswer] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);

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
    // sair do jogo

  };

  return (
    <Container>
      {isGameOver ? (
        <div>
          <p>Voce perdeu</p>
          <button type="button" onClick={quitGame}>Abandonar o jogo</button>
          <button type="button" onClick={restartGame}>Reiniciar</button>
        </div>
      ) : (
        <>
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
            <button type="submit">Check answer</button>
          </form>
        </>
      )}
    </Container>
  );
};

export default Home;
